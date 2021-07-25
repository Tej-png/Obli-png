import React from "react";
import { Carousel } from "react-bootstrap";

import './Carousel.css'
 
function Images(){
    return <Carousel fade>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://i.pinimg.com/originals/e1/d2/71/e1d27144d29bc6a58683fe34167ecb2d.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://www.ft.com/__origami/service/image/v2/images/raw/http://prod-upp-image-read.ft.com/e9a0d7ee-a1be-11e8-85da-eeb7a9ce36e4?source=next&fit=scale-down&quality=highest&width=1067"
        alt="Second slide"
      />
  
      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=Third slide&bg=20232a"
        alt="Third slide"
      />
  
      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
}

export default Images;