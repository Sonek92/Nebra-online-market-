import React from "react";
import { Button, Carousel } from "react-bootstrap";
import './Style.css'
const Home = () => {
  
  return (
    <div className="slider col-md-12">
<Carousel  >
      <Carousel.Item  >
        <img
          src="./imgs/cover3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Discover More Products Of New Books </h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./imgs/slide3.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>More Winter Products</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="./imgs/slid2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Alexa The New Assistant Of Every One</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={{marginTop: "5px"}}>
      <ul style={{display:"inline-flex", listStyle:"none" }}>
        <li>
        <a href="##"><img src="./imgs/item8.jpg" alt="" style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item9.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item11.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item10.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item7.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
      </ul>
    </div>
      <div className="adsGame">
        <div className="gameinfo">
         <h1>DISCOVER NEW GAMES</h1>
         <p>Play All Game For First Time Free</p>
         <Button variant="info">Try Now</Button>
        </div>      
       </div>
       <div style={{marginTop: "5px"}}>
      <ul style={{display:"inline-flex", listStyle:"none" }}>
        <li>
        <a href="##"><img src="./imgs/item1.jpg" alt="" style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item2.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item3.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item4.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
        <li>
        <a href="##"><img src="./imgs/item5.jpg" alt=""style={{width:"100%",height:"300px"}}/> </a>
        </li>
      </ul>
    </div>
       <div className="adsfilm ">
        <div className="filminfo">
         <h1>DISCOVER NEW FILM</h1>
         <p>WATCH For First Time Free</p>
         <Button variant="info">WATCH Now</Button>
        </div>      
       </div>
    </div>
    
  );
};

export default Home;