import React from 'react'
import { Link } from 'react-router-dom'
export default class Nav extends React.Component {
  render(){


  return (
    <>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/files">Files<span className="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link active" to="/information">Information<span className="sr-only">(current)</span></Link>
            </div>
        </div>
    </nav>

    </>
    )
  }
}


