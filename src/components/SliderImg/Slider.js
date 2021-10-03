import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img2 from '../SliderImg/img-2.png';
import img3 from '../SliderImg/img-3.jpg';
function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block rounded-2 img-fluid w-100 h-50"
            src={img2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block rounded-2 img-fluid w-100 h-50"
            src={img3}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
}

export default ControlledCarousel;