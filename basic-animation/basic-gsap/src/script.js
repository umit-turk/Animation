gsap.registerEffect({
    name: "fade",
    defaults: {duration: 2}, //defaults get applied to the "config" object passed to the effect below
    effect: (targets, config) => {
        return gsap.to(targets, {duration: config.duration, opacity: 0});
    }
});

//now we can use it like this:
//gsap.effects.fade(".box");

document.querySelectorAll(".box").forEach(function(box) {
  box.addEventListener("mouseenter", function() {
    gsap.effects.fade(this);
  });
});