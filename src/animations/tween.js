import React, { useEffect } from 'react';
import logo from '../logo.svg';
import { TimelineLite, TweenLite ,CSSPlugin } from 'gsap/all'

const Tween = () => {
  let myTween
  const logoStyle = {
    height: "100px",
    width: "100px"
  }
  
  const doSomthing = () => {
    //TweenLite.to(".app-logo", 4, {x: 200, y: 400});
   
    myTween = new TimelineLite({paused: true})
    .to(".element", 1, {duration: 1, y:50, stagger: 0.06, repeat: -1, yoyo: true});
    // .to(".app-logo", 5, { rotation: 360, transformOrigin: "center" })
    // .to(".app-logo", 5, { x: 360, scale: 2, transformOrigin: "center" })
    
  }



  useEffect(() => {
    doSomthing()
  },[])


  return(
    <div>
      {/* <img src={logo} className="app-logo" alt="logo" style={logoStyle} /> */}
      <div className="loader">
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
        <div className="element"></div>
      </div>

      <div className="button-container">
        <button onClick={() => myTween.play() }>Play</button>
        <button onClick={() => myTween.reverse() }>Reverse</button>
      </div>
    </div>
  )
}

export default Tween