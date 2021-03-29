import React from 'react'
import { connect } from 'react-redux'
import { Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from 'history'
import { wrapHistory } from 'oaf-react-router'

import Nav from './Nav'
import Home from './Home'
import Files from './Files'
import Information from './Information'
import Error404 from './Error404'

class App extends React.Component {
  render(){
    const history = createBrowserHistory()
    wrapHistory(history)
  return (

    <Files />
    // <Router history={history}>
    //       <Route path='/' render={props => <Nav {...props} />} />
    //       <div id='wrapper'>
    //       <Switch>
    //             <Route exact path='/' render={props => <Home {...props} />} />
    //             <Route exact path='/files' render={props => <Files {...props} />} />
    //             <Route exact path='/information' render={props => <Information {...props} />} />
    //             <Route exact path='*' component={Error404} />
    //       </Switch>
    //       </div>
    // </Router>

    )
  }
}

export default connect ()(App)
