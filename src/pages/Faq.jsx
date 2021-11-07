import "./Faq.scss";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Faq({ text2 = [] }) {
  useEffect(() => {
    for (let i = 1; i <= 13; i++) {
      $(`.t${[i]}`).click(function () {
        // alert(`.span${[i]}`)
        if ($(this).hasClass("activespan")) {
          $(`.t${[i]}`).removeClass("activespan");
          $(`.i${[i]}`).slideUp(500, "linear");
          $(`.span${[i]}`).html("+");
          $(`.l${[i]}`).css("display", "none");
          $(`.t${[i]}`).css("border-bottom", "1px solid black");
          $(`.t13`).css("border-bottom", "0px solid black");
        } else {
          $(".icerik").slideUp(500, "linear");
          $(".faqdivsin ").removeClass("activespan");
          $(".faqdivsin").css("border-bottom", "1px solid black");
          $(`.t${[i]}`).css("border-bottom", "0px solid black");
          $(`.i${[i]}`).slideDown(500, "linear");
          $(`.t${[i]}`).addClass("activespan");
          $(".icerikl").html("+");
          $(`.span${[i]}`).html("-");
          $(`.l${[i]}`).css("display", "block");
        }
      });
    }
  });
  return (
    <>
      <Navbar1 />
      <div id="up" className="Faq">
        <div class="gif">
          <img
            className="img1"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
          <img
            className="img2"
            src="https://i.ibb.co/tPBnk9P/qafqaz.gif"
            alt=""
          />
        </div>
        <div class="faqcontent">
          <div className="ta">FAQ</div>
          <div className="faqdivs">
            {text2.map((tex) => {
              return (
                <>
                  <div className={`faqdivsin  ${tex.t} `}>
                    <div className={`title`}> {tex.title} </div>
                    <div className={`icerikl ${tex.s} `}> + </div>
                  </div>
                  <div className={`icerik ${tex.i} `}>
                    {tex.content}
                    <div className={`line ${tex.l} `}></div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.text1,
    text2: state.text2
  };
};

export default connect(mapStateToProps)(Faq);
