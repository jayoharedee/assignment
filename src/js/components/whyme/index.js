import React from 'react'

import SpinnyIcon from '../spinnyicon'
import HeaderBlock from '../headerblock'
import './style.scss'

function WhyMe() {

  return (
    <div className="why-me">
      <h1>MY PHILOSOPHY</h1>
      <p>A few thoughts on my respective subject matter expertise</p>
      <article id="icon-row">
        <SpinnyIcon icon={'fa fa-laptop'} />
       <HeaderBlock />
      </article>
      <article id="icon-row">
        <SpinnyIcon icon={'fa fa-laptop'} />
        <HeaderBlock />
      </article>
      <article id="icon-row">
        <SpinnyIcon icon={'fa fa-laptop'} />
        <HeaderBlock />
      </article>
    </div>
  )
}

export default WhyMe
