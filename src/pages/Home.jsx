import React from "react";
import { Link } from "react-router-dom";
import beers from "./../assets/beers.png";
import random from "./../assets/random-beer.png";
import newBeer from "./../assets/new-beer.png";

function Home() {
  return (
    <div className="home-container">
      <h2>🍺 Lab React IronBeers 🍺</h2>

      <div className="home-link">
        <img src={beers} alt='All-Beers' />
        <Link to={"/beers"}>
          <p>All Beers 🍻</p>
        </Link>
      </div>

      <div className="home-link">
        <img src={random} alt='Random-Beer' />
        <Link to={"/random-beer"}>
          <p>Random Beers 🍺❓</p>
        </Link>
      </div>

      <div className="home-link">
        <img src={newBeer} alt='Random-Beer' />
        <Link to={"/new-beer"}>
          <p>New Beers 🤩</p>
        </Link>
      </div>
    </div>
  );
}

export default Home;
