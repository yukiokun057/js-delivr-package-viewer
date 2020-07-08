import apiSearch from '../utils/search';
import { SearchRequestModel } from '../_models/api-request-models';
import { SearchResponseModel } from '../_models/api-response-models';
import { API_ERROR_WRONG_ARGUMENT_TYPE } from '../utils/common';

export const search = async (args) => {
  if (!(args instanceof SearchRequestModel)) throw new Error(API_ERROR_WRONG_ARGUMENT_TYPE);

  const response = await apiSearch(args.query, args.page, args.perPage);

  return new SearchResponseModel(response);
};
