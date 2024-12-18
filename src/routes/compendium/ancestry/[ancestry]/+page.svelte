<script lang="ts">
    import type { PageData } from "./$types";
    import type { Ancestry } from "$lib/bindings";
    import H1Placeholder from "$lib/components/skeleton/H1Skeleton.svelte";
    import PPlaceholder from "$lib/components/skeleton/PSkeleton.svelte";
    import AnimatableSlide from "$lib/components/AnimatableSlide.svelte";
    import { FetchHandle, handleFetch } from "../../../../lib/fetch.svelte";
    import {
        afterNavigate,
        beforeNavigate,
        goto,
        onNavigate,
    } from "$app/navigation";
    import { onMount } from "svelte";

    let { data }: { data: PageData } = $props();

    let dataLoaded = false;
    let ancestryHandle: FetchHandle<Ancestry> | undefined = $state();
    let ancestryDataState = $derived(ancestryHandle?.state);
    let ancestryData: Ancestry | undefined = $derived(ancestryHandle?.value);

    onMount(() => {
        if (ancestryData) {
            goto(data.pathname + "#" + ancestryData.slug);
        }
    });

    beforeNavigate(() => {
        dataLoaded = false;
    });

    $effect(() => {
        ancestryHandle = handleFetch<Ancestry>(data.ancestryDataLocation);

        if (!dataLoaded && ancestryDataState === "fetched") {
            dataLoaded = true;
            goto("#" + ancestryData?.slug);
        }
    });
</script>

<svelte:head>
    {#if ancestryData}
        <title>{ancestryData?.name} - Rolebrew</title>
    {/if}
</svelte:head>

{#if ancestryData}
    <AnimatableSlide>
        <h1 id={ancestryData.slug}>{ancestryData.name}</h1>
    </AnimatableSlide>
    <p>{@html ancestryData.description}</p>
{:else}
    <H1Placeholder />
    <PPlaceholder lines={3} />
    <PPlaceholder lines={2} />
{/if}
