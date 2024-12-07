<script lang="ts">
    import type { PageData } from "./$types";
    import type { Ancestry } from "$lib/bindings";
    import H1Placeholder from "$lib/components/skeleton/H1Skeleton.svelte";
    import PPlaceholder from "$lib/components/skeleton/PSkeleton.svelte";
    import AnimatableSlide from "$lib/components/AnimatableSlide.svelte";
    import { FetchHandle, handleFetch } from "../../../../lib/fetch.svelte";

    let { data }: { data: PageData } = $props();

    let ancestryHandle: FetchHandle<Ancestry> | undefined = $state();
    let ancestryData: Ancestry | undefined = $derived(ancestryHandle?.value);

    $effect(() => {
        ancestryHandle = handleFetch<Ancestry>(data.ancestryDataLocation);
    });
</script>

<svelte:head>
    {#if ancestryData}
        <title>{ancestryData?.name} - Rolebrew</title>
    {/if}
</svelte:head>

{#if ancestryData}
    <AnimatableSlide>
        <h1>{ancestryData.name}</h1>
    </AnimatableSlide>
    <p>{@html ancestryData.description}</p>
{:else}
    <H1Placeholder />
    <PPlaceholder lines={3} />
    <PPlaceholder lines={2} />
{/if}
