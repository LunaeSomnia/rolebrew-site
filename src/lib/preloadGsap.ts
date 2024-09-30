import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)
console.log("Plugins loaded!")

export {
    gsap, ScrollTrigger
};