import { type Writable, writable } from "svelte/store";

export let fetchCache: Map<string, any> = new Map();

export function handleFetch<T>(url: string): FetchHandle<T> {
    let handle: FetchHandle<T> = new FetchHandle();

    if (fetchCache.has(url)) {
        let data = fetchCache.get(url);
        handle.value = data;
        handle.state.set("fetched");
    } else {
        handle.state.set("loading");
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch: " + url);
                }

                return response.json();
            })
            .then((json) => {
                let typed = json as T;
                fetchCache.set(url, typed);
                handle.state.set("fetched");
                handle.value.set(typed);
                console.log(typed);
            })
            .catch((error) => {
                handle.state.set("error");
                handle.error = error;
                console.error(error);
            });
    }

    return handle;
}

export class FetchHandle<T> {
    state: Writable<"unfetched" | "loading" | "fetched" | "error"> = writable(
        "unfetched",
    );
    value: Writable<T | undefined> = writable(undefined);
    error: Writable<Error | undefined> = writable(undefined);

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
