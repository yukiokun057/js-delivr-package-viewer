import client from './registry-npmjs-httpClient';
import { FetchPackageRequestModel } from '../_models/api-request-models';
import { FetchPackageResponseModel } from '../_models/api-response-models';
import { API_ERROR_WRONG_ARGUMENT_TYPE } from '../utils/common';

export const fetchPackage = async (args) => {
  if (!(args instanceof FetchPackageRequestModel)) throw new Error(API_ERROR_WRONG_ARGUMENT_TYPE);

  const response = await client.get(`/${args.packageName}`);

  return new FetchPackageResponseModel(response);
};
