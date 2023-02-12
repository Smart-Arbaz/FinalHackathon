import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './carouselstyle.css';
import img1 from './carousel_img1.jpeg';
import img2 from './carousel_img2.jpeg';
import img3 from './carousel_img3.jpeg';
import img4 from './carousel_img4.jpeg';


    
const HeaderCarousel = () => {
  return (
    <div >
           <Carousel >
              <Carousel.Item>
                <div className="carostyle">
                    <img src={img1} alt='' />
                </div>
              </Carousel.Item>

              <Carousel.Item>
                <div className="carostyle">
                    <img src={img2} alt='' />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carostyle">
                    <img src={img3} alt='' />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="carostyle">
                    <img src={img4} alt='' />
                </div>
              </Carousel.Item>                
            </Carousel>
        </div>

  )
}

export default HeaderCarousel
