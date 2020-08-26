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
        duration: '600%',
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
        duration: '350%',
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

if (screenWidth >= 1366){
    skillsSplitScroll();
    projectsSplitScroll();
    languagesSplitScroll();
}else {
    skillsMobileSplitScroll();
    projectsMobileSplitScroll();
    languagesMobileSplitScroll();
    contactMobileSplitScroll();
}

