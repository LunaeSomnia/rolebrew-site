<script lang="ts">
    export let padding = "4rem";
</script>

<div class="tag" style="padding: {padding};">
    <slot />
</div>

<style lang="scss">
    .tag {
        display: grid;
        place-items: center;
        border-radius: 400rem;
        background-color: color-mix(
            in srgb,
            var(--primary-color) 15%,
            var(--primary-color-transparent)
        );
    }
</style>
