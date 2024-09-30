<script lang="ts">
    import { IconType } from "$lib/icon";
    import Icon from "$lib/Icon.svelte";
    import Tag from "$lib/Tag.svelte";

    export let alt = false;
    export let title = "Feature Title";
    export let subtitle = "Feature subtitle goes here.";
    export let description = "Feature description goes here.";
</script>

<div class="feature">
    {#if !alt}
        <div class="img-placeholder"></div>
    {/if}
    <div class="feature-description">
        <div class="feature-header m-3">
            <Tag padding="0.5rem">
                <Icon icon={IconType.Book} color="var(--accent-color)" />
            </Tag>
            <h2>{title}</h2>
        </div>
        <p class="subtitle m-4">{subtitle}</p>
        <p>{@html description}</p>
    </div>
    {#if alt}
        <div class="img-placeholder"></div>
    {/if}
</div>

<style lang="scss">
    .feature {
        width: 100%;
        min-height: 32rem;
        height: 32rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 4rem;
    }

    .img-placeholder {
        width: 24rem;
        min-width: 24rem;
        height: 100%;
        background-color: var(--background-color-2);
        border-radius: 0.5rem;
    }

    .feature-description {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .subtitle {
        font-style: italic;
        color: var(--accent-color);
    }

    .feature-header {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        align-items: center;
    }
</style>
