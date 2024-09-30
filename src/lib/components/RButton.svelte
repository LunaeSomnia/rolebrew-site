<script lang="ts">
    import { base } from "$app/paths";

    export let text = "button";
    export let href = "";
</script>

<a class="rbutton" href="{base}{href}">
    {text}
</a>

<style lang="scss">
    a {
        padding: 0.5rem 1rem;
        background-color: var(--background-color-alt);
        color: var(--background-color);
        text-decoration: none;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: all 250ms ease-in-out;
    }
</style>
