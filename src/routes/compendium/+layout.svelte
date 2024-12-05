<script>
    import Sidebar from "./Sidebar.svelte";
</script>

<div class="page-wrapper max-width-wrapper">
    <Sidebar />
    <div class="content">
        <slot />
    </div>
    <aside class="toc"></aside>
</div>

<style lang="scss">
    .page-wrapper {
        width: 100vw;
        height: 100%;
        align-self: center;
        display: flex;
        flex-direction: row;
    }

    .content {
        width: 100%;
        height: 100%;
        align-self: center;
        display: flex;
        flex-direction: column;
        padding: 4rem 2rem;
        gap: 1rem;
    }

    .toc {
        width: var(--sidebar-width);
        height: 100%;
        border-left: 0.125rem solid var(--primary-1-25);
    }
</style>
