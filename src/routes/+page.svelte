<script lang="ts">
    import RButton from "$lib/components/RButton.svelte";
    import FancyCircle from "$lib/svgs/FancyCircle.svelte";
    import anime from "animejs";
    import { onMount } from "svelte";

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
<div class="hero parallax-none">
    <div class="gradient-decoration"></div>
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
</div>
<div class="features"></div>

<style lang="scss">
    .cover {
        position: absolute;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: var(--dark-1);
        opacity: 1;
        z-index: 0;
        pointer-events: none;
    }
    .hero {
        position: relative;
        width: 100vw;

        display: flex;
        flex-direction: column;
        align-items: center;

        padding: 16rem 4rem;

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
        height: 50rem;
        min-height: 50rem;
        background-color: var(--dark-1);
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

    .gradient-decoration {
        position: absolute;
        top: 0;
        left: 0;
        pointer-events: none;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                0deg,
                #2f2d2b 6.1%,
                rgba(47, 45, 43, 0) 53.05%
            ),
            radial-gradient(
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
