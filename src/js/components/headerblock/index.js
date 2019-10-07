import React from 'react'

import './style.scss'

function HeaderBlock({ title, content }) {
    
  return (
    <div className="header-block">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  )
}

export default HeaderBlock
