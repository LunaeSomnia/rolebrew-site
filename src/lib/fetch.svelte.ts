export function handleFetch<T>(url: string): FetchHandle<T> {
    let handle: FetchHandle<T> = new FetchHandle();

    // if (fetchCache.has(url)) {
    //     let data = fetchCache.get(url);
    //     handle.value = data;
    //     handle.state = "fetched";
    // } else {
    handle.state = "loading";
    fetch(url, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch: " + url);
            }

            return response.json();
        })
        .then((json) => {
            let typed = json as T;
            // fetchCache.set(url, typed);
            handle.state = "fetched";
            handle.value = typed;
        })
        .catch((error) => {
            handle.state = "error";
            handle.error = error;
            console.error(error);
        });
    // }

    return handle;
}

export class FetchHandle<T> {
    state: "unfetched" | "loading" | "fetched" | "error" = $state("unfetched");
    value: T | undefined = $state(undefined);
    error: Error | undefined = $state(undefined);

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
