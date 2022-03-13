import React from "react";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleBeer() {
  //1. crear el estado que maneja la información
  const [beerDetails, setBeerDetails] = useState(null);
  //2. fetching es el estado que revisa si el componente recibe la info
  const [fetching, setFetching] = useState(true);
  //3. permitir el acceso de los params del url
  const { id } = useParams();
  //4. useEffect que llamará al componentDidMount
  useEffect(() => {
    getSingleBeer();
  }, []);
  //5. funcion que llama la data de la Api
  const getSingleBeer = async () => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/${id}`
    );
    // console.log(response.data);
    setBeerDetails(response.data);
    setFetching(false); //se renderiza la informacion
  };

  if (fetching) {
    return <h2>...is Loading</h2>;
  }

  return (
    <div>
      <Header />
      <h2>Single Beer</h2>
      <div className="beer-container">
        <img src={beerDetails.image_url} alt={beerDetails.name} width='50px' />
        <div className="beer-info">

        <div className="beer-namtag"> 
        <h3>{beerDetails.name}</h3>
        <p>{beerDetails.tagline}</p>
        </div>
        <div className="beer-levbrew"> 
        <p>{beerDetails.attenuation_level}</p>
        <span>{beerDetails.first_brewed}</span>
        </div>

        </div>
        <p>{beerDetails.description}</p>
        <div>
        <p className="beer-contributed">{beerDetails.contributed_by}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleBeer;
