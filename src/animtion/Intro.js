// animations.js
import gsap from "gsap";

export const fadeInUp = (...el) => {
    gsap.from(el, {
        opacity: 0,
        y: -40,
        duration: 0.7,
        stagger: 0.4,
        ease: "back.out(2)",
    });
};

export const fadeIn = () => {
    gsap.fromTo(["#Title", "#input", "#login"], {
        opacity: 0,
        y: -40,
        duration: 0.7,
        stagger: 0.4,
        ease: "back.out(2)",
    }, {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.4,
        ease: "back.out(2)",

    });
};


export const H2fadeInUp = (...el) => {
    gsap.from(el, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 1.2,
        stagger: 0.4,
        // ease: "expo.out",
        ease: "slow(0.7,0.7,false)",
    });
};

export const scale = (el) => {
    // gsap.from(el.scale, {
    //     scaleX: 0,
    //     // scaleY: 0,
    //     // opacity: 0,
    //     duration: 0.8,
    //     delay: 1.2,
    //     ease: "back.out(1.7)",
    // })

    gsap.from(el, {
        opacity: 0,
        duration: 0.8,
        delay: 5,
    })
};