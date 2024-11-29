<script lang="ts">
    import { parseCssValue } from "$lib/style";
    import { onMount } from "svelte";

    export let width = "100%";

    const baseFontSize = 16;
    const baseH1Multiplier = 4;
    const baseHeaderLineHeight = 1.2;

    let fontSize = baseFontSize;
    let height = baseFontSize * baseH1Multiplier * baseHeaderLineHeight;
    let heightStyle = "";
    onMount(() => {
        fontSize = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue("font-size")
                .replace("px", ""),
        );
        height =
            parseInt(
                getComputedStyle(document.documentElement)
                    .getPropertyValue("--h1-size")
                    .replace("rem", ""),
            ) *
            fontSize *
            baseHeaderLineHeight;
        heightStyle = `${height}px`;
    });
</script>

<div class="placeholder" style="width:{width}; height:{heightStyle}"></div>

<style>
    .placeholder {
        border-radius: 0.5rem;
        opacity: 0.25;

        /*  */
        background: #f4daba;
        background: linear-gradient(
            90deg,
            #f4daba44 0%,
            #f4daba 25%,
            #f4daba44 50%,
            #f4daba44 100%
        );
        background-size: 400% 400%;
        --animation-time: 2000ms;
        animation: placeholder var(--animation-time) linear infinite;
    }

    @keyframes placeholder {
        0% {
            background-position: 133% 0%;
        }
        100% {
            background-position: 0% 133%;
        }
    }
</style>
