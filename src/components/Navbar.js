// import React from 'react'
// // use shortcut rfc
// function Navbar() {
//     return (
//       <>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//     <div className="container-fluid">
//       <a className="navbar-brand" href="/">Text Utils</a>
//       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//           <li className="nav-item">
//             <a className="nav-link active" aria-current="page" href="/">Home</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="/">About</a>
//           </li> 
//         </ul>
//         <form className="d-flex" role="search">
//           <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button className="btn btn-outline-success" type="submit">Search</button>
//         </form>
//       </div>
//     </div>
//   </nav>
//       </>
//     );
//   }
  
//   export default Navbar;
  
//________________________________________________________________________________________________________________________________________________________________

// import React from 'react'
// import PropTypes from 'prop-types'

// export default function Navbar(props) {
//   return (
// <>
// <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">{props.title}</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <a className="nav-link active" aria-current="page" href="/">Home</a>
//         </li>
//         <li className="nav-item">
//           <a className="nav-link" href="/">About</a>
//         </li> 
//       </ul>
//       {/* <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//         <button className="btn btn-outline-primary" type="submit">Search</button>
//       </form> */}
//       <div className={`form-check form-switch text-${textColor(props.mode)} mx-4`}>
//         <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
//         <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
//       </div>
//     </div>
//   </div>
// </nav>
//       </>
//   )
// }

// Navbar.propTypes = {title: PropTypes.string} // We are telling that title is a string
// // if the prop sent by app is wrong eg it is a number, then an error will show, saying wrong prop   

  
import React from 'react'
import PropTypes from 'prop-types'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  Router
} from "react-router-dom";

export default function Navbar(props) {

  const textColor = (m)=>{
    if(m === 'light' || m === 'redLight')
      return 'dark'
    else if(m === 'dark' || m === 'redDark')
      return 'light'
  }

  return (
<>
<nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid">
    <a className={`navbar-brand text-${textColor(props.mode)}`} href="/">{props.title}</a> {/* This reloads the page*/}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${textColor(props.mode)}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link text-${textColor(props.mode)}`} to="./about">About</Link>
        </li> 
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form> */}
      <div className={`text-${textColor(props.mode)} mx-4`}>
        <a href="#" className={`btn text-${textColor(props.mode)}`} role="button" onClick={props.toggleRedBtn} data-bs-toggle="button">Activate Red Mode</a>
      </div>  
      <div className={`form-check form-switch text-${textColor(props.mode)} mx-4`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </div>
</nav>
      </>
  )
}

Navbar.propTypes = {title: PropTypes.string} // We are telling that title is a string
// if the prop sent by app is wrong eg it is a number, then an error will show, saying wrong prop   