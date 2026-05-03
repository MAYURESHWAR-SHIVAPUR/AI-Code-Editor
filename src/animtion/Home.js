import gsap from "gsap";

export const panelAnimation = () => {
    const tl = gsap.timeline();

    tl.from("#panel", {
        scale: 0,
        duration: 1.2,
        delay: 0.9,
        ease: "back.out(1)",
        opacity: 0,


        // rotateX: 90,
        // // y: 40,
        // // scale: 0.4,
        // transformPerspective: 800,
        // transformOrigin: " bottom center",
        // duration: 2.5,
        // delay: 0.9,
        // ease: "expo.out"
    })

        .from(
            [
                "#leftNav #nav1",
                "#leftNav #nav2",
                "#leftNav #nav3",
                "#leftNav #nav4",
                "#leftNav #nav5",
                "#rightNav #nav1",
                "#rightNav #nav2",
                "#rightNav #nav3",
            ],
            {
                opacity: 0,
                y: -40,
                duration: 0.5,
                stagger: 0.1,
                ease: "back.out(2)",
            }
        )

        .from(["#codeEditor", "#leftFooter"], {
            opacity: 0,
            x: -200,
            duration: 1.2,
            stagger: 0.5,
            ease: "back.out(2)",
        })

        .from(
            ["#output", "#outputNav", "#outputRes", "#outputInput"],
            {
                opacity: 0,
                x: 400,
                duration: 1,
                stagger: 0.3,
            },
            "<"
        )

        .from(
            "#lang",
            {
                opacity: 0,
                x: 400,
                delay: 1,
                duration: 1,
            },
            "<"
        )

        .from(
            ["#RightFooterTitle #i", "#RightFooterTitle #h3", "#RFp",],
            {
                opacity: 0,
                y: -10,
                duration: 1,
                stagger: 0.3
            },
            "<"
        )
        .from(
            "#RFbutton",
            {
                scale: 0,
                duration: 1,
                ease: "back.out(2)",
            },
            "<"
        )
};