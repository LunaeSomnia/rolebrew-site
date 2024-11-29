import {PUBLIC_BACKEND_SERVER} from '$env/static/public';
import type {Ancestry, Summary} from '$lib/bindings';

import type {PageLoad} from './$types';

export const load: PageLoad = async ({fetch, params}) => {
  // const response =
  //     fetch(`${PUBLIC_BACKEND_SERVER}/api/ancestry/${params.ancestry}`);

  return {
    ancestryDataLocation:
        `${PUBLIC_BACKEND_SERVER}/api/ancestry/${params.ancestry}`,
  };
};
