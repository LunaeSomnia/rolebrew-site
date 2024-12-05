<script lang="ts">
    import SidebarAccordion from "./SidebarAccordion.svelte";
    import { summaries } from "./summaries.svelte";

    let conditions = $derived(summaries.conditions);
    let ancestries = $derived(summaries.ancestries);
</script>

<aside class="sidebar">
    <SidebarAccordion handleName="Conditions">
        {#each conditions as summary}
            <p>{summary.name}</p>
        {/each}
    </SidebarAccordion>
    <SidebarAccordion handleName="Ancestries">
        {#each ancestries as summary}
            <p>{summary.name}</p>
        {/each}
    </SidebarAccordion>
</aside>

<style lang="scss">
    .sidebar {
        width: var(--sidebar-width);
        height: 100%;
        border-right: 0.125rem solid var(--primary-1-25);
    }
</style>
