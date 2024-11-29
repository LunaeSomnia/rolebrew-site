<script lang="ts">
    import { parseCssValue } from "$lib/style";
    import { onMount } from "svelte";

    let { width = "100%", lines = 2 } = $props();

    const baseFontSize = 16;
    const baseLineHeight = 1.5;
    const animationDelayMS = 100;

    let flexContainer: HTMLDivElement | null = null;
    let fontSize = baseFontSize;
    let height = baseFontSize * baseLineHeight;
    let heightStyle = $state("");
    let linesVector: number[] = $state([]);

    onMount(() => {
        fontSize = parseInt(
            getComputedStyle(document.documentElement)
                .getPropertyValue("font-size")
                .replace("px", ""),
        );
        height = fontSize;
        heightStyle = `${height}px`;

        // Generate lines
        let linesAcc = 0;
        let availableWidthRems = flexContainer?.clientWidth ?? 0 / fontSize;
        let threshhold = getRandomInt(50) + 100 * (lines - 1);
        let thresholdRems = availableWidthRems * (threshhold / 100);
        for (let i = 0; i < lines; i++) {
            while (linesAcc < thresholdRems) {
                let segmentLength = Math.max(getRandomInt(10), 2);
                if (linesAcc + segmentLength > threshhold) {
                    break;
                }
                linesVector.push(segmentLength);
                linesAcc += segmentLength + 2;
            }
        }
        $inspect(linesVector);
    });

    function getRandomInt(max: number) {
        return Math.floor(Math.random() * max);
    }
</script>

<div bind:this={flexContainer} class="placeholder-flex">
    {#each linesVector as line, i}
        <div
            class="placeholder"
            style="width:{line}rem; height:{heightStyle}; animation-delay: {i *
                animationDelayMS}ms;"
        ></div>
    {/each}
</div>

<style>
    .placeholder-flex {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }

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
        animation: placeholder 2000ms linear infinite;
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
