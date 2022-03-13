import React from "react";
import Header from "../components/Header";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function NewBeer() {
  //1. crear los estados que manejan la información
  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [brewersTips, setBrewersTips] = useState("");
  const [attenuationLevel, setAttenuationLevel] = useState(0);
  const [contributedBy, setContributedBy] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    //prevenir el comportamiento del form
    event.preventDefault();
    //elemento que está creando el usuario
    const newBeer = {
      name,
      tagline,
      description,
      firstBrewed,
      brewersTips,
      attenuationLevel,
      contributedBy,
    };
    await axios.post("https://ih-beers-api2.herokuapp.com/beers/new", newBeer);
    console.log(newBeer);
    //redireccionar el usuario a "/beers"
    navigate("/beers");
  };

  return (
    <div>
      <Header />
      <h2>New Beer</h2>
      <form onSubmit={handleSubmit}>
      <div className="form-input">
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          name='name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
        <div className="form-input">
        <label htmlFor='tagline'>Tagline</label>
        <input
          type='text'
          name='tagline'
          value={tagline}
          onChange={(e) => setTagline(e.target.value)}
        />
        </div>
        
        <div className="form-input-description">
        <label htmlFor='description'>Description</label>
        <textarea
        type='text'
          name='description'
          maxLength="100"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        >
        </textarea>
        {/* <input
          type='text'
          name='description'
          maxlength="100"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        </div>
        <div className="form-input">

        <label htmlFor='firstBrewed'>First Brewed</label>
        <input
          type='text'
          name='firstBrewed'
          value={firstBrewed}
          onChange={(e) => setFirstBrewed(e.target.value)}
        />
        </div>
        
        <div className="form-input"> 
        <label htmlFor='brewersTips'>Brewers Tips</label>
        <input
          type='text'
          name='brewersTips'
          value={brewersTips}
          onChange={(e) => setBrewersTips(e.target.value)}
        />
        </div>
        <div className="form-input">
        <label htmlFor='attenuationLevel'>Attenuation Level</label>
        <input
          type='number'
          name='attenuationLevel'
          value={attenuationLevel}
          onChange={(e) => setAttenuationLevel(e.target.value)}
        />
        </div>
        <div className="form-input">

        <label htmlFor='contributedBy'>Contributed by</label>
        <input
          type='text'
          name='contributedBy'
          value={contributedBy}
          onChange={(e) => setContributedBy(e.target.value)}
        />
        </div>
        
        <button>ADD NEW</button>
      </form>
    </div>
  );
}

export default NewBeer;
