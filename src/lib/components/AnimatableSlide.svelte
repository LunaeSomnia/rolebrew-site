<script lang="ts">
    import { onMount } from "svelte";

    let {
        color = "var(--primary-color)",
        animationTime = "0.5s",
        children,
    } = $props();

    let cropped: HTMLDivElement;
    let viewport: HTMLDivElement;

    onMount(() => {
        viewport.style.height = cropped.clientHeight + "px";
        viewport.style.width = cropped.clientWidth + "px";
    });
</script>

<div
    bind:this={viewport}
    style="--color: {color}; --animationTime: {animationTime};"
>
    <div bind:this={cropped} class="cropped">
        {@render children?.()}
    </div>
</div>

<style lang="scss">
    div {
        position: relative;
        width: fit-content;
        overflow: hidden;
    }

    .cropped {
        position: absolute;
        width: fit-content;
        height: fit-content;
        animation: cropAnimation var(--animationTime)
            cubic-bezier(0.33, 1, 0.68, 1);
        animation-fill-mode: forwards;
    }

    div::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: var(--color);
        z-index: 0;
        animation: slideAnimation var(--animationTime)
            cubic-bezier(0.33, 1, 0.68, 1);
        animation-fill-mode: forwards;
    }

    @keyframes slideAnimation {
        0% {
            transform: translateX(0%);
        }

        100% {
            transform: translateX(100%);
        }
    }

    @keyframes cropAnimation {
        0% {
            transform: translateY(20%);
        }

        100% {
            transform: translateY(0%);
        }
    }
</style>
