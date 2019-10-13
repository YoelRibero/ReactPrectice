import React from 'react';
import PropTypes from 'prop-types';

import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';

const CarouselItem = ({ cover, title, year, contentRating, duration, source }) => (
    <div className="carousel-item">
        <img className="carousel-item__img" src={cover} alt={title}  />
        <div className="carousel-item__details">
          <div>
              <a href={source} target="_blank">
                <img className="carousel-item__details--img" src={playIcon} alt="Play Icon" /> 
              </a>
              <div className="addItem">
                <img className="carousel-item__details--img" src={plusIcon} alt="Plus Icon" title="Agregar a Favoritos" /> 
              </div>
          </div>
          <p className="carousel-item__details--title">{title}</p>
          <p className="carousel-item__details--subtitle">
            {`${year} ${contentRating} ${duration}`}
          </p>
        </div>
    </div>
);

CarouselItem.propTypes = {
    cover: PropTypes.string,
    title: PropTypes.string,
    year: PropTypes.number,
    contentRating: PropTypes.string,
    duration: PropTypes.number,
}

export default CarouselItem;