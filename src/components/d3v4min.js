// import from external site?
import React from 'react';
import Axios from 'axios';
// import d3v4min from 'https://d3js.org/d3.v4.min.js';
// const D3v4min = 'https://d3js.org/d3.v4.min.js';
export default Axios.get('https://d3js.org/d3.v4.min.js').then(res => {
  console.log(res.data);
  const D3v4min = res;
})
