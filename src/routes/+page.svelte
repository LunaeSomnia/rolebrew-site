<script lang="ts">
    import RButton from "$lib/components/RButton.svelte";
    import FancyCircle from "$lib/svgs/FancyCircle.svelte";
    import FancySeparator from "$lib/svgs/FancySeparator.svelte";
    import anime from "animejs";
    import { gsap, ScrollTrigger } from "$lib/preloadGsap";
    import { onMount } from "svelte";
    import { setTheme } from "$lib/globalColors";
    import Feature from "$lib/components/Feature.svelte";
    import ScrollTriggeredDiv from "$lib/ScrollTriggeredDiv.svelte";
    import Icon from "$lib/Icon.svelte";
    import { IconType } from "$lib/icon";
    import Logo from "$lib/svgs/Logo.svelte";
    import { base } from "$app/paths";

    // Circle Startup Animation
    function addLandingCircleAnimation(
        element: string,
        offset: number, //rems
        timeScale: number,
        zOffset: string,
        delayIndex: number,
    ) {
        anime({
            targets: element,
            duration: 0,
            translateY: offset * timeScale * timeScale + "rem",
            translateZ: zOffset,
            scale: timeScale,
            easing: "linear",
            opacity: 0,
        });

        var sign = delayIndex % 2 == 0 ? 1 : -1;

        anime({
            targets: element,
            duration: 1500 * timeScale * timeScale,
            translateY: "-" + offset,
            translateZ: zOffset,
            easing: "easeOutExpo",
            scale: timeScale,
            delay: delayIndex * 500,
            rotate: -15 * timeScale * sign + "deg",
            opacity: 1,
            complete: function (anim) {
                anime({
                    targets: element,
                    rotate: 0,
                    easing: "cubicBezier(0.440, 0.015, 0.570, 0.575)",
                    duration: 2000 * timeScale,
                    complete: function (anim) {
                        anime({
                            targets: element,
                            loop: true,
                            rotate: 360 * sign + "deg",
                            easing: "linear",
                            duration: 30000 * timeScale * timeScale,
                        });
                    },
                });
            },
        });
    }

    // Title Roulette
    function addRouletteElement(
        timeline: anime.AnimeTimelineInstance,
        element: string,
    ) {
        anime({
            targets: element,
            translateY: "-1rem",
            opacity: 0,
            duration: 600,
        });
        timeline
            .add({
                targets: element,
                translateY: "0rem",
                opacity: 1,
                duration: 1000,
            })
            .add({
                targets: element,
                translateY: "0rem",
                duration: 2000,
                opacity: 1,
            })
            .add({
                targets: element,
                translateY: "-1rem",
                opacity: 0,
                duration: 600,
            });
    }

    function enterLightTheme() {
        anime({
            targets: "body",
            backgroundColor: "#f4daba",
            backgroundImage: "none",
            duration: 1000,
        });
        gsap.to(".gradient-decoration-fade", {
            background: "linear-gradient(0deg,#f4daba 0%,#f4daba00 50%)",
            duration: 1,
        });
        anime({
            targets: ".circle-decoration",
            opacity: 0,
            duration: 100,
        });
        gsap.to(".features", {
            backgroundColor: "#f4daba",
            duration: 1,
        });
        setTheme("light");
    }

    function enterDarkTheme() {
        anime({
            targets: "body",
            backgroundColor: "#2f2d2b",
            backgroundImage: "none",
            duration: 1000,
        });
        gsap.to(".gradient-decoration-fade", {
            background: "linear-gradient(0deg,#2f2d2b 0%,#2f2d2b00 50%)",
            duration: 1,
        });
        anime({
            targets: ".circle-decoration",
            opacity: 1,
            duration: 100,
        });
        gsap.to(".features", {
            backgroundColor: "#2f2d2b",
            duration: 1,
        });
        setTheme("dark");
    }

    onMount(() => {
        var roulettetl = anime.timeline({
            easing: "easeOutExpo",
            loop: true,
        });

        // Landing
        anime({
            targets: ".cover",
            opacity: 0,
            duration: 5000,
        });

        var landingtTitletl = anime.timeline({
            easing: "easeOutExpo",
            duration: 1000,
        });

        var landingtSubtitletl = anime.timeline({
            easing: "easeOutExpo",
            duration: 1000,
        });

        var landingtCtatl = anime.timeline({
            easing: "easeOutExpo",
            duration: 1000,
        });

        landingtTitletl
            .add({
                targets: ".hero-title",
                translateY: "-10rem",
                opacity: 0,
                duration: 0,
            })
            .add({
                targets: ".hero-title",
                easing: "easeOutQuad",
                translateY: "0rem",
                opacity: 1,
                duration: 1000,
                complete: function (anim) {
                    roulettetl.play();
                },
            });

        landingtSubtitletl
            .add({
                targets: ".hero-subtitle",
                translateY: "-5rem",
                opacity: 0,
                duration: 0,
            })
            .add({
                targets: ".hero-subtitle",
                easing: "easeOutQuad",
                translateY: "0rem",
                opacity: 1,
                duration: 1000,
                delay: 1000,
            });

        landingtCtatl
            .add({
                targets: ".hero-cta",
                translateY: "-5rem",
                opacity: 0,
                duration: 0,
            })
            .add({
                targets: ".hero-cta",
                easing: "easeOutQuad",
                translateY: "0rem",
                opacity: 1,
                duration: 1000,
                delay: 2000,
            });

        addLandingCircleAnimation(".circle-1", 20, 1, "-1rem", 5);
        addLandingCircleAnimation(".circle-2", 20, 1.5, "-2rem", 4);
        addLandingCircleAnimation(".circle-3", 20, 2, "-3rem", 3);
        addLandingCircleAnimation(".circle-4", 20, 2.5, "-4rem", 2);
        addLandingCircleAnimation(".circle-5", 20, 3, "-5rem", 1);

        addRouletteElement(roulettetl, ".roulette-element.index-1");
        addRouletteElement(roulettetl, ".roulette-element.index-2");
        addRouletteElement(roulettetl, ".roulette-element.index-3");
        addRouletteElement(roulettetl, ".roulette-element.index-4");

        // Gradient decor

        roulettetl.pause();

        // Scroll Triggers
        const featureSection = document.querySelector(".features");

        ScrollTrigger.create({
            scroller: ".page-wrapper",
            trigger: featureSection, // The section that will trigger the background color change
            start: "top center", // When the top of the feature section reaches the center of the viewport
            end: "top center", // When the bottom of the feature section reaches the center of the viewport
            onUpdate: (self) => {
                if (self.direction > 0) {
                    // going down
                    enterLightTheme();
                } else {
                    // going up
                    enterDarkTheme();
                }
            },
        });

        ScrollTrigger.create({
            scroller: ".page-wrapper",
            trigger: featureSection, // The section that will trigger the background color change
            start: "bottom center", // When the top of the feature section reaches the center of the viewport
            end: "bottom center", // When the bottom of the feature section reaches the center of the viewport
            onUpdate: (self) => {
                if (self.direction > 0) {
                    // going down
                    enterDarkTheme();
                } else {
                    // going up
                    enterLightTheme();
                }
            },
        });
    });
