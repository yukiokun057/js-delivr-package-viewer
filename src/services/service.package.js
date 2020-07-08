import api from 'api';
import { SearchRequestModel, FetchPackageRequestModel } from '../api/_models/api-request-models';

const packageService = (function () {
  async function search(query, page, perPage) {
    const responseModel = await api.search(
      new SearchRequestModel(query, page, perPage),
    );
    if (!responseModel) return null;
    return responseModel;
  }

  async function fetchPackage(packageName) {
    const responseModel = await api.fetchPackage(
      new FetchPackageRequestModel(packageName),
    );
    if (!responseModel) return null;
    return responseModel;
  }

  return {
    search,
    fetchPackage,
  };
}());

export default packageService;
