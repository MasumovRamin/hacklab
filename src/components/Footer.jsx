import React, { Component } from "react";
import image from "../assets/loqow.png";
import "./Footer.scss";
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="main">
          <div className="child-one">
            <img src={image} />
            <p>Tel: +994 12 430 49 93</p>
            <p className="line-more">Mail: info@hacklab.az</p>
            <p className="line-less">
              Ünvan: Atatürk pros. 30A, Bakı, Azərbaycan
            </p>
            <span className="right">Bütün hüquqlar qorunur 2021</span>
          </div>
          <div className="child-two">
            <p className="facebook">
              <a>Facebook</a>
            </p>
            <p className="instagram">
              <a>Instagram</a>
            </p>
            <p className="linkedin">
              <a>Linkedin</a>
            </p>
          </div>
          <div className="child-three">
            <div className="two-two">
              <a className="home-hov">Ana səhifə</a>
              <a href="#up" className="up">
                Yuxarı dön
              </a>
            </div>
            {/* <p>
              <a className="layiheler">Layihələr </a>
            </p> */}
            <p>
              <a className="faq-hover">FAQ</a>
            </p>
            <div className="search-icon">
              <input type="text" placeholder="Axtar" />
              <div class="fa-search1">
                <img src="https://i.ibb.co/Yjc7Q3K/Whats-App-Image-2021-10-29-at-14-25-33-removebg-preview.png" />
              </div>
              {/* <i class="fas fa-search">f</i> */}
            </div>
            <div className="end">site by: ZOOM Agency</div>
          </div>
        </div>
      </div>
    );
  }
}
