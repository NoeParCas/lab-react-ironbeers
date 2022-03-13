import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useStoreDispatch, useStoreState } from "../context";

function RandomBeer() {
  // const { theme } = useStoreState();
  // const dispatch = useStoreDispatch();
  // console.log("theme", theme);
  //1. crear el estado que maneja la información
  const [randomBeer, setRandomBeer] = useState(null);

  //2. useEffect que llamará al componentDidMount
  useEffect(() => {
    getRandomBeer();
    // dispatch({ theme: "dark" });
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
      <div className='beer-container'>
        <img src={randomBeer.image_url} alt={randomBeer.name} width='50px' />
        <div className='beer-info'>
          <div className='beer-namtag'>
            <h3>{randomBeer.name}</h3>
            <p>{randomBeer.tagline}</p>
          </div>

          <div className='beer-levbrew'>
            <p>{randomBeer.attenuation_level}</p>
            <span>{randomBeer.first_brewed}</span>
          </div>
        </div>

        <p>{randomBeer.description}</p>
        <div>
          <p className='beer-contributed'>{randomBeer.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default RandomBeer;
