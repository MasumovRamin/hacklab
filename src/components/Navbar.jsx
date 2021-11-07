import "./Navbar.scss";
import loqo from "../assets/loqob.png";
import { NavLink, withRouter } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Navbar() {
  function myFunction(x) {
    if (!x.matches) {
      document.querySelector("rect").style.transition =
        "stroke-dasharray 1s cubic-bezier(0.19, 1, 0.22, 1)";
      if (window.pageYOffset > 120) {
        document.querySelector(".last-li").style.position = "fixed";
        document.querySelector(".last-li").style.top = "20px";
        document.querySelector(".last-li").style.right = "40px";
        document.querySelector(".last-li").style.width = "40px";
        document.querySelector(".last-li").style.height = "78px";
        document.querySelector(".btn-1").style.width = "60px";
        document.querySelector(".btn-1").style.height = "178px";
        document.querySelector(".span-text").style.backgroundColor = "#E0E0E0";
        document.querySelector(".span-text").style.backgroundImage =
          " url('https://i.ibb.co/2dB4Rkj/bg1.gif')";
        document.querySelector(".span-text").style.backgroundSize = "2500%";
        document.querySelector(".span-text").style.backgroundBlendMode =
          "multiply";
        document.querySelector(".span-text").style.marginTop = "2px";
        document.querySelector("svg").style.width = "60px";
        document.querySelector("svg").style.height = "198px";
        document.querySelector("rect").style.width = "60px";
        document.querySelector("rect").style.height = "178px";
        document.querySelector(".span-text").style.width = "56px";
        document.querySelector(".span-text").style.height = "176px";
        document.querySelector(".span-text").innerHTML = "ÜZVLÜK";
        document.querySelector(".span-text").style.writingMode = "vertical-rl";
        document.querySelector(".span-text").style.textOrientation = "upright";
        document.querySelector(".span-text").style.display = "flex";

        document
          .querySelector(".last-li")
          .addEventListener("mouseover", deneme);
        function deneme() {
          document.querySelector("rect").style.strokeDasharray = "10, 300";
        }
        document
          .querySelector(".last-li")
          .addEventListener("mouseout", deneme2);
        function deneme2() {
          document.querySelector("rect").style.strokeDasharray = "622, 0";
        }
        document.querySelector(".btn-1").style.padding = "0px 0px 0px 0px";
        document.querySelector(".btn-1").style.display = "flex";
      } else {
        document.querySelector(".span-text").style.width = "initial";
        document.querySelector(".span-text").style.height = "initial";
        document.querySelector(".span-text").style.display = "initial";
        document.querySelector(".span-text").style.backgroundColor =
          "transparent";
        document.querySelector(".span-text").style.backgroundImage = "initial";
        document.querySelector(".span-text").style.backgroundSize = "initial";
        document.querySelector(".span-text").style.backgroundBlendMode =
          "initial";
        document.querySelector(".span-text").style.writingMode = "initial";
        document.querySelector(".span-text").style.textOrientation = "initial";
        document.querySelector(".span-text").innerHTML = "ÜZV OLMAQ";
        document.querySelector(".span-text").style.border = "none";
        document.querySelector(".btn-1").style.display = "initial";
        document.querySelector(".last-li").style.position = "initial";
        document.querySelector(".last-li").style.width = "200px";
        document.querySelector(".last-li").style.height = "50px";
        document.querySelector(".btn-1").style.padding = "12px 0px 0px 44px";
        document.querySelector(".btn-1").style.width = "230px";
        document.querySelector(".btn-1").style.height = "50px";
        document.querySelector("svg").style.width = "230px";
        document.querySelector("svg").style.height = "50px";
        document.querySelector("rect").style.width = "230px";
        document.querySelector("rect").style.height = "50px";
        document
          .querySelector(".last-li")
          .addEventListener("mouseover", deneme3);
        function deneme3() {
          document.querySelector("rect").style.strokeDasharray = "15, 410";
        }
        document
          .querySelector(".last-li")
          .addEventListener("mouseout", deneme4);
        function deneme4() {
          document.querySelector("rect").style.strokeDasharray = "622, 0";
        }
      }
    } else {
      window.removeEventListener("scroll", myFunction);
      document.querySelector("svg").style.width = "230px";
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", myFunction);
    $(function () {
      $(".fa-bars").click(function () {
        $(".navmenu").css({ visibility: "visible", right: "0%" });
      });
    });
    $(".fa-times").click(function () {
      $(".navmenu").css({ visibility: "hidden", right: "-60%" });
    });

    var x = window.matchMedia("(max-width: 950px)");
    myFunction(x);
    x.addListener(myFunction);
  });
  return (
    <div id="up" className="navbar">
      <NavLink to="/">
        <img src={loqo} alt="" />
      </NavLink>
      <ul className="navmenu">
        <li>
          <i className="fa fa-times"> </i>
        </li>
        <li>
          <NavLink className="second-li" to="/faq">
            <div class="btn btn-2">FAQ</div>
          </NavLink>
        </li>
        <li className="last-li">
          <a href="/" class="btn btn-1">
            <svg>
              <rect x="0" y="0" fill="" width="100%" height="100%" />
            </svg>
            <span className="span-text">ÜZV OLMAQ</span>
          </a>
        </li>
      </ul>
      <div class="burger">
        <i class="fas fa-bars"></i>
      </div>
    </div>
  );
}
export default withRouter(Navbar);
