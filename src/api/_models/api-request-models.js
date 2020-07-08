class SearchRequestModel {
  query = null

  page = 1

  perPage = 10

  constructor(query, page = 1, perPage = 10) {
    if (!query) throw new Error('\'query\' is empty');
    this.query = query;
    this.page = page;
    this.perPage = perPage;
  }
}

class FetchPackageRequestModel {
  packageName = ''

  constructor(packageName) {
    if (!packageName) throw new Error('\'query\' is empty');
    this.packageName = packageName;
  }
}

export {
  SearchRequestModel,
  FetchPackageRequestModel,
};
