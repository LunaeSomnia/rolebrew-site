<script lang="ts">
    import { IconType, ICON_DEFINITION, IconFillType } from "./icon";

    const TRANSPARENT = "#00000000";

    export let icon: IconType = IconType.None;
    export let width = "1.5rem";
    export let height = "1.5rem";

    export let color = "white";
    export let strokeWidth = 2;
    export let strokeLinecap:
        | "inherit"
        | "round"
        | "butt"
        | "square"
        | null
        | undefined = "round";
    export let strokeLinejoin:
        | "inherit"
        | "round"
        | "arcs"
        | "miter-clip"
        | "miter"
        | "bevel"
        | null
        | undefined = "round";

    const definition: [IconFillType, string[]] = ICON_DEFINITION.get(icon) ?? [
        IconFillType.Stroke,
        [""],
    ];
    const [fillType, paths] = definition;
</script>

<svg
    {width}
    {height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    {#each paths as path}
        <path
            d={path}
            fill={fillType === IconFillType.Fill ||
            fillType === IconFillType.StrokeAndFill
                ? color
                : TRANSPARENT}
            stroke={fillType === IconFillType.Stroke ||
            fillType === IconFillType.StrokeAndFill
                ? color
                : TRANSPARENT}
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
        />
    {/each}
</svg>
