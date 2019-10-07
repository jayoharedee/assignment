import React from 'react'

import SpinnyIcon from '../spinnyicon'
import HeaderBlock from '../headerblock'

import './style.scss'
import {
  uiContent, 
  fedContent, 
  vrContent 
} from './content'

function WhyMe() {

  return (
    <div className="why-me">
      <h1>MY PHILOSOPHY</h1>
      <p>A few thoughts on my respective subject matter expertise</p>
      {
        // to be composed a little more elegantly
      }
      <aside id="philosophy-row">
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock title="UI/UX" content={uiContent} />
        </article>
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock title="BACK END DEV" content={fedContent} />
        </article>
        <article className="philosophy">
          <SpinnyIcon icon={'fa fa-laptop'} />
          <HeaderBlock title="VR/AR/MR" content={vrContent} />
        </article>
      </aside>
    </div>
  )
}

export default WhyMe
