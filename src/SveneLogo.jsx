import React, { Component } from "react";
import Logo from "./assets/svene-logo.png";

export class SveneLogo extends Component {
  render() {
    return (
      <div className="flex flex-col border h-24 border-svene rounded-lg bg-svene">
        <div className="flex w-full h-full justify-center items-center">
            <img src={Logo}/>
        </div>
      </div>
    );
  }
}

export default SveneLogo;
