import React, {useState} from 'react';
import arrowLeft from '../assets/img/arrowLeft.png';
import arrowRight from '../assets/img/arrowRight.png';

const Slideshow = ({slides}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPreviousSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  const showControlsAndIndicators = slides.length > 1;

  return (
      <div className="slideshow-container">
        <div className="slides">
          {slides.map((slide, index) => (
              <img
                  key={index}
                  src={slide}
                  alt={`Image ${index}`}
                  className={currentSlide === index ? 'slides' : 'slides slide-hidden'}
              />
          ))}
        </div>

        {showControlsAndIndicators && (
            <div className="controls">
              <button className="leftArrow" onClick={goToPreviousSlide}>
                <img src={arrowLeft} alt="flèche de navigation à gauche"/>
              </button>

              <button className="rightArrow" onClick={goToNextSlide}>
                <img src={arrowRight} alt="flèche de navigation à droite"/>
              </button>
            </div>
        )}

        {showControlsAndIndicators && (
            <span className="indicators">
              {slides.map((slide, index) => (
                  <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={currentSlide === index ? 'indicator' : 'indicator-inactive'}
                  ></button>
              ))}
            </span>
        )}
      </div>
  );
};

export default Slideshow;
