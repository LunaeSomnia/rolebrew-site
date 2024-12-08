<script lang="ts">
    import type { Snippet } from "svelte";
    import type { PageData } from "./$types";
    import Sidebar from "./Sidebar.svelte";
    import {
        ALL_SUMMARIES,
        summariesFetchLocation,
        Summary,
        type SummaryKey,
    } from "./summaries.svelte";
    import { capitalizeFirstLetter } from "$lib/utils";
    import { handleFetch, type FetchHandle } from "$lib/fetch.svelte";
    import { PUBLIC_BACKEND_SERVER } from "$env/static/public";

    const { children }: { children: Snippet } = $props();

    let page: SummaryKey | null = $state(null);
    let pageFetchData: FetchHandle<Summary[]> | undefined = $state();
    let pageDataValue = $derived(pageFetchData?.value);
    let pageDataState = $derived(pageFetchData?.state);

    function selectIndexPage(pageKey: SummaryKey) {
        page = pageKey;
    }

    $effect(() => {
        console.log("update");
        if (page && pageDataState === "fetched") {
            console.log("fetching new data");
            pageFetchData = handleFetch<Summary[]>(
                PUBLIC_BACKEND_SERVER + summariesFetchLocation[page],
            );
            console.log(pageFetchData);
        }
    });
</script>

<div class="compendium-index max-width-wrapper">
    <div class="compendium-index-button-group">
        {#each ALL_SUMMARIES as summaryKey}
            <button
                class:active={page === summaryKey}
                onclick={() => selectIndexPage(summaryKey)}
                >{capitalizeFirstLetter(summaryKey)}</button
            >
        {/each}
    </div>
    {#if page}
        {#if pageDataState === "fetched"}
            <table>
                <thead>
                    <tr>
                        <th>H1</th>
                        <!-- <th>H2</th>
                        <th>H3</th> -->
                    </tr>
                </thead>
                <tbody>
                    {#each pageDataValue ?? [] as summary}
                        <tr>
                            <!-- <td>{summary.name}</td> -->
                            <!-- <td>{summary.slug}</td>
                            <td>{summary.description}</td> -->
                        </tr>
                    {/each}
                </tbody>
            </table>
        {/if}
    {/if}
</div>
<div class="page-wrapper max-width-wrapper">
    <!-- <Sidebar {data} /> -->
    <div class="content">
        {@render children?.()}
    </div>
    <aside class="toc"></aside>
</div>

<style lang="scss">
    .compendium-index {
        width: 100%;
        align-self: center;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        border-bottom: 1px;
        border-style: solid;
        border-image: linear-gradient(
                to right,
                #ffb23000 0%,
                #ffb230 50%,
                #ffb23000 100%
            )
            1;

        padding: 2rem 0;
    }

    .compendium-index-button-group {
        display: flex;
        flex-direction: row;
        overflow: hidden;
        border-radius: 0.25rem;
    }

    button {
        width: 100%;
        border-radius: 0;
    }

    .page-wrapper {
        width: 100%;
        min-height: calc(100vh - var(--nav-height));
        height: 100%;
        align-self: center;
        justify-content: center;
        display: flex;
        flex-direction: row;
    }

    .content {
        max-width: calc(var(--max-content-width) - 2 * var(--sidebar-width));
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        padding: 2rem;
        gap: 1rem;
    }

    .toc {
        width: var(--sidebar-width);
        height: 100%;
        border-left: 0.125rem solid var(--primary-color-25);
    }
</style>
