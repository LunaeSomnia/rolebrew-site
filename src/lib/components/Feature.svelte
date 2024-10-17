<script lang="ts">
    import { IconType } from "$lib/icon";
    import Icon from "$lib/Icon.svelte";
    import Tag from "$lib/Tag.svelte";

    export let alt = false;
    export let title = "Feature Title";
    export let subtitle = "Feature subtitle goes here.";
    export let description = "Feature description goes here.";
</script>

<div class="feature {alt ? 'alt' : ''}">
    <div class="img-placeholder"></div>
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
    <div class="img-placeholder alt"></div>
</div>

<style lang="scss">
    .feature {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .img-placeholder {
        position: relative;

        background-color: var(--background-color-2);
        border-radius: 0.5rem;
        aspect-ratio: 0.618;
    }

    .feature-description {
        position: relative;
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

    @media (min-width: 0rem) {
        .feature {
            flex-direction: column;
            height: fit-content;
            gap: 2rem;
        }

        .img-placeholder {
            display: none;
            width: 100%;

            &.alt {
                display: block;
            }
        }
    }

    @media (min-width: 50rem) {
        .feature {
            flex-direction: row;
            gap: 4rem;
        }

        .feature .feature-description {
            max-width: 60ch;
        }

        .feature .img-placeholder {
            // height: 100%;
            display: block;
            width: 24rem;
            min-width: 24rem;

            &.alt {
                display: none;
            }
        }
        .feature.alt .img-placeholder {
            display: none;

            &.alt {
                display: block;
            }
        }
    }
</style>
