var tl= new TimelineLite,
    mySplitText = new SplitText(".splittext", {type: "words, lines, chars"})
  chars = mySplitText.chars

tl.staggerFrom(chars, 0.3, {opacity:0, x:80, ease: Elastic.easeOut.config(1, 0.3)}, 0.1)

document.getElementById("animate").onclick = function() {
  tl.restart();
}