<script>
    import { base } from "$app/paths";
    import FancySeparator from "$lib/svgs/FancySeparator.svelte";
    import Logo from "$lib/svgs/Logo.svelte";
</script>

<footer>
    <FancySeparator />
    <div class="section-header">
        <Logo width="4rem" height="4rem" fill="var(--accent-color)" />
        <h1>Rolebrew</h1>
    </div>
    <div class="footer-section-container">
        <div class="footer-section">
            <h2>Project</h2>
            <a href="{base}/">About</a>
            <a href="{base}/">Blog</a>
        </div>
        <div class="footer-section">
            <h2>Compendium</h2>
            <a href="{base}/">Clases</a>
            <a href="{base}/">Ancestries</a>
            <a href="{base}/">Feats</a>
            <a href="{base}/">Monsters</a>
            <a href="{base}/">Items & Equipment</a>
            <a href="{base}/">Traits</a>
            <a href="{base}/">Spell</a>
        </div>
        <div class="footer-section">
            <h2>Character Creator</h2>
            <a href="{base}/">Create Character</a>
            <a href="{base}/">Character Preview</a>
            <a href="{base}/">PDF Generator</a>
        </div>
        <div class="footer-section">
            <h2>Battle Simulator</h2>
            <a href="{base}/">Encounter</a>
            <a href="{base}/">Optimizer</a>
        </div>
        <div class="footer-section">
            <h2>Stat Calculator</h2>
            <a href="{base}/">Level-up Adjuster</a>
            <a href="{base}/">Automatic Calculator</a>
        </div>
    </div>
</footer>

<style lang="scss">
    footer {
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;
        background: linear-gradient(0deg, #2f2d2b 0%, rgba(47, 45, 43, 0) 100%);

        .section-header {
            display: flex;
            flex-direction: row;
            align-items: center;
            width: 100%;
            padding: 2rem 0rem;
            padding-left: 0;
            gap: 1rem;
        }

        .footer-section-container {
            width: 100%;
            display: flex;
            align-items: flex-start;
        }

        .footer-section {
            width: 100%;
            display: flex;
            align-items: flex-start;
            gap: 2rem;

            & h2 {
                color: var(--accent-color);
            }

            & a {
                color: var(--text-color);
                text-decoration: none;
                font-weight: 500;
            }
        }
    }

    @media (min-width: 0rem) {
        .footer-section-container {
            flex-direction: column;
            gap: 4rem;
        }

        .footer-section {
            flex-direction: column;
        }
    }

    @media (min-width: 50rem) {
        .footer-section-container {
            flex-direction: row;
            gap: 2rem;
        }
        .footer-section {
            flex-direction: column;
        }
    }
</style>
