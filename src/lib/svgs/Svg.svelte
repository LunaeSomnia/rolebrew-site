<script lang="ts">
    export let _class: string = "";
    export let svgFill: string = "none";
    export let pathFill: string = "#FFB230";
    export let pathOpacity: string = "0.5";
    export let viewBox: string = "0 0 1220 1220";
    export let d = "";
</script>

<svg class={_class} {viewBox} fill={svgFill} xmlns="http://www.w3.org/2000/svg">
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        {d}
        fill={pathFill}
        fill-opacity={pathOpacity}
    />
</svg>
