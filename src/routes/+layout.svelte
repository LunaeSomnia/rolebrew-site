<script lang="ts">
    import NavBar from "$lib/components/NavBar.svelte";
    import type { Snippet } from "svelte";
    import type { PageData } from "./$types";

    let { data, children }: { data: PageData; children: Snippet } = $props();
</script>

<NavBar pathname={data.pathname} />
<div>
    {@render children?.()}
</div>

<style lang="scss">
    div {
        margin-top: var(--nav-height);
        display: grid;
        place-items: center;
    }
</style>
