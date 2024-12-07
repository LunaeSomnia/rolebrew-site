<script lang="ts">
    import type { Summary } from "$lib/bindings";
    import Icon from "$lib/components/Icon.svelte";
    import { handleFetch, type FetchHandle } from "../../lib/fetch.svelte";
    import { IconType } from "$lib/icon";
    import {
        summaries,
        summariesFetchLocation,
        type SummaryKey,
    } from "./summaries.svelte";
    import { PUBLIC_BACKEND_SERVER } from "$env/static/public";
    import PSkeleton from "$lib/components/skeleton/PSkeleton.svelte";
    import type { Snippet } from "svelte";

    interface Props {
        handleName: string;
        handleSlug: SummaryKey;
        children?: Snippet;
    }
    const { handleName = "", handleSlug, children }: Props = $props();

    let open = $state(false);

    let accordionData: FetchHandle<Summary[]> | undefined = $state();
    let accordionDataState = $derived(accordionData?.state);

    function onHandleClick() {
        open = !open;

        if (open && !dataExists()) {
            fetchData();
        }
    }

    function dataExists() {
        return summaries[handleSlug] !== undefined;
    }

    function fetchData() {
        accordionData = handleFetch<Summary[]>(
            PUBLIC_BACKEND_SERVER + summariesFetchLocation[handleSlug],
        );
    }

    $effect(() => {
        summaries[handleSlug] = accordionData?.value;
    });
</script>

<div class="sidebar-accordion {open ? 'open' : ''}">
    <button class="sidebar-accordion-handle" onclick={onHandleClick}>
        <div class="sidebar-accordion-handle-icon">
            <Icon icon={IconType.ChevronRight} color="var(--primary-1)" />
        </div>
        <h4>{handleName}</h4>
    </button>
    {#if open}
        <div class="sidebar-accordion-content">
            {#if accordionDataState === "fetched"}
                {@render children?.()}
            {:else}
                {#each Array(50) as _, i}
                    <PSkeleton lines={1} />
                {/each}
            {/if}
        </div>
    {/if}
</div>

<style lang="scss">
    .sidebar-accordion {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;

        & .sidebar-accordion-handle-icon {
            width: auto;
            height: auto;
        }

        &.open .sidebar-accordion-handle-icon {
            rotate: 90deg;
        }
    }

    .sidebar-accordion-handle {
        display: flex;
        justify-content: row;
        gap: 0.5rem;
        align-items: center;

        background-color: unset;
        cursor: pointer;

        .sidebar-accordion-handle-icon {
            display: flex;
            align-items: center;
        }

        * {
            color: var(--primary-1);
        }
    }

    .sidebar-accordion-content {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
</style>
