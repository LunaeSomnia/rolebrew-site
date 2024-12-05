<script lang="ts">
    import type { PageData } from "./$types";
    import type { Ancestry } from "$lib/bindings";
    import H1Placeholder from "$lib/components/skeleton/H1Skeleton.svelte";
    import PPlaceholder from "$lib/components/skeleton/PSkeleton.svelte";
    import AnimatableSlide from "$lib/components/AnimatableSlide.svelte";
    import { FetchHandle, handleFetch } from "$lib/fetchCache";
    import { onMount } from "svelte";

    let { data }: { data: PageData } = $props();

    let ancestryHandle: FetchHandle<Ancestry> | undefined = $state();
    let ancestryError = $derived(ancestryHandle?.error);
    let ancestryData = $derived(ancestryHandle?.value);

    onMount(() => {
        ancestryHandle = handleFetch<Ancestry>(data.ancestryDataLocation);
    });
</script>

{#if ancestryData}
    <AnimatableSlide>
        <h1>{ancestryData.name}</h1>
    </AnimatableSlide>
    <p>{@html ancestryData.description}</p>
{:else}
    <H1Placeholder />
    <PPlaceholder lines={3} />
    <PPlaceholder />
{/if}
