function skillsSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.skills-title',
        triggerHook: 0
    })
        .setPin('.skills-title')
        // .addIndicators()
        .addTo(controller);
}

function iPadskillsSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.skills-title',
        triggerHook: 0
    })
        .setPin('.skills-title')
        // .addIndicators()
        .addTo(controller);
}

function iPadlanguagesSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.languages-title',
        triggerHook: 0
    })
        .setPin('.languages-title')
        // .addIndicators()
        .addTo(controller);
}

function iPadprojectsSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '250%',
        triggerElement: '.projects-title',
        triggerHook: 0
    })
        .setPin('.projects-title')
        // .addIndicators()
        .addTo(controller);
}


    function languagesSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '300%',
        triggerElement: '.languages-title',
        triggerHook: 0
    })
        .setPin('.languages-title')
        // .addIndicators()
        .addTo(controller);
}

function projectsSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '700%',
        triggerElement: '.projects-title',
        triggerHook: 0
    })
        .setPin('.projects-title')
        // .addIndicators()
        .addTo(controller);
}

function skillsMobileSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '100%',
        triggerElement: '.skills-title',
        triggerHook: 0
    })
        .setPin('.skills-title')
        // .addIndicators()
        .addTo(controller);
}

function languagesMobileSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '200%',
        triggerElement: '.languages-title',
        triggerHook: 0
    })
        .setPin('.languages-title')
        // .addIndicators()
        .addTo(controller);
}

function projectsMobileSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '400%',
        triggerElement: '.projects-title',
        triggerHook: 0
    })
        .setPin('.projects-title')
        // .addIndicators()
        .addTo(controller);
}

function contactMobileSplitScroll() {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        duration: '0%',
        triggerElement: '.contact-title',
        triggerHook: 0
    })
        .setPin('.contact-title')
        // .addIndicators()
        .addTo(controller);
}

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;


if (screenWidth >= 960){
    if (screenWidth / screenHeight <= 10/7){
        // iPadskillsSplitScroll();
        iPadprojectsSplitScroll();
        iPadlanguagesSplitScroll();
    } else {
        skillsSplitScroll();
        projectsSplitScroll();
        languagesSplitScroll();
    }
}else {
    skillsMobileSplitScroll();
    projectsMobileSplitScroll();
    languagesMobileSplitScroll();
    contactMobileSplitScroll();
}

