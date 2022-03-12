import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function RandomBeer() {
  //1. crear el estado que maneja la información
  const [randomBeer, setRandomBeer] = useState(null);

  //2. useEffect que llamará al componentDidMount
  useEffect(() => {
    getRandomBeer();
  }, []);

  //3. funcion que llama la data de la Api
  const getRandomBeer = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers/random"
    );
    // console.log(response.data)
    setRandomBeer(response.data);
  };

  if (!randomBeer) return <h2>...is Loading</h2>;

  return (
    <div>
      <Header />
      <h2>Random Beer</h2>
      <img src={randomBeer.image_url} alt={randomBeer.name} width='50px' />
      <h3>{randomBeer.name}</h3>
      <p>{randomBeer.tagline}</p>
      <p>{randomBeer.first_brewed}</p>
      <p>{randomBeer.attenuation_level}</p>
      <p>{randomBeer.description}</p>
      <p>{randomBeer.contributed_by}</p>
    </div>
  );
}

export default RandomBeer;
