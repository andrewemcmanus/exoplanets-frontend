import React, { useState, useEffect, useRef } from 'react';
import Axios from 'axios';
const REACT_APP_SERVER_URL = process.env.REACT_APP_SERVER_URL;

const SystemNames = () => {
  const dropdownRef = useRef(null);
  const [ systems, setSystems ] = useState([])
  const [ isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  async function getSystems() {
    let url = `${REACT_APP_SERVER_URL}/api/visuals`;
    // console.log(url);
    await Axios.get(url).then(res => {
      // console.log(res.data);
      setSystems(res.data);
    })
  }

  useEffect(() => {
    getSystems();
    const pageClickEvent = (e) => {
      if (dropdownRef.current !== null || !dropdownRef.current.contains(e.target)) {
        setIsActive(!isActive)
      }
    };
    if (isActive) {
      window.addEventListener('click', pageClickEvent)
    }
    return () => {
      window.removeEventListener('click', pageClickEvent)
    }
  }, [isActive])
//  turn <p> into link? <a> or <NavLink>?
  let names = systems.map((systemItem, idx) => {
    return(
        <div key={idx}>
          <p>{systemItem["system_name"]}</p>
        </div>
    )
  })

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>select a star system</span>
        </button>
          <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
            <ul>{names}</ul>
          </nav>
      </div>
  );

}

export default SystemNames;
