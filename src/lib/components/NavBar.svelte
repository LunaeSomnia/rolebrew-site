<script lang="ts">
    import { base } from "$app/paths";
    import FancyArrow from "$lib/svgs/FancyArrow.svelte";
    import Logo from "$lib/svgs/Logo.svelte";
    import RButton from "./RButton.svelte";
</script>

<nav class="nav-bar">
    <div class="nav-left">
        <a href={base}>About</a>
        <a href={base}>Blog</a>
    </div>
    <div class="nav-middle">
        <div class="fancy-arrow">
            <FancyArrow
                direction="left"
                pathFill="var(--accent-color)"
                pathOpacity="0.5"
            />
        </div>
        <a href={base}>
            <Logo width="2rem" height="2rem" pathFill="var(--accent-color)" />
        </a>
        <div class="fancy-arrow">
            <FancyArrow
                direction="right"
                pathFill="var(--accent-color)"
                pathOpacity="0.5"
            />
        </div>
    </div>
    <div class="nav-right">
        <RButton text="Start your journey" />
    </div>
</nav>

<style lang="scss">
    .nav-bar {
        position: absolute;
        width: 100vw;
        height: 4rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        padding: 1rem 4rem;
        z-index: 0;

        &:before {
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
