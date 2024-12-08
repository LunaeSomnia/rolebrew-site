<script lang="ts">
    import { base } from "$app/paths";
    import { PUBLIC_BACKEND_SERVER } from "$env/static/public";
    import type { PageData } from "./$types";
    import SidebarAccordion from "./SidebarAccordion.svelte";
    import { type SummaryKey } from "./summaries.svelte";

    let { data }: { data: PageData } = $props();

    function summaryMatchesRoute(slug: string, summaryType: string) {
        const route = data.pathname;
        return route.indexOf(summaryType) !== -1 && route.indexOf(slug) !== -1;
    }
</script>

<aside class="sidebar">
    {#snippet sidebarChildren(summariesSlug: SummaryKey)}
        <ul>
            <!-- {#each summaries[summariesSlug] ?? [] as summary}
                <a
                    class={summaryMatchesRoute(summary.slug, summariesSlug)
                        ? "active"
                        : ""}
                    href="{base}{summary.url}"
                >
                    <li>
                        {summary.name}
                    </li>
                </a>
            {/each} -->
        </ul>
    {/snippet}

    <SidebarAccordion handleName="Conditions" handleSlug="condition">
        {@render sidebarChildren("condition")}
    </SidebarAccordion>
    <SidebarAccordion handleName="Ancestries" handleSlug="ancestry">
        {@render sidebarChildren("ancestry")}
    </SidebarAccordion>
</aside>

<style lang="scss">
    .sidebar {
        width: var(--sidebar-width);
        min-height: calc(100vh - var(--nav-height));
        height: 100%;
        border-right: 0.125rem solid var(--primary-color-25);
    }

    ul {
        list-style-type: none;
        padding: 0;

        a.active li {
            background-color: var(--primary-color-10);
            border-radius: 0.25rem 0 0 0.25rem;
            color: var(--primary-color);
        }

        li {
            display: flex;
            flex-direction: row;
            align-items: center;
            height: 2rem;
            padding: 1rem;
            text-decoration: none;
            text-decoration-style: none;
        }
    }
</style>
