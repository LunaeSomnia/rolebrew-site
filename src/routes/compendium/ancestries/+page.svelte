<script lang="ts">
    import type { PageData } from "./$types";
    import { base } from "$app/paths";
    import { fetchCache, handleFetch } from "$lib/fetchCache";
    import { onMount } from "svelte";
    import type { Summary } from "$lib/bindings";

    let { data }: { data: PageData } = $props();

    let summariesData: Summary[] = $state([]);

    onMount(() => {
        handleFetch<Summary[]>(data.summariesLocation, (data) => {
            summariesData = data;
        });
    });
</script>

{#if summariesData.length !== 0}
    {#each summariesData as summary}
        <a href="{base}{summary.url}">{summary.name}</a>
    {/each}
{:else}
    <p>Loading...</p>
{/if}
