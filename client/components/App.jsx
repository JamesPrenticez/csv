import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import Nav from './Nav'
import Home from './Home'
import Upload from './Upload'
import Information from './Information'

class App extends React.Component {
  render(){
    const history = createBrowserHistory()
    wrapHistory(history)
  return (
    <Router history={history}>
          <Route path='/' render={props => <Nav {...props} />} />
          <div id='wrapper'>
          <Switch>
                <Route exact path='/' render={props => <Home {...props} />} />
                <Route exact path='/upload' render={props => <Upload {...props} />} />
                <Route exact path='/information' render={props => <Information {...props} />} />
          </Switch>
          </div>
    </Router>

    )
  }
}

export default connect ()(App)
