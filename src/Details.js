import React, { useState, useEffect } from "react";
import pet from "@frontendmasters/pet";

const Details = ({ id }) => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(id);
    pet.animal(id).then(({ animal }) => {
      console.log(animal);
      setName(animal.name);
      setAnimal(animal.type);
      setLocation(
        `${animal.contact.address.city}, ${animal.contact.address.state}`
      );
      setDesc(animal.description);
      setMedia(animal.photos);
      setBreed(animal.breeds.primary);
      setLoading(false);
    }, console.error);
  }, [id]);

  return (
    <div className="details">
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{desc}</p>
        </div>
      )}
    </div>
  );
};

export default Details;
