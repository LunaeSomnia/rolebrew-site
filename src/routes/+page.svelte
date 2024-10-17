<script lang="ts">
    import RButton from "$lib/components/RButton.svelte";
    import FancyCircle from "$lib/svgs/FancyCircle.svelte";
    import FancySeparator from "$lib/svgs/FancySeparator.svelte";
    import { gsap, ScrollTrigger } from "$lib/preloadGsap";
    import { onMount } from "svelte";
    import Feature from "$lib/components/Feature.svelte";
    import ScrollTriggeredDiv from "$lib/ScrollTriggeredDiv.svelte";
    import Icon from "$lib/Icon.svelte";
    import { IconType } from "$lib/icon";
    import Footer from "$lib/components/Footer.svelte";
    import {
        addLandingCircleAnimation,
        landingCTAAnimation,
        landingInit,
        landingSubtitleAnimation,
        landingTitleAnimation,
        addRouletteElement,
    } from "$lib/landingAnimations";

    onMount(() => {
        const roulettetl = gsap
            .timeline({
                repeat: -1,
                ease: "expo.out",
                paused: true,
                delay: 1,
            })
            .add(addRouletteElement(".roulette-element.index-1"))
            .add(addRouletteElement(".roulette-element.index-2"))
            .add(addRouletteElement(".roulette-element.index-3"))
            .add(addRouletteElement(".roulette-element.index-4"));

        // Landing
        landingInit();
        gsap.set(".cover", { opacity: 1, duration: 0 });
        gsap.set(".hero", { opacity: 0 });
        gsap.timeline()
            .add(() => {
                roulettetl.play();
            })
            .add(() => {
                landingTitleAnimation();
                gsap.to(".hero", { opacity: 1 });
                gsap.to(".cover", { opacity: 0, duration: 1 });
            })
            .add(() => landingSubtitleAnimation(), "+=1")
            .add(() => landingCTAAnimation(), "+=1");

        // Circle Animations
        addLandingCircleAnimation(".circle-1", 20, 1, "-1rem", 5);
        addLandingCircleAnimation(".circle-2", 20, 1.5, "-2rem", 4);
        addLandingCircleAnimation(".circle-3", 20, 2, "-3rem", 3);
        addLandingCircleAnimation(".circle-4", 20, 2.5, "-4rem", 2);
        addLandingCircleAnimation(".circle-5", 20, 3, "-5rem", 1);

    });
</script>

<svelte:head>
    <title>Rolebrew</title>
</svelte:head>

<div class="cover"></div>
<div class="hero-bg parallax-layer parallax-5"></div>
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
    <div class="max-width-wrapper">
        <div class="hero-title m-5">
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
    </div>
</section>
<section id="landing-trigger-1" class="features">
    <FancySeparator />
    <div class="max-width-wrapper">
        <ScrollTriggeredDiv uniqueId="section-header-1" disableOnExit={true}>
            <div class="section-header">
                <Icon icon={IconType.Star} color="var(--accent-color)" />
                <h1>All of your favourite stuff right at your reach</h1>
            </div>
        </ScrollTriggeredDiv>
        <ScrollTriggeredDiv uniqueId="feature-1" disableOnExit={true}>
            <Feature
                title="Compendium Explorer"
                subtitle="Every rule, spell, and monster. All in one place."
                description="No more flipping through pages or opening multiple tabs. With our built-in Pathfinder 2e compendium, quickly find detailed information on classes, races, spells, monsters, and more. Everything you need for your game is just a search away."
            />
        </ScrollTriggeredDiv>
        <ScrollTriggeredDiv
            uniqueId="feature-2"
            disableOnExit={true}
            translateDirection="left"
        >
            <Feature
                alt={true}
                title="Character Creator"
                subtitle="Design heroes worthy of legend."
                description="Create and customize your perfect Pathfinder character with our intuitive character creator. Choose your ancestry, class, skills, and feats with ease, and fine-tune every stat to fit your playstyle. Whether you're a seasoned pro or new to the game, building your hero has never been this easy."
            />
        </ScrollTriggeredDiv>
        <ScrollTriggeredDiv uniqueId="feature-3" disableOnExit={true}>
            <Feature
                title="Battle Simulator"
                subtitle="Prepare for every encounter."
                description="Test your character's mettle with our battle simulator. Practice different combat strategies, experiment with new abilities, or see how your party might fare against tough monsters. Perfect for preparing ahead of your next big session!"
            />
        </ScrollTriggeredDiv>
        <ScrollTriggeredDiv
            uniqueId="feature-4"
            disableOnExit={true}
            translateDirection="left"
        >
            <Feature
                alt={true}
                title="Stat Calculator"
                subtitle="Too much math? Leave that to us."
                description="Tired of crunching numbers? Rolebrew's built-in calculator handles ability scores, modifiers, armor class, and all the nitty-gritty mechanics behind the scenes. Focus on the role-playing, while we take care of the math."
            />
        </ScrollTriggeredDiv>
    </div>
    <FancySeparator />
</section>
<section class="try-now">
    <div class="gradient-decoration-color flip"></div>
    <div class="gradient-decoration-fade flip"></div>
    <div class="max-width-wrapper">
        <ScrollTriggeredDiv uniqueId="section-header-2" disableOnExit={true}>
            <div class="section-header">
                <Icon icon={IconType.Star} color="var(--accent-color)" />
                <h1>What are you waiting for?</h1>
            </div>
        </ScrollTriggeredDiv>
        <ScrollTriggeredDiv
            uniqueId="section-button-1"
            disableOnExit={true}
            translateDirection="left"
        >
            <RButton text="Start your journey" />
        </ScrollTriggeredDiv>
    </div>
</section>
<Footer />

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

        

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        opacity: 0;

        .max-width-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }

        .hero-title {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: column;

            & h1 {
                text-align: center;
                color: var(--light-1);
            }

            .roulette-group {
                width: 100%;
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
        display: grid;
        place-items: center;
        background-color: #2f2d2b;

        .max-width-wrapper {
            width: 100vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4rem;
        }
    }

    .try-now {
        height: 40rem;
        min-height: 40rem;
        display: flex;
        flex-direction: column;
        align-items: center;

        .max-width-wrapper {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 4rem;
        }

        :global(.rbutton) {
            font-size: 1.5rem;
            padding: 1rem 1.5rem;
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

    .hero-bg {
        position: absolute;
        width: 100vw;
        height: 60rem;
        top: -10rem;
        z-index: -1;

        background-color: var(--dark-1);
        background-image: url("/noises/bg-01.webp");
        background-size: 1024px 1024px;
        background-repeat: repeat;
        background-blend-mode: color-dodge, normal;
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
        .hero {
            min-height: 40rem;
            height: 40rem;
        }
        .decorations {
            display: none;
        }

        .hero-title h1 {
            font-size: 2.5rem;
            line-height: 3.5rem;
        }

        .roulette-group {
            height: 3.5rem;
        }
    }

    // ~800px
    @media (min-width: 50rem) {
        .hero {
            padding: 4rem;
            min-height: 54rem;
            height: 54rem;
        }
        .decorations {
            display: flex;
        }

        .roulette-group {
            height: 5rem;
        }

        .hero-title h1 {
            font-size: 5rem;
            line-height: 5rem;
        }
    }

    // ~1440px
    @media (min-width: 90rem) {
        .decorations {
            display: flex;
        }

        .hero-title h1 {
            font-size: 6rem;
            line-height: 6rem;
        }

        .roulette-group {
            height: 6rem;
        }
    }
</style>
