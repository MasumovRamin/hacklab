import "./Project.scss";
import Navbar1 from "../components/Navbar1";
import Footer from "../components/Footer";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import React, { useState, useEffect } from "react";
import $ from "jquery";

function Project() {
  return (
    <>
      <Navbar1 />
      <div id="up" className="Project">
        <div className="project1">
          <div className="title">
            <h1>Layihələr</h1>
          </div>
          <div className="active-pre-future">
            <div className="active">Active</div>
            <div className="pre">Pre</div>
            <div className="future">Gələcək</div>
          </div>
          <div className="clear-height"></div>
          <div className="empty-div">
            <div className="empty-div-one"></div>
            <div className="empty-div-two"></div>
            <div className="empty-div-three"></div>
          </div>
          <div className="end">
            <p>Mineraz</p>
            <span>Sahə; Blockchain</span>
          </div>
        </div>
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

export default connect(mapStateToProps)(Project);
