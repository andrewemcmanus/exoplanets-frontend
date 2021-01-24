import React, { useState, useEffect, useRef } from 'react';

const DropDownMenu = () => {
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const onClick = () => setIsActive(!isActive);

  useEffect(() => {
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

  return (
    <div className="menu-container">
      <button onClick={onClick} className="menu-trigger">
        <span>Star System</span>
      </button>
      <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
          </ul>
        </nav>
    </div>
  )
}

export default DropDownMenu;
