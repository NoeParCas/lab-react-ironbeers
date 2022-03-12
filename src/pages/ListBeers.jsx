import React from "react";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ListBeers() {
  //1. crear el estado que maneja la información
  // const [ beers, setBeers ] = useState(null)
  const [beerToRender, setBeerToRender] = useState(null);
  const [search, setSearch] = useState("");

  //2. useEffect que llamará al componentDidMount
  useEffect(() => {
    getBeers();
  }, []);

  //3. funcion que llama la data de la Api
  const getBeers = async () => {
    const response = await axios.get(
      "https://ih-beers-api2.herokuapp.com/beers"
    );
    // console.log(response.data)
    setBeerToRender(response.data);
  };

  // if (!beers){
  //      return <h2>...is Loading</h2>
  //   }

  if (!beerToRender) {
    return <h2>...is Loading</h2>;
  }

  //buscar cervezas
  const searchBeer = async (searchQuery) => {
    const response = await axios.get(
      `https://ih-beers-api2.herokuapp.com/beers/search?q=${searchQuery}`
    );

    // const filteredBeer = beers.filter((eachBeer)=>{
    //     return eachBeer.name.includes(searchQuery)
    // })
    // console.log(response.data, "Hola")
    setBeerToRender(response.data);
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
    searchBeer(event.target.value);
  };

  return (
    <div>
      <Header />
      <div className="searchBar">
        {/* <label htmlFor='search'>Search beer:</label> */}
        <input
        placeholder="Search beer"
          type='text'
          name='search'
          value={search}
          onChange={handleChange}
        />
      </div>

      <h2>List Beers</h2>
      {beerToRender.map((eachBeer) => {
        return (
            <div className="link-container">
          <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id} className="singleBeer-link">
            <div className="singleBeer-container">
            <div>  
              <img src={eachBeer.image_url} alt={eachBeer.name} width='50px' />
            </div>
            <div className="singleBeer-info"> 
              <h3>{eachBeer.name}</h3>
              <p>{eachBeer.tagline}</p>
              <p>{eachBeer.contributed_by}</p>
            </div>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
