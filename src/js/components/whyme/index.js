import React from 'react'

import SpinnyIcon from '../spinnyicon'
import './style.scss'

function WhyMe() {

  return (
    <div className="why-me">
      <h1>MY PHILOSOPHY</h1>
      <p>A few thoughts on my respective subject matter expertise</p>
      <div id="icon-row">
        <SpinnyIcon icon={'fa fa-laptop'} />
        <SpinnyIcon icon={'fa fa-laptop'} />
        <SpinnyIcon icon={'fa fa-laptop'} />
      </div>
    </div>
  )
}

export default WhyMe
