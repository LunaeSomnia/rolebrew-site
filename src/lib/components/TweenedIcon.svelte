<script lang="ts">
    import { ICON_DEFINITION, IconFillType, IconType } from "$lib/icon";

    const TRANSPARENT = "#00000000";

    type Props = {
        class?: string;
        icons?: IconType[];
        index?: number;
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

    type IconLine = {
        fillType: IconFillType;
        paths: string[];
    };

    let {
        class: className = "",
        icons = [IconType.None],
        index = 0,
        width = "1.5rem",
        height = "1.5rem",
        color = "white",
        strokeWidth = 2,
        strokeLinecap = "round",
        strokeLinejoin = "round",
    }: Props = $props();

    let iconDefinitions = icons.map((v) => {
        const definition: [IconFillType, string[]] = ICON_DEFINITION.get(v) ?? [
            IconFillType.Stroke,
            [""],
        ];
        return {
            fillType: definition[0],
            paths: definition[1],
        } as IconLine;
    });

    let selected_path = $state(iconDefinitions[index]);
    let animated_paths = $derived(selected_path.paths);

    $effect(() => {
        console.log(className);
        selected_path = iconDefinitions[index];
    });
</script>

<svg
    class={className}
    {width}
    {height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    {#each animated_paths as path}
        <path
            d={path}
            fill={selected_path.fillType === IconFillType.Fill ||
            selected_path.fillType === IconFillType.StrokeAndFill
                ? color
                : TRANSPARENT}
            stroke={selected_path.fillType === IconFillType.Stroke ||
            selected_path.fillType === IconFillType.StrokeAndFill
                ? color
                : TRANSPARENT}
            stroke-width={strokeWidth}
            stroke-linecap={strokeLinecap}
            stroke-linejoin={strokeLinejoin}
        />
    {/each}
</svg>
