import React from 'react'

import FontAwesome from '../fontawesome'
import './style.scss'

function SpinnyIcon({ icon }) {
    
  return (
    <div className="spinny-icon">
      <FontAwesome iconNames={icon} />
    </div>
  )
}

export default SpinnyIcon
