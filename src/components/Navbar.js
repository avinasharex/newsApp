import React, { Component } from 'react'
// import {
//   Link,
// } from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/">NewsMonkey</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
               
        
                <li className="nav-item"><a href="/" className="nav-link text-white">Home</a></li>
                <li className="nav-item"><a href="/business" className="nav-link text-white"> Business</a></li>
                <li className="nav-item"><a href="/entertainment" className="nav-link text-white"> Entertainment</a></li>
                <li className="nav-item"><a href="/health" className="nav-link text-white"> Health</a></li>
                <li className="nav-item"><a href="/science" className="nav-link text-white"> Science</a></li>
                <li className="nav-item"><a href="/sports" className="nav-link text-white"> Sports</a></li>
                <li className="nav-item"><a href="/technology" className="nav-link text-white"> Technology</a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar
