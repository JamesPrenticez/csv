import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import Nav from './Nav'
import Upload from './Upload'
import Information from './Information'

class App extends React.Component {
  render(){
    const history = createBrowserHistory()
    wrapHistory(history)
  return (
    <Router history={history}>
          <Route path='/' component={Nav}/>
          <div id='wrapper'>
          <Switch>
                <Route exact path="/" component={Upload} />
                <Route exact path='/Information' component={Information} />
          </Switch>
          </div>
    </Router>

    )
  }
}

export default connect ()(App)
