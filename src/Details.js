import React, { useState, useEffect, useContext } from "react";
import pet from "@frontendmasters/pet";
import { navigate } from "@reach/router";
import Modal from "./Modal";
import Carousel from "./Carousel";
import ThemeContext from "./ThemeContext";

const Details = ({ id }) => {
  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [location, setLocation] = useState("");
  const [desc, setDesc] = useState("");
  const [media, setMedia] = useState("");
  const [breed, setBreed] = useState("");
  const [loading, setLoading] = useState(true);
  const [theme] = useContext(ThemeContext);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState("");

  useEffect(() => {
    pet.animal(id).then(({ animal }) => {
      setName(animal.name);
      setUrl(animal.url);
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

  const toggleModal = () => setShowModal(!showModal);

  const adopt = () => navigate(url);

  return (
    <div className="details">
      <Carousel media={media} />
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button onClick={toggleModal} style={{ backgroundColor: theme }}>
            Adopt {name}
          </button>
          <p>{desc}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={adopt}>Yes</button>
                  <button onClick={toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Details;
