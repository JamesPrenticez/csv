import React from 'react'

class Nav extends React.Component {
  render(){


  return (
    <>
            
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/home">Home<span class="sr-only">(current)</span></Link>
            <Link className="nav-item nav-link active" to="/information">Information<span class="sr-only">(current)</span></Link>

            </div>
        </div>
    </nav>

    </>
    )
  }
}

export default Nav