</script>

<svelte:head>
    <title>Rolebrew</title>
</svelte:head>

<div class="cover"></div>
<div class="decorations">
    <div class="circle-decoration parallax-layer parallax-0 circle-1">
        <FancyCircle pathOpacity="1" />
    </div>
    <div class="circle-decoration parallax-layer parallax-1 circle-2">
        <FancyCircle pathOpacity="0.75" />
    </div>
    <div class="circle-decoration parallax-layer parallax-2 circle-3">
        <FancyCircle pathOpacity="0.70" />
    </div>
    <div class="circle-decoration parallax-layer parallax-3 circle-4">
        <FancyCircle pathOpacity="0.33" />
    </div>
    <div class="circle-decoration parallax-layer parallax-4 circle-5">
        <FancyCircle pathOpacity="0.25" />
    </div>
</div>
<section class="hero parallax-none">
    <div class="gradient-decoration-color"></div>
    <div class="gradient-decoration-fade"></div>
    <div class="hero-title m-4">
        <h1>Your Pathfinder2e</h1>
        <div class="roulette-group">
            <h1 class="roulette-element index-1">Compendium</h1>
            <h1 class="roulette-element index-2">Character Creator</h1>
            <h1 class="roulette-element index-3">Calculator</h1>
            <h1 class="roulette-element index-4">Simulator</h1>
        </div>
    </div>
    <p class="hero-subtitle m-5">And much more in the future.</p>
    <div class="hero-cta">
        <RButton text="Start your journey" />
    </div>
