/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react'
import './styles.scss'

function Placeholder() {
  const { pathname } = location
  const currentPage = pathname === '/' ? 'home' : pathname.substr(1)
  
  return (
    <div id="coming-soon">
      <p>{`soon this will be the ${currentPage} page`}</p>
    </div>
  )
}

export default Placeholder
