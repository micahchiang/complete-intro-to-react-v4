import React, { useState, useEffect } from "react";

const Carousel = ({ media }) => {
  const [photos, setPhotos] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let photos = [];
    if (media.length) {
      photos = media.map(({ large }) => large);
      setPhotos(photos);
    }
  }, [media]);

  let handleIndexClick = e => {
    setActive(+e.target.dataset.index);
  };

  return (
    <div className="carousel">
      <img src={photos[active]} alt="animal" />
      <div className="carousel-smaller">
        {photos.map((photo, index) => (
          // eslint-disable-next-line
          <img
            key={photo}
            onClick={handleIndexClick}
            onBlur={handleIndexClick}
            data-index={index}
            src={photo}
            className={index === active ? "active" : ""}
            alt="animal-thumbnail"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
