<script lang="ts">
    import { base } from "$app/paths";
    import FancyArrow from "$lib/svgs/FancyArrow.svelte";
    import Logo from "$lib/svgs/Logo.svelte";
    import RButton from "./RButton.svelte";

    const alt = base === "/" ? "alt" : "";
</script>

<nav class="nav-bar {alt}">
    <div class="max-width-wrapper">
        <nav class="nav-left">
            <a href="{base}/compendium/">Compendium</a>
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
            <a href="{base}/login">Log In</a>
            <RButton text="Start your journey" />
        </nav>
    </div>
</nav>

<style lang="scss">
    .nav-bar {
        width: 100vw;
        height: 4rem;

        display: grid;
        place-items: center;

        z-index: 0;
        background-color: var(--background-color);
        border-bottom: 1px;
        border-style: solid;
        border-image: linear-gradient(
                to right,
                #ffb23044 0%,
                #ffb230 50%,
                #ffb23044 100%
            )
            1;

        &.alt {
            position: absolute;
        }

        &.alt:before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(
                to bottom,
                var(--background-color) 0%,
                var(--background-color-0) 100%
            );
            z-index: -1;
        }
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
