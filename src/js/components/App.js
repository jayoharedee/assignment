import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import TopNav from './topnav'
// import Projects from './projects'
// import Services from './company-services'
// import About from './about'
import Placeholder from './placeholder'

const App = () => {
  return (
    <Router>
      <>
        <TopNav />
        <Route path="/" exact component={Placeholder} />
        <Route path="/projects" component={Placeholder} />
        <Route path="/about" component={Placeholder} />
        <Route path="/studys" component={Placeholder} />
        <Route path="/portfolio" component={Placeholder} />
        <Route path="/awards" component={Placeholder} />
        <Route path="/contact" component={Placeholder} />
      </>
    </Router>
  )
}

export default App
