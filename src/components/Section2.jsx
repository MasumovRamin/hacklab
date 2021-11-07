import "./Section2.scss";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Marquee from "react-fast-marquee";

function Section2({ text1 = [] }) {
  // useEffect(() => {
  //   function myFunction(x) {
  //     if (x.matches) {
  //       const marquee = document.querySelector("marquee");
  //       marquee.setAttribute("scrollamount", 5);
  //     } else {
  //       const marquee = document.querySelector("marquee");
  //       marquee.setAttribute("scrollamount", 25);
  //     }
  //   }
  //   let x = window.matchMedia("(max-width: 500px)");
  //   myFunction(x);
  //   x.addListener(myFunction);
  // });

  const [s, setS] = useState();
  return (
    <div className="Section2">
      <div class="gif">
        <img
          className="gifimg"
          src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
          alt=""
        />
        <Marquee
          speed="120"
          direction="left"
          gradientColor
          style={{
            height: "clamp(60px, 10.10vw, 190px)",
            fontSize: "clamp(16px, 6.78vw, 130px)",
            padding: "0px"
          }}
        >
          HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB
          HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB
          HACKLAB HACKLAB HACKLAB HACKLAB HACKLAB
        </Marquee>
        <div className="divs1">
          {text1.map((tex) => {
            return (
              <div className="div1" id="#div1">
                <img src={tex.image} alt="" />
                <div className="title">{tex.title}</div>
                <div className="content">{tex.content}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.text1
  };
};

export default connect(mapStateToProps)(Section2);
