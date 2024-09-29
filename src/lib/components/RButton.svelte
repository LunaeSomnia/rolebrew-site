<script lang="ts">
    export let text = "button";
    export let href = "";
</script>

<a {href}>
    {text}
</a>

<style lang="scss">
    a {
        padding: 0.5rem 1rem;
        background-color: var(--light-1);
        color: var(--dark-1);
        text-decoration: none;
        font-weight: bold;
        border-radius: 0.25rem;
        cursor: pointer;
    }
</style>
