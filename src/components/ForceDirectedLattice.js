import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
// import rd3 from 'd3file';
import * as d3 from 'd3';
import notebook from "@d3/force-directed-lattice";
import nodes from './data/nodes.json';
// import D3v4min from './d3v4min';
import ScriptTag from 'react-script-tag';

// merge Chart and ForceDirectedLattice
// see Embed code at https://observablehq.com/@d3/force-directed-lattice?collection=@d3/d3-force

const chart = () => {
  // replay;
  const links = data.links.map(d => Object.create(d));
  const nodes = data.nodes.map(d => Object.create(d));

  const simulation = d3.forceSimulation(nodes)
      .force("charge", d3.forceManyBody().strength(-30))
      .force("link", d3.forceLink(links).strength(1).distance(20).iterations(10))
      .on("tick", ticked);

  invalidation.then(() => simulation.stop());

  const context = DOM.context2d(width, height);

  function ticked() {
    context.clearRect(0, 0, width, height);
    context.save();
    context.translate(width / 2, height / 2);
    context.beginPath();
    for (const d of links) {
      console.log(d.source.x);
      context.moveTo(d.source.x, d.source.y);
      context.lineTo(d.target.x, d.target.y);
    }
    context.strokeStyle = "#aaa";
    context.stroke();
    context.beginPath();
    for (const d of nodes) {
      context.moveTo(d.x + 3, d.y);
      context.arc(d.x, d.y, 3, 0, 2 * Math.PI);
    }
    context.fill();
    context.strokeStyle = "#fff";
    context.stroke();
    context.restore();
  }

  return d3.select(context.canvas)
      .call(drag(simulation)
      .subject(({x, y}) => simulation.find(x - width / 2, y - height / 2)))
    .node();
}

function ForceDirectedLattice() {
  const ref = useRef();

  useEffect(() => {
    // console.log(props);
    const Script = props => (
      <ScriptTag type="text/javascript" src="https://d3js.org/d3.v4.min.js" />
    )
    // console.log(nodes.links);
    // "data" returning undefined above, but nodes.links (mapped from "data") is...
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
