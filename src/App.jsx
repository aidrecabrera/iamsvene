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
            <Content className="" />
            <div className="flex flex-col grow gap-3">
              <Sidebar />
              <SveneLogo />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
