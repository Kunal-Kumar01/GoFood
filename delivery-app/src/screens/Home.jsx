import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'
import burger from '../images/burger.jpg';
import pizza from '../images/pizza.jpg';
import pasta from '../images/pasta.jpg';
import { useState, useEffect } from 'react'

export default function Home() {
  const carouselStyle = {
    height: "500px",  // Adjust height as needed
  };

  const imageStyle = {
    filter: "brightness(30%)",
    objectFit: "cover"
  };

  const [foodItems, setFoodItems] = useState([]);
  const [foodCategories, setFoodCategories] = useState([]);
  const [search, setSearch] = useState('');

  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/foodItems',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    response = await response.json();

    //console.log(response[0], response[1]);

    setFoodItems(response[0]);
    setFoodCategories(response[1]);
  }

  useEffect(() => {
    loadData();
  }, []);



  return (
    <div>
      <div><Navbar /></div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ objectFit: "cover !important" }}>
        <div className="carousel-inner" id='carousel'>
          <div className='carousel-caption' style={{ zIndex: "10" }}>
            <div className="d-flex justify-content-center">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e) => setSearch(e.target.value)} />
              {/* <button className="btn btn-outline-success text-white bg-success" type="submit">Search</button> */}
            </div>
          </div>
          <div className="carousel-item active" style={carouselStyle}>
            <img src={burger} className="d-block w-100 h-100" alt="Slide of burger" style={imageStyle} />
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
      <div className='constainer'>

        <div className="container">
          {
            foodCategories.length > 0 ?
              foodCategories.map((data) => {
                return (
                  <div className='row mb-3'>
                    <div key={data._id} className='fs-3 m-3'>{data.CategoryName}</div>
                    <hr />
                    {
                      foodItems.length > 0 ?
                        foodItems.filter((item) => (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase())))
                          .map((filterItems) => {
                            return (
                              <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                <Card
                                  _id={filterItems._id}
                                  options={filterItems.options}
                                  name={filterItems.name}
                                  imgsrc={filterItems.img} // Assuming the image property is named 'image'
                                />

                              </div>
                            );
                          })
                        : <div>No Such Data Found</div>
                    }

                  </div>
                );
              })
              : <div>Loading...</div>
          }


        </div>



      </div>
      <div><Footer /></div>
    </div>
  )
}
