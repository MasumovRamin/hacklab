import "./styles.scss";
import { useEffect } from "react";
import { connect } from "react-redux";
import $ from "jquery";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section3b from "./components/Section3b";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Faq from "./pages/Faq";
import Project from "./pages/Project";

function App({ text1 = [], text2 }) {
  useEffect(() => {
    $(".div1").bind("mousemove", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid white");
      });
    });
    $(".div1").bind("mouseleave", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid black");
      });
    });
    $(".div1").bind("mouseenter", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid white");
      });
    });

    $(".footer").bind("mousemove", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid white");
      });
    });
    $(".footer").bind("mouseleave", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid black");
      });
    });
    $(".footer").bind("mouseenter", function (e) {
      $("html").bind("mousemove", function (e) {
        $(".cursor").css("border", "1px solid white");
      });
    });

    $("html").bind("mousemove", function (e) {
      $(".cursor").css({
        left: e.pageX,
        top: e.pageY
      });
      // $(".cursor").css("display", "block");
      $("body").css("overflow-x", "hidden");
    });

    $("html").on("mouseleave", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("mouseenter", function (e) {
      $(".cursor").css("display", "block");
    });

    $("html").on("touchcancel", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("touchmove", function (e) {
      $(".cursor").css("display", "none");
    });

    $("html").on("touchstart", function (e) {
      $(".cursor").css("display", "none");
    });
  });

  return (
    <BrowserRouter>
      <>
        <Switch>
          <Route exact path="/">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section3b />
            <Section4 />
            <Footer />
          </Route>
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/project" component={Project} />
        </Switch>

        <div class="cursor"></div>
        {/* {text1.map((tex) => {
        // return <h2>{tex.text}</h2>;
      })} */}
      </>
    </BrowserRouter>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    text1: state.text1,
    text2: state.text2
  };
};

export default connect(mapStateToProps)(App);
