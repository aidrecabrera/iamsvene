import React, { Component } from "react";

export class SveneWho extends Component {
  render() {
    return (
      <div className=" sveneborder p-40">
        <div>
          <h1 className="font-semibold font-inter tracking-widest">
            Vaguely, Who am I?
          </h1>
          <p className=" font-inter font-bold text-8xl leading-tight tracking-tighter">
            I’m an <span className="text-red-700">autodidact</span> with a<br></br> passion in fields such as technology,
            research, writing<br></br>and computer science.
          </p>
        </div>
      </div>
    );
  }
}

export default SveneWho;
