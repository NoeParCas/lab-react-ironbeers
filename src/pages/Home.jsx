import React from 'react'
import { Link } from "react-router-dom";
import beers from "./../assets/beers.png"
import random from "./../assets/random-beer.png"
import newBeer from "./../assets/new-beer.png"

function Home() {
  return (
    <div>
        <h2>Lab React IronBeers</h2>
        
        <div>
            <img src={beers} alt="All-Beers" />
            <Link to={"/beers"} ><h2>All Beers</h2></Link>
        </div>

        <div>
            <img src={random} alt="Random-Beer" />
            <Link to={"/random-beer"}><h2>Random Beers</h2></Link>
        </div>

        <div>
            <img src={newBeer} alt="Random-Beer" />
            <Link to={"/new-beer"} ><h2>New Beers</h2></Link>
        </div>
    </div>
  )
}

export default Home