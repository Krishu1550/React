import React,{useState} from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
   
  const [btntext,setbtntext]=useState("Enable Dark Mode")
  const changetext=()=>{
    if(props.mode==="dark")
    {
      setbtntext("Enable Light Mode");
    }
    else{
      setbtntext("Enable Dark Mode");
    }
  }


  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='dark'?'dark':'success' }`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">{props.aboutText}</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className={`btn btn-outline-${props.mode==='dark'?'light':'dark' }`} type="submit">Search</button>
            </form>
            <div className={`form-check form-switch mx-5 text-${props.mode==='dark'?'light':'dark' }`}>
              <input className='form-check-input' type="checkbox" role="switch" onClick={props.toggle} id="flexSwitchCheckDefault" />
              <label className='form-check-label ' htmlFor='flexSwitchCheckDefault' onChange={changetext}>{btntext}</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
export default Navbar;
