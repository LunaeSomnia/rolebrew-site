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
