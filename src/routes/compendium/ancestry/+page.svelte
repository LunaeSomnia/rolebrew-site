<script lang="ts">
    import type { PageData } from "./$types";
    import { base } from "$app/paths";
    import { FetchHandle, handleFetch } from "../../../lib/fetch.svelte";
    import { onMount } from "svelte";
    import type { Summary } from "$lib/bindings";
    import { summaries } from "../summaries.svelte";

    let { data }: { data: PageData } = $props();

    let ancestryHandle: FetchHandle<Summary[]> | undefined = $state();

    let ancestries = $derived(summaries.ancestry);

    onMount(() => {
        ancestryHandle = handleFetch<Summary[]>(data.summariesLocation);
    });
</script>

{#if ancestries && ancestries.length !== 0}
    {#each ancestries as summary}
        <a href="{base}{summary.url}">{summary.name}</a>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
