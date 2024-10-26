import React from 'react';
import burger from '../images/burger.jpg';
import pizza from '../images/pizza.jpg';
import pasta from '../images/pasta.jpg';

export default function Carousel() {
    const carouselStyle = {
        height: "500px",  // Adjust height as needed
    };

    const imageStyle = {
        filter: "brightness(30%)",
        objectFit: "cover"
    };

    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{objectFit:"cover !important"}}>
                <div className="carousel-inner" id='carousel'>
                    <div className='carousel-caption' style={{ zIndex: "10" }}>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="carousel-item active" style={carouselStyle}>
                        <img src={burger} className="d-block w-100 h-100" alt="Slide of burger" style={imageStyle}/>
                    </div>
                    <div className="carousel-item" style={carouselStyle}>
                        <img src={pizza} className="d-block w-100 h-100" alt="Slide of pizza" style={imageStyle} />
                    </div>
                    <div className="carousel-item" style={carouselStyle}>
                        <img src={pasta} className="d-block w-100 h-100" alt="Slide of pasta" style={imageStyle} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}
