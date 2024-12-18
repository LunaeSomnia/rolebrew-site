<script lang="ts">
    import { base } from "$app/paths";
    import { IconType } from "$lib/icon";
    import FancyArrow from "$lib/svgs/FancyArrow.svelte";
    import Logo from "$lib/svgs/Logo.svelte";
    import RButton from "./RButton.svelte";
    import TweenedIcon from "./TweenedIcon.svelte";

    let { pathname }: { pathname: string } = $props();

    let alt = $state(false);
    let useLightTheme = $state(false);

    $effect(() => {
        const path = pathname.replace(base, "");
        alt = path === "/";
        console.log(path, alt);
    });

    function clickThemeButton() {
        document.body.classList.remove(useLightTheme ? "dark" : "light");
        useLightTheme = !useLightTheme;
        document.body.classList.add(useLightTheme ? "dark" : "light");
    }
</script>

<nav class="nav-bar" class:alt>
    <div class="max-width-wrapper">
        <nav class="nav-left">
            <a href="{base}/compendium">Compendium</a>
            <!-- <a href="{base}/characters/">Characters</a>
            <a href="{base}/simulator/">Simulator</a> -->
        </nav>
        <nav class="nav-middle">
            <div class="fancy-arrow">
                <FancyArrow
                    direction="left"
                    pathFill="var(--primary-color)"
                    pathOpacity="0.5"
                />
            </div>
            <a href="{base}/">
                <Logo
                    width="2rem"
                    height="2rem"
                    pathFill="var(--primary-color)"
                />
            </a>
            <div class="fancy-arrow">
                <FancyArrow
                    direction="right"
                    pathFill="var(--primary-color)"
                    pathOpacity="0.5"
                />
            </div>
        </nav>
        <nav class="nav-right">
            <button class="theme-button" onclick={clickThemeButton}>
                <TweenedIcon
                    class="theme-button-svg"
                    icons={new Array(
                        IconType.Day,
                        IconType.Night,
                    ) as IconType[]}
                    index={useLightTheme ? 0 : 1}
                    color="var(--text-color)"
                />
            </button>
            <a href="{base}/login">Log In</a>
            <RButton text="Start your journey" />
        </nav>
    </div>
</nav>

<style lang="scss">
    .nav-bar {
        width: 100vw;
        height: var(--nav-height);

        position: fixed;
        display: grid;
        place-items: center;

        z-index: 0;
        background-color: var(--background-color-50);
        border-bottom: 1px;
        border-style: solid;
        border-image: var(--horizontal-border-gradient);

        &:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            backdrop-filter: blur(0.5rem);
            z-index: -1;
        }

        &.alt {
            border-bottom: 0;
            background-color: unset;
            background: linear-gradient(
                to bottom,
                var(--background-color) 0%,
                var(--background-color-50) 66%,
                var(--background-color-0) 100%
            );
            backdrop-filter: unset;
        }

        &.alt:before {
            backdrop-filter: blur(0.5rem);
            mask: linear-gradient(to bottom, black, transparent 100%);
        }
    }

    .theme-button {
        display: flex;
        padding: 0.5rem;
        border-radius: 20rem;
        background-color: var(--background-color-2);
    }

    .max-width-wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 4rem;
    }

    :global(.nav-bar *) {
        transition: all 250ms ease-in-out;
    }

    a {
        font-weight: bold;
        color: var(--text-color);
        text-decoration: none;
    }

    .nav-left {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }

    .nav-middle {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 1rem;
    }

    .nav-right {
        display: flex;
        flex-direction: row;
        gap: 2rem;
        align-items: center;
    }

    @media (min-width: 0rem) {
        .fancy-arrow {
            display: none;
        }

        .nav-right,
        .nav-left {
            opacity: 0;
            pointer-events: none;
        }
    }

    // ~800px
    @media (min-width: 50rem) {
        .fancy-arrow {
            display: none;
        }

        .nav-right,
        .nav-left {
            opacity: 1;
            pointer-events: all;
        }
    }

    // ~1440px
    @media (min-width: 90rem) {
        .fancy-arrow {
            display: block;
        }

        .nav-right,
        .nav-left {
            opacity: 1;
            pointer-events: all;
        }
    }
</style>
