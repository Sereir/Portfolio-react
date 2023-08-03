import React from "react";
import { Fade } from "react-reveal";
import Zoom from 'react-reveal/Zoom';
import Flip from 'react-reveal/Flip';
import LightSpeed from 'react-reveal/LightSpeed';
import Particles from "../../components/particles/particles";

export default function Home() {
  return (
	<section>
	<div className="home">
	<LightSpeed>
		<div className="main_title">
		Welcome to my website
		</div>
		</LightSpeed>
		<Flip left cascade>
		<div className="main_subtitle">
		Here you can discover my work
		</div>
		</Flip>
	</div>

	<div className="test">
		<div className="test_title">
			<Fade left>
			<div className="black-back">
				efefef
				</div>
		</Fade>
		
		</div>
		<Fade right>
		<div className="black-right">
				efefef
			</div>
		</Fade>
		
	</div>
	</section>
  );
}