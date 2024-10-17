<script lang="ts">
    import { onMount } from "svelte";
    import { ScrollTrigger } from "$lib/preloadGsap";
    import { gsap } from "$lib/preloadGsap";

    export let uniqueId = "id1";
    export let translateDirection: "right" | "left" = "right";

    export let disableOnExit = false;

    $: uniqueIdClass = "." + uniqueId;
    $: translateXStart = translateDirection === "right" ? "-2rem" : "2rem";

    function animateEnter() {
        gsap.to(uniqueIdClass, {
            duration: 0.5,
            opacity: 1,
            translateX: "0rem",
        });
    }

    function animateExit() {
        gsap.to(uniqueIdClass, {
            duration: 0.5,
            opacity: 0,
            translateX: translateXStart,
        });
    }

    onMount(() => {
        animateExit()
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
                } else if (!disableOnExit) {
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
