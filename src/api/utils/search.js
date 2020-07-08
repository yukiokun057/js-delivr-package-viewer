const algoliasearch = require('algoliasearch');

const algolia = algoliasearch('OFCNCOG2CU', 'f54e21fa3a2a0160595bb058179bfb1e', { protocol: 'https:' });
const index = algolia.initIndex('npm-search');

export default (queryString, page = 0, hitsPerPage = 10) => Promise.resolve().then(() => {
  const parsed = parseQuery(queryString);
  const options = {
    page,
    hitsPerPage,
    attributesToHighlight: [],
    attributesToRetrieve: ['deprecated', 'description', 'repository', 'homepage', 'keywords', 'license', 'name', 'owner', 'version', 'links'],
    analyticsTags: ['jsdelivr'],
  };

  if (parsed.facetFilters) {
    options.facetFilters = parsed.facetFilters;
  }

  return index.search(parsed.query, options).then((response) => {
    // An exact match should always come first.
    // TODO: here you can add fuzzy string search
    response.hits.sort((a, b) => (a.name === parsed.query ? -1 : b.name === parsed.query));

    return {
      response: mergeDeep({}, response),
      query: queryString,
    };
  });
});

export const getByName = (name) => index.getObject(name).then((pkg) => mergeDeep({}, pkg));

const ATTR_REGEXP = /\s*(?:[a-z]+)\s*:\s*(?:.(?![a-z]*\s*:))*/gi;
const QUERY_REGEXP = /^((?:(?:[^\s:]+(?![a-z]*\s*:))\s*)*)/i;
const filterMapping = {
  author: 'owner.name',
};

function parseQuery(queryString) {
  const query = queryString.match(QUERY_REGEXP)[0].trim();
  const substr = queryString.substr(query.length);
  const filters = [];
  let match;

  while ((match = ATTR_REGEXP.exec(substr)) !== null) {
    const temp = match[0].split(':');

    if (filterMapping[temp[0].trim()]) {
      filters.push(`${filterMapping[temp[0].trim()]}:${temp[1].trim()}`);
    }
  }

  return {
    query,
    facetFilters: filters.join(','),
  };
}

function isObject(item) {
  return (item && typeof item === 'object' && !Array.isArray(item));
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    Object.keys(source).map((key) => {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    });
  }
  return mergeDeep(target, ...sources);
}
