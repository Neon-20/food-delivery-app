import React from 'react';
import './featured.css';
import { Carousel } from 'react-bootstrap'

const Featured = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/pizza.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Pizza</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/burger.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Burger</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="images/sandwitch.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Sandwitch</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
};

export default Featured;
