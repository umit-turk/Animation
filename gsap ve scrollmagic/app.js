const navbar = document.querySelector("nav");

function animation() {
    var controller = new ScrollMagic.Controller();

    const t1 = gsap.timeline({ defaults: {ease: Expo.InOut}});

    t1.fromTo(navbar, 1, { y: "-10rem"}, { y: 0});
    t1.fromTo(".banner-text", 0.5, {x: "-2rem", opacity: 0}, {x: 0, opacity: 1}, "-=1");
    t1.fromTo(".banner-img", 0.5, {x: "5rem", opacity: 0}, {x: 0, opacity: 1});
    t1.fromTo(".banner-img img", 0.5, {scale: 1.5}, {scale : 1});


    //about animations

    const t2 = gsap.timeline({ defaults: {ease: Expo.InOut}});

    t2.fromTo(".about-text", 0.5, {x: "-2rem", opacity:0}, {x: 0, opacity: 1})
    t2.fromTo(".about-img", 0.5, {x: "5rem", opacity: 0}, {x: 0, opacity: 1});
    t2.fromTo(".about-img img", 0.5, {scale: 1.5}, {scale : 1});

   new ScrollMagic.Scene({
       triggerElement: "#about", //about kısmına gelince çalışacak
       triggerHook: 0.5,    //about'un yarı height ine uaşınca çalışmaya başlayacak
       reverse: false,  //sadeve bir defa çalışacak
   })
   .setTween(t2)  //t2'nin çalışmasını istiyoruz
   .addTo(controller);


   //card animations 

   const t3 = gsap.timeline({ defaults: { ease: Expo.InOut} });
   if(window.innerWidth > 700){
   t3.fromTo(".card", 1, {y: "-3rem", opacity:0}, {y:0, opacity:1, stagger: 0.3}) // stagger ile her biri tek tek çalışıyor.

   t3.set(".card", {clearProps: "all"}); // cardların üzerinden bütün scrollmagic propslarını kaldır, çünkü hover efektleri gözükmüyor
}

   new ScrollMagic.Scene({
       triggerElement: "#vid",
       triggerHook: 0.5,
       reverse: false,
   })
   .setTween(t3)
   .addTo(controller);
};


animation();