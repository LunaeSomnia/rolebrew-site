<script lang="ts">
    import { onMount } from "svelte";

    let { width = "100%", lines } = $props();

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
                animationDelayMS}ms, 0s;"
        ></div>
    {/each}
</div>

<style>
    .placeholder-flex {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
    }
</style>
