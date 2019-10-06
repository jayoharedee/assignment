import React from 'react'

import SpinnyIcon from '../spinnyicon'
import HeaderBlock from '../headerblock'

import './style.scss'

function WhyMe() {

  return (
    <div className="why-me">
      <h1>MY PHILOSOPHY</h1>
      <p>A few thoughts on my respective subject matter expertise</p>
      <aside id="philosophy-row">
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock />
        </article>
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock />
        </article>
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock />
        </article>
      </aside>
    </div>
  )
}

export default WhyMe
