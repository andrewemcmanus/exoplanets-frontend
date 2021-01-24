import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/force-directed-graph-canvas";


function ForceDirectedGraphCanvas() {
  const ref = useRef();

  useEffect(() => {
    (new Runtime).module(notebook, name => {
      if (name === "chart") return Inspector.into(ref.current.querySelector(".chart"))();
      if (name === "data") return Inspector.into(ref.current.querySelector(".data"))();
      if (name === "height") return Inspector.into(ref.current.querySelector(".height"))();
      if (name === "color") return Inspector.into(ref.current.querySelector(".color"))();
      if (name === "drag") return Inspector.into(ref.current.querySelector(".drag"))();
      if (name === "d3") return Inspector.into(ref.current.querySelector(".d3"))();
    });
  }, []);

  return (
    <div className="ForceDirectedGraphCanvas" ref={ref}>
      <div className="chart"></div>
      <div className="data"></div>
      <div className="height"></div>
      <div className="color"></div>
      <div className="drag"></div>
      <div className="d3"></div>
      <p>Credit: <a href="https://observablehq.com/@d3/force-directed-graph-canvas">Force-Directed Graph (canvas) by D3</a></p>
    </div>
  );
}

export default ForceDirectedGraphCanvas;
