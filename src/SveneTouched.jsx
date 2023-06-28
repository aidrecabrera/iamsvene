import React, { Component } from "react";

export class SveneTouched extends Component {
  render() {
    return (
      <div className="sveneborder pt-20 pb-20 mb-5">
        <div>
          <h1 className="text-wrapper font-semibold font-inter tracking-widest pl-40 mb-5">WHAT I HAVE TOUCHED OR INVOLVED.
          </h1>
        </div>
        <div className="flex flex-col tracking-wider">
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              DEVELOPMENT
            </h1>
            <div className="justify-end w-5/12">
              <p className="flex justify-end items-center h-36 text-right">
                HTML & CSS, JavaScript, Tailwind, ReactJS, NextJS, ViteJS,
                VueJS, NodeJS, Firebase, Flutter, Java, Python, C, C++, Visual
                Basic, Scratch
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              WRITING
            </h1>
            <div className="flex justify-center items-center h-36">
              <p className="flex justify-end items-center h-36 text-right">Academic, Research, Technical, and I am yet to explore</p>
            </div>
          </div>
          <div className="flex flex-row justify-between border border-svene pl-40 pr-40 hover:bg-svene hover:text-black transition-colors duration-500">
            <h1 className="font-bold text-8xl leading-tight tracking-tighter">
              LANGUAGE
            </h1>
            <p className="flex justify-end items-center h-36 text-right">Bisaya, English, Tagalog, and Programming</p>
          </div>
        </div>
      </div>
    );
  }
}

export default SveneTouched;
