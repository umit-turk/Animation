const moonPath = 
"M21.5 26C21.5 41.1878 32 53.5 32 55C16.8122 55 4.5 42.6878 4.5 27.5C4.5 12.3122 16.8122 0 32 0C32 0 21.5 10.8122 21.5 26Z";

const sunPath = 
"M59 27.5C59 42.6878 46.6878 55 31.5 55C16.3122 55 4 42.6878 4 27.5C4 12.3122 16.3122 0 31.5 0C46.6878 0 59 12.3122 59 27.5Z"

const darkMode = document.querySelector('#darkMode')
let toggle = false;

//We need to click on the sun

darkMode.addEventListener('click', () => {
    //We need to use anime.js
    //Here we set up the timeline
    const timeline = anime.timeline({
        duration : 750,
        easing : "easeOutExpo"
    });
//ADD DIFFERENT ANIMATIONS TO THE TIMELINE
    timeline.add({
        targets: ".sun",
        d: [{value: toggle ? sunPath : moonPath}]
    })
    .add({
        targets: '#darkMode',
        rotate : 320
    }, '-= 350')
    .add({
        targets: "section",
        backgroundColor: toggle ? 'rgb(255,255,255)' : 'rgb(22,22,22)',
        color : toggle ? "rgb(22,22,22)" : "rgb(255,255,255)"
    }, '-= 700');

    //Everytime we click on the sun I want that toggle to switch
    if(!toggle){
        toggle = true;
    }else{
        toggle = false;
    }

});