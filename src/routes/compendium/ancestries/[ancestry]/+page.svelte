<script lang="ts">
    import type { PageData } from "./$types";

    let { data }: { data: PageData } = $props();
    import type { Ancestry } from "$lib/bindings";
    import H1Placeholder from "$lib/components/skeleton/H1Skeleton.svelte";
    import PPlaceholder from "$lib/components/skeleton/PSkeleton.svelte";
    import AnimatableSlide from "$lib/components/AnimatableSlide.svelte";
    import { fetchCache, handleFetch } from "$lib/fetchCache";
    import { onMount } from "svelte";

    let ancestryData: Ancestry | undefined = $state();

    onMount(() => {
        handleFetch<Ancestry>(data.ancestryDataLocation, (data) => {
            ancestryData = data;
        });
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
