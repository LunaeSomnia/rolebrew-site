<script lang="ts">
    import { IconType, ICON_DEFINITION, IconFillType } from "../icon";

    const TRANSPARENT = "#00000000";

    type Props = {
        icon?: IconType;
        width?: string;
        height?: string;
        color?: string;
        strokeWidth?: number;
        strokeLinecap?:
            | "inherit"
            | "round"
            | "butt"
            | "square"
            | null
            | undefined;
        strokeLinejoin?:
            | "inherit"
            | "round"
            | "arcs"
            | "miter-clip"
            | "miter"
            | "bevel"
            | null
            | undefined;
    };

    let {
        icon = IconType.None,
        width = "1.5rem",
        height = "1.5rem",
        color = "white",
        strokeWidth = 2,
        strokeLinecap = "round",
        strokeLinejoin = "round",
    }: Props = $props();

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
