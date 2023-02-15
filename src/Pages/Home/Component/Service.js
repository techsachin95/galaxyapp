import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../assetes/satelight.jpg'
import img2 from '../../../assetes/isro13.jpeg'
import img3 from '../../../assetes/isro12.avif'
import img4 from '../../../assetes/isro14.jpg'
import img5 from '../../../assetes/isro5.jpg'
import img6 from '../../../assetes/isro11.jpg'
import img7 from '../../../assetes/isro10.jpg'
import img8 from '../../../assetes/isro6.jpg'
import img9 from '../../../assetes/isro9.jpg'
const Service = () => {
    let images=[img1,img2,img3,img4,img5,img6,img7,img8,img9];
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1440,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll:1
                // initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 500,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
          ]
    };
    return (
        <div className='service'>
            <h1>Services</h1>
            <div>
                <Slider {...settings}>
                    {
                        images.map((image)=>{
                            return(
                            <div>
                            <img src={image} alt="img2"/>
                            </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Service