</section>
<section id="landing-trigger-1" class="features">
    <FancySeparator />
    <ScrollTriggeredDiv uniqueId="section-header-1">
        <div class="section-header">
            <Icon icon={IconType.Star} color="var(--accent-color)" />
            <h1>All of your favourite stuff right at your reach</h1>
        </div>
    </ScrollTriggeredDiv>
    <ScrollTriggeredDiv uniqueId="feature-1">
        <Feature
            title="Compendium Explorer"
            subtitle="Every rule, spell, and monster. All in one place."
            description="No more flipping through pages or opening multiple tabs. With our built-in Pathfinder 2e compendium, quickly find detailed information on classes, races, spells, monsters, and more. Everything you need for your game is just a search away."
        />
    </ScrollTriggeredDiv>
    <ScrollTriggeredDiv uniqueId="feature-2" translateDirection="left">
        <Feature
            alt={true}
            title="Character Creator"
            subtitle="Design heroes worthy of legend."
            description="Create and customize your perfect Pathfinder character with our intuitive character creator. Choose your ancestry, class, skills, and feats with ease, and fine-tune every stat to fit your playstyle. Whether you're a seasoned pro or new to the game, building your hero has never been this easy."
        />
    </ScrollTriggeredDiv>
    <ScrollTriggeredDiv uniqueId="feature-3">
        <Feature
            title="Battle Simulator"
            subtitle="Prepare for every encounter."
            description="Test your character's mettle with our battle simulator. Practice different combat strategies, experiment with new abilities, or see how your party might fare against tough monsters. Perfect for preparing ahead of your next big session!"
        />
    </ScrollTriggeredDiv>
    <ScrollTriggeredDiv uniqueId="feature-4" translateDirection="left">
        <Feature
            alt={true}
            title="Stat Calculator"
            subtitle="Too much math? Leave that to us."
            description="Tired of crunching numbers? Rolebrew's built-in calculator handles ability scores, modifiers, armor class, and all the nitty-gritty mechanics behind the scenes. Focus on the role-playing, while we take care of the math."
        />
    </ScrollTriggeredDiv>
    <FancySeparator />
</section>
<section class="try-now">
    <div class="gradient-decoration-color flip"></div>
    <div class="gradient-decoration-fade flip"></div>
    <ScrollTriggeredDiv uniqueId="section-header-2">
        <div class="section-header">
            <Icon icon={IconType.Star} color="var(--accent-color)" />
            <h1>What are you waiting for?</h1>
        </div>
    </ScrollTriggeredDiv>
    <ScrollTriggeredDiv uniqueId="section-button-1" translateDirection="left">
        <RButton text="Start your journey" />
    </ScrollTriggeredDiv>
