import {PUBLIC_BACKEND_SERVER} from '$env/static/public';

import type {LayoutLoad} from './$types';

export const load: LayoutLoad = async () => {

  return {
    summariesLocation: `${PUBLIC_BACKEND_SERVER}/api/ancestry`,
  };
};