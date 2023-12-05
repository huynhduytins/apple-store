import React from 'react'
import Logo from '../assets/images/logo.svg'
import Store from '../assets/images/store.svg'
import Search from '../assets/images/search.svg'

import { NAV_LINK } from '../constant'

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <ul className="list-styled">
          <li>
            <img src={Logo} alt="Apple" className="logo" />
          </li>
          {NAV_LINK.map((link) => (
            <li key={link.id}>
              <a className="link-styled">{link.title}</a>
            </li>
          ))}
          <li>
            <img src={Search} alt="Apple" />
          </li>
          <li>
            <img src={Store} alt="Apple" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Nav
