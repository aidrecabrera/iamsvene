import React, { Component } from "react";
import "./index.css"
import SveneIntroduction from "./SveneIntroduction.jsx";
import SveneWho from "./SveneWho.jsx";
import SveneTouched from "./SveneTouched.jsx";
import SveneWhen from "./SveneWhen.jsx"
export class Content extends Component {
  render() {
    return (
      <div className="w-11/12">
        <SveneIntroduction />
        <SveneWho/>
        <SveneTouched />
        <SveneWhen />
      </div>
    );
  }
}

export default Content;
