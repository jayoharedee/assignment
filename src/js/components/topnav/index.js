import React from 'react'
//import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


import './style.scss'
import FontAwesome from '../fontawesome'

function TopNav() {
    // const [visible, setVisible] = useState(true);

  function showMe() {
      // console.log(visible)
      // setVisibile(false)
      // console.log(visible)
  }

  return (
    <nav>
      <ul className="menu">
        <li className="item">
          <NavLink to="/about">WHY ME?</NavLink>
        </li>
        <li className="item">
          <NavLink
            activeStyle={{
              fontWeight: 'bold',
              color: 'red'
            }}
            to="/projects"
          >
            PROJECTS
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/studys">
            CASE STUDY
          </NavLink>
        </li>
        <li className="item">
          <NavLink to="/portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="item">
          <NavLink to="/awards">AWARDS</NavLink>
        </li>
        <li className="item">
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
        <li className={`toggle`}>
          <NavLink to="/awards" onClick={showMe}>
            <FontAwesome iconNames="fas fa-bars" />
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default TopNav
