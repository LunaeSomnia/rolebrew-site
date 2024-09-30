<script lang="ts">
    import anime from "animejs";
    import { onMount } from "svelte";
    import { ScrollTrigger } from "gsap/ScrollTrigger";

    export let uniqueId = "id1";
    export let translateDirection: "right" | "left" = "right";

    $: uniqueIdClass = "." + uniqueId;
    $: translateXStart = translateDirection === "right" ? "-2rem" : "2rem";

    function animateEnter() {
        anime({
            targets: uniqueIdClass,
            duration: 1000,
            opacity: 1,
            translateX: "0rem",
        });
    }

    function animateExit() {
        anime({
            targets: uniqueIdClass,
            duration: 1000,
            opacity: 0,
            translateX: translateXStart,
        });
    }

    onMount(() => {
        animateExit();
        ScrollTrigger.create({
            scroller: ".page-wrapper",
            trigger: uniqueIdClass,
            start: "top center",
            end: "top center",
            scrub: true,
            onUpdate: (self) => {
                if (self.direction > 0) {
                    // going down
                    animateEnter();
                } else {
                    // going down
                    animateExit();
                }
            },
        });
    });
</script>

<div class="scroll-triggered {uniqueId}">
    <slot />
</div>

<style lang="scss">
    .scroll-triggered {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>
