class SearchResponseModel {
  items = []

  nbPages = 0

  nbHits = 0

  constructor(responseObject) {
    this.items = responseObject.response.hits;
    this.nbPages = responseObject.response.nbPages;
    this.nbHits = responseObject.response.nbHits;
  }
}

class FetchPackageResponseModel {
  package = null

  constructor(response) {
    this.package = response.data;
  }
}

export {
  SearchResponseModel,
  FetchPackageResponseModel,
};
