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

export {
  SearchRequestModel,
};
