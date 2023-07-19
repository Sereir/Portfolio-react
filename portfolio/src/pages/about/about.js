import React from "react";
import { faGoogle, faLinkedin, faGithubSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function About() {
  return (
 
   
   <div id="wrapper">
  <div class="box-area">
    <div id="box-front" class="box"><a href="mailto:nacim.sereir@gmail.com" class="button glow-button" target="_blank"><FontAwesomeIcon icon={faGoogle} style={{fontSize: "95px"}} /></a></div>
    <div id="box-right" class="box"><a href="https://www.linkedin.com/in/nacim-sereir/" class="button glow-button" target="_blank"><FontAwesomeIcon icon={faLinkedin} style={{fontSize: "95px"}} /></a></div>
    <div id="box-back" class="box"><a href="https://github.com/Sereir" class="button glow-button" target="_blank"><FontAwesomeIcon icon={faGithubSquare} style={{fontSize: "95px"}} /></a></div>
    <div id="box-left" class="box"><a href="tel:+33 651684603" class="button glow-button" target="_blank"><FontAwesomeIcon icon={faWhatsapp} style={{fontSize: "95px"}} /></a></div>
    <div id="box-bottom" class="box"></div>
  </div>
</div>


  );
}
