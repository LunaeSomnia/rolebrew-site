<script>
    import NavBar from "$lib/components/NavBar.svelte";
</script>

<NavBar />
<div class="page-wrapper parallax-base full">
    <slot />
</div>

<style lang="scss">
    .page-wrapper {
        padding-top: var(--navbar-height);
    }
</style>
