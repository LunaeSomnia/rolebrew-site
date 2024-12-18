import { PUBLIC_BACKEND_SERVER } from '$env/static/public';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  return {
    ancestryDataLocation:
      `${PUBLIC_BACKEND_SERVER}/api/ancestry/${params.ancestry}`,
  };
};
