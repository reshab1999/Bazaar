import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import corona from '../assets/covid.jpg';
import grocery from '../assets/grocery.jpg';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel autoPlay showStatus={false} showThumbs={false}>
                <div>
                    <img src={corona} />
                    <h3 style={{ color: "green" }}>Your Grocery is in safe hands</h3>
                    <h6 style={{ color: "yellow" }}>Hygeinically packed, Safely delivered</h6>
                </div>
                <div>
                    <img src={grocery} />
                </div>
            </Carousel>
        </div>
    );
}
