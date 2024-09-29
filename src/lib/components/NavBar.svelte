<script lang="ts">
    import FancyArrow from "$lib/svgs/FancyArrow.svelte";
    import Logo from "$lib/svgs/Logo.svelte";
    import RButton from "./RButton.svelte";
</script>

<nav>
    <div class="nav-left">
        <a href="/">About</a>
        <a href="/">Blog</a>
    </div>
    <div class="nav-middle">
        <FancyArrow
            direction="left"
            pathFill="var(--accent-1)"
            pathOpacity="0.5"
        />
        <a href="/">
            <Logo width="2rem" height="2rem" pathFill="var(--accent-1)" />
        </a>
        <FancyArrow
            direction="right"
            pathFill="var(--accent-1)"
            pathOpacity="0.5"
        />
    </div>
    <div class="nav-right">
        <RButton text="Start your journey" />
    </div>
</nav>

<style lang="scss">
    nav {
        position: absolute;
        width: 100vw;
        height: var(--navbar-height);

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
                var(--dark-1) 0%,
                var(--dark-1-0) 100%
            );
            z-index: -1;
        }
    }

    a {
        font-weight: bold;
        color: var(--light-1);
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
</style>
