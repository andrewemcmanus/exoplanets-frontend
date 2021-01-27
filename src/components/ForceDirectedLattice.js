import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@d3/force-directed-lattice";

function ForceDirectedLattice() {
  const ref = useRef();

  useEffect(() => {
    (new Runtime).module(notebook, name => {
      if (name === "d3") return Inspector.into(ref.current.querySelector(".d3"))();
      return ["chart","drag"].includes(name);
    });
  }, []);

  return (
    <div className="ForceDirectedLattice" ref={ref}>
      <div className="d3"></div>
      <p>Credit: <a href="https://observablehq.com/@d3/force-directed-lattice">Force-Directed Lattice by D3</a></p>
    </div>
  );
}

export default ForceDirectedLattice;
