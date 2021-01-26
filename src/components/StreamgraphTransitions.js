import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/streamgraph-transitions";

function StreamgraphTransitions() {
  const ref = useRef();
  useEffect(() => {
    console.log(notebook);
    (new Runtime).module(notebook, Inspector.into(ref.current.querySelector(".cells")));
  }, []);

  return (
    <div className="StreamgraphTransitions" ref={ref}>
      <div className="cells"></div>
      <p>Credit: <a href="https://observablehq.com/@d3/streamgraph-transitions">Streamgraph Transitions by D3</a></p>
    </div>
  );
}

export default StreamgraphTransitions;
