import React, { useState, useEffect } from 'react';
import Axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SystemNames = () => {
  async function getSystems() {
    let url = `${REACT_APP_SERVER_URL}/systems`;
    // console.log(url);
    await Axios.get(url).then(res => {
      console.log(res);
    })
  }
  useEffect(()=>{
      getSystems()
  },[])
  
  let names = getSystems().map;
  return (
    <h6>{names}</h6>
  );

  // .then((res) => {
  // }).catch(err => {console.log(err)});
}

export default SystemNames;
