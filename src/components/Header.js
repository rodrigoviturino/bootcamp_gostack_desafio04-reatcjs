import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav container">
        <div className="header__nav-logo">
          {/* <h2>Facebook</h2> */}
          <img src="https://i.imgur.com/KDIDiSE.png"></img>
        </div>
        <ul className="header__nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
