var fredii = gsap.to(".fred", {duration:3, x:600, ease:"linear", paused:true});

document.getElementById("play").onclick = () => fredii.play();
document.getElementById("pause").onclick = () => fredii.pause();
document.getElementById("reverse").onclick = () => fredii.reverse();
document.getElementById("restart").onclick = () => fredii.restart();
  
