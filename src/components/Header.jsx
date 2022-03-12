import React from 'react'
import { FormGroup } from 'react-bootstrap';
import { Link } from "react-router-dom";
import beerHome from "./../assets/beerHome.png";


function Header() {
  return (
    <div className="header">
         <Link to={"/"} ><img src={beerHome} alt="beerHome" width="50px"/></Link>
    </div>
  )
}

export default Header