</section>
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
    .cover {
        position: absolute;
        width: 100vw;
        height: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--dark-1);
        opacity: 1;
        z-index: 0;
        pointer-events: none;
    }

    .section-header {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        padding: 2rem 0rem;
        padding-left: 0;
        gap: 1rem;
    }

    .hero {
        position: relative;
        width: 100vw;

        min-height: 54rem;
        height: 54rem;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        padding: 4rem;

        .hero-title {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            & h1 {
                text-align: center;
                line-height: 6rem;
                color: var(--light-1);
            }

            .roulette-group {
                width: 100%;
                height: 6rem;
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .roulette-element {
                position: absolute;
                color: var(--accent-1);
                opacity: 0;
            }
        }

        .hero-subtitle {
            font-size: 1.2rem;
        }
    }

    .features {
        position: relative;
        width: 100vw;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 4rem;
        background-color: #2f2d2b;
    }

    .try-now {
        height: 40rem;
        min-height: 40rem;
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        :global(.rbutton) {
            font-size: 1.5rem;
            padding: 1rem 1.5rem;
        }
    }

    footer {
        padding: 4rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4rem;

        .footer-section-container {
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            gap: 2rem;
        }

        .footer-section {
            width: 100%;
            display: flex;
            flex-direction: column;
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

    .decorations {
        --circle-decorations-y-pos: 40rem;

        position: absolute;
        width: 100vw;
        height: 54rem;
        justify-content: center;
        align-items: center;
        height: 100%;
        transform-style: preserve-3d;
        z-index: -1;
        pointer-events: none;
        // overflow-y: hidden;
    }

    .circle-decoration {
        --circle-radius-initial: 60rem;
        --circle-radius-augment: 24rem;
        position: absolute;
        transform-origin: center;
        top: calc(var(--circle-decorations-y-pos));
        will-change: transform;
    }

    .circle-1 {
        --rotation-speed: 15s;
        --circle-radius: calc(var(--circle-radius-initial));
        // animation: circleDecorationRotation var(--rotation-speed) infinite
        //     linear;
    }
    .circle-2 {
        --rotation-speed: 30s;
        --circle-radius: calc(
            var(--circle-radius-initial) + var(--circle-radius-augment)
        );
        // animation: circleDecorationRotationAlt var(--rotation-speed) infinite
        //     linear;
    }
    .circle-3 {
        --rotation-speed: 60s;
        --circle-radius: calc(
            var(--circle-radius-initial) + var(--circle-radius-augment) +
                var(--circle-radius-augment) / 2
        );
        // animation: circleDecorationRotation var(--rotation-speed) infinite
        //     linear;
    }
    .circle-4 {
        --rotation-speed: 120s;
        --circle-radius: calc(
            var(--circle-radius-initial) + var(--circle-radius-augment) +
                var(--circle-radius-augment) / 2 + var(--circle-radius-augment) /
                2
        );
        // animation: circleDecorationRotationAlt var(--rotation-speed) infinite
        //     linear;
    }
    .circle-5 {
        --rotation-speed: 120s;
        --circle-radius: calc(
            var(--circle-radius-initial) + var(--circle-radius-augment) +
                var(--circle-radius-augment) / 2 + var(--circle-radius-augment) /
                2 + var(--circle-radius-augment) / 2
        );
        // animation: circleDecorationRotationAlt var(--rotation-speed) infinite
        //     linear;
    }

    .gradient-decoration-fade,
    .gradient-decoration-color {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        width: 100%;
        height: 100%;

        &.flip {
            rotate: 180deg;
        }
    }
    .gradient-decoration-fade {
        background: linear-gradient(
            0deg,
            #2f2d2b 6.1%,
            rgba(47, 45, 43, 0) 53.05%
        );
    }
    .gradient-decoration-color {
        background: radial-gradient(
            66.43% 100% at 50% 100%,
            rgba(73, 40, 255, 0.25) 0%,
            rgba(77, 45, 255, 0) 91.5%
        );
    }

    @media (min-width: 0rem) {
        .decorations {
            display: none;
        }

        .hero-title h1 {
            font-size: 4rem;
        }
    }

    // ~800px
    @media (min-width: 50rem) {
        .decorations {
            display: flex;
        }

        .hero-title h1 {
            font-size: 5rem;
        }
    }

    // ~1440px
    @media (min-width: 90rem) {
        .decorations {
            display: flex;
        }

        .hero-title h1 {
            font-size: 6rem;
        }
    }
</style>
