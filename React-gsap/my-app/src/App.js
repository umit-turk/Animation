import React, { useEffect, useState } from "react";
import './App.css';
import { TweenMax, Power3} from "gsap"



function App() {
  const [big, setBig] = useState(false)
  
  useEffect(() => {
    TweenMax.to(".Container", 0, {visibility: "visible"})
    TweenMax.from(".square", .8, {opacity:0, y: 20, stagger: .25, ease: Power3.easeOut})
  }, [])

  const click = () => {
    setBig(!big);
    if(big)  TweenMax.to(".green", .8, {width: "20rem", height: "20rem", ease:Power3.easeOut})
    else  TweenMax.to(".green", .8, {width: "10rem", height: "10rem", ease:Power3.easeOut})
    
  }

  return (
    <div className="Container">
      <div className="square"></div>
      <div className="square red"></div>
      <div onClick={click} className="square green"></div>
      <div className="square blue"></div>
    </div>
  );
}

export default App;
