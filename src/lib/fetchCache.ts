export let fetchCache: Map<string, any> = new Map();

export function handleFetch<T>(
    url: string, setFn: (data: T) => void,
    errorFn: (error: any) => void = () => {}) {
  if (fetchCache.has(url)) {
    let data = fetchCache.get(url);
    setFn(data)
  }

  fetch(url)
      .then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch: ' + url);
    }

    return response.json();
      })
      .then((json) => {
    console.log(json)
    let typed = json as T;
    fetchCache.set(url, typed);
    setFn(typed)
      })
      .catch((error) => {
        console.error(error)
        errorFn(error)
      });
}