import React from 'react'
import Header from '../components/Header'
import { useEffect, useState } from "react"
import axios from "axios"
import {Link} from "react-router-dom"

function ListBeers() {
    //1. crear el estado que maneja la información
    const [ beers, setBeers ] = useState(null)

    //2. useEffect que llamará al componentDidMount
    useEffect(()=> {
        getBeers()
    },[])

    //3. funcion que llama la data de la Api
    const getBeers = async() => {
        const response = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
        console.log(response.data)
        setBeers(response.data)
    }

    if (!beers){
        return <h2>...is Loading</h2>
    }


  return (
      
    <div>
    <Header/>
        <h2>List Beers</h2>
        {beers.map((eachBeer) =>{
            return(
                <Link to={`/beers/${eachBeer._id}`} key={eachBeer._id}>
                <div >
                <img src={eachBeer.image_url} alt={eachBeer.name} width="50px"/>
                <h3>{eachBeer.name}</h3>
                <p>{eachBeer.tagline}</p>
                <p>{eachBeer.contributed_by}</p>
                </div>
                </Link>
            )
        })}
    </div>
  )
}

export default ListBeers