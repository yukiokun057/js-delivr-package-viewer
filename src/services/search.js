import api from 'api';
import { SearchRequestModel } from '../api/_models/api-request-models';

const search = async (query, page, perPage) => {
  const responseModel = await api.search(
    new SearchRequestModel(query, page, perPage),
  );
  if (!responseModel) return null;
  return responseModel;
};

export default {
  search,
};
