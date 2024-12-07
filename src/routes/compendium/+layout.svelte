<script lang="ts">
    import type { Snippet } from "svelte";
    import type { PageData } from "./$types";
    import Sidebar from "./Sidebar.svelte";

    const { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<div class="page-wrapper max-width-wrapper">
    <Sidebar {data} />
    <div class="content">
        {@render children?.()}
    </div>
    <aside class="toc"></aside>
</div>

<style lang="scss">
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
        border-left: 0.125rem solid var(--primary-1-25);
    }
</style>
