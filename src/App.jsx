/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import Content from "./Content.jsx";
import Sidebar from "./Sidebar.jsx";
import SveneLogo from "./SveneLogo.jsx";

export class App extends Component {
  render() {
    return (
      <>
        <div className="h-screen">
          <div className="flex gap-3 p-5 h-full">
            <Content />
            <div className="flex flex-col gap-3 w-1/12">
              <Sidebar className="" />
              <SveneLogo />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
