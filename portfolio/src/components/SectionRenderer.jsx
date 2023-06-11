import React from "react";
import Section from "./Section";
import { Slide, Fade } from "react-reveal";
import hero from "../assets/hero-image.png";

function SectionRenderer(props) {
  return (
    <>
      {props.index === 0 && (
        <Slide left>
          <Section
            index={props.index}
            setIndex={props.setIndex}
            bgColor={"#282c34"}
          >
            <div className="home">
                <div>hello</div>
                <div className="hero-img">
                <img src={hero} alt="hero-img" width={'30%'} height={'80%'} />
                </div>
            </div>
          </Section>
        </Slide>
      )}

      {props.index === 1 && (
        <Slide left>
          <Section
            index={props.index}
            setIndex={props.setIndex}
            bgColor={"#3E5641"}
          />
        </Slide>
      )}

      {props.index === 2 && (
        <Slide left>
        <Section
          index={props.index}
          setIndex={props.setIndex}
          bgColor={"#282B28"}
        />
        </Slide>
      )}

      {props.index === 3 && (
        <Slide left>
        <Section
          index={props.index}
          setIndex={props.setIndex}
          bgColor={"#1A5E63"}
        />
        </Slide>
      )}

      {props.index === 4 && (
        <Slide left>
        <Section
          index={props.index}
          setIndex={props.setIndex}
          bgColor={"#353535"}
        />
        </Slide>
      )}
    </>
  );
}

export default SectionRenderer;
