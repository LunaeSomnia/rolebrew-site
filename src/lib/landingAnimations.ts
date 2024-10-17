import { setTheme } from "./globalColors";
import { gsap } from "./preloadGsap";

export function addLandingCircleAnimation(
    element: string,
    offset: number, //rems
    timeScale: number,
    zOffset: string,
    delayIndex: number,
) {
    var sign = delayIndex % 2 == 0 ? 1 : -1;

    var circleAnimation = gsap
        .timeline()
        .set(element, {
            translateY: offset * timeScale * timeScale + "rem",
            translateZ: zOffset,
            scale: timeScale,
            opacity: 0,
        })
        .add(() => {
            gsap.to(element, {
                duration: 1.5 * timeScale * timeScale,
                translateY: "-" + offset,
                translateZ: zOffset,
                scale: timeScale,
                rotate: -15 * timeScale * sign,
                opacity: 1,
                delay: delayIndex * 0.5,
                ease: "expo.out",
            });
        })
        .add(() => {
            gsap.to(element, {
                rotate: 0,
                duration: 2 * timeScale,
                ease: "cubicBezier(0.440, 0.015, 0.570, 0.575)",
            });
        })
        .add(() => {
            gsap.to(element, {
                rotate: 360 * sign,
                duration: 30 * timeScale * timeScale,
                repeat: -1,
                ease: "none",
            });
        });

    return circleAnimation.play();
}
export function addRouletteElement(element: string) {
    let rouletteAnimation = gsap.timeline()

    .to(element, {
        translateY: "0rem",
        opacity: 1,
        duration: 0.5,
    })
    .to(element, {
        translateY: "0rem",
        opacity: 1,
        duration: 2,
    })
    .to(element, {
        translateY: "-1rem",
        opacity: 0,
        duration: 0.5,
        delay: 2,
    })

    return rouletteAnimation;
}

// Theme Switching
export function enterLightTheme() {
    gsap.to("body", { backgroundColor: "#DEBD95", duration: 0.5 });
    gsap.to(".gradient-decoration-fade", {
        background: "linear-gradient(0deg,#DEBD95 0%,#DEBD9500 50%)",
        duration: 0.5,
    });
    gsap.to(".circle-decoration", { opacity: 0, duration: 0.15 });
    gsap.to(".features", { backgroundColor: "#DEBD95", duration: 0.5 });
    setTheme("light");
}

export function enterDarkTheme() {
    gsap.to("body", { backgroundColor: "#2f2d2b", duration: 0.5 });
    gsap.to(".gradient-decoration-fade", {
        background: "linear-gradient(0deg,#2f2d2b 0%,#2f2d2b00 50%)",
        duration: 0.5,
    });
    gsap.to(".circle-decoration", { opacity: 1, duration: 0.15 });
    gsap.to(".features", { backgroundColor: "#2f2d2b", duration: 0.5 });
    setTheme("dark");
}

export function landingInit() {

    gsap.set(".hero-title", { translateY: "-10rem", opacity: 0, duration: 1, ease: "expo.out" })
    gsap.set(".hero-subtitle", { translateY: "-5rem", opacity: 0, duration: 1, ease: "expo.out" })
    gsap.set(".hero-cta", { translateY: "-5rem", opacity: 0, duration: 1, ease: "expo.out" })
}

export function landingTitleAnimation() {
    gsap.to(".hero-title", {
        translateY: "0rem",
        opacity: 1,
        duration: 1,
        ease: "quad.out",
    })
}

export function landingSubtitleAnimation() {

    gsap.to(".hero-subtitle", {
            translateY: "0rem",
            opacity: 1,
            duration: 1, 
            ease: "expo.out"
    });
}

export function landingCTAAnimation() {
    gsap.to(".hero-cta", {
        translateY: "0rem",
        opacity: 1,
        duration: 1,
        ease: "quad.out",
    });
}