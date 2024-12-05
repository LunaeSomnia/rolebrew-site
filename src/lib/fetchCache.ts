export let fetchCache: Map<string, any> = new Map();



export function handleFetch<T>(
  url: string): FetchHandle<T> {
  if (fetchCache.has(url)) {
    let data = fetchCache.get(url);
  }

  let handle: FetchHandle<T> = new FetchHandle();

  handle.state = 'loading'
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch: ' + url);
      }

      return response.json();
    })
    .then((json) => {
      let typed = json as T;
      fetchCache.set(url, typed);
      handle.state = 'fetched'
      handle.value = typed
    })
    .catch((error) => {
      handle.state = 'error'
      handle.error = error
    });

  return handle
}

export class FetchHandle<T> {
  state: 'unfetched' | 'loading' | 'fetched' | 'error' = 'unfetched'
  value: T | undefined = undefined
  error: Error | undefined = undefined

  getState() {
    return this.state;
  }

  getValue() {
    return this.value;
  }

  getError() {
    return this.error;
  }
}