import React from "react";
import "../css/portfolios.css";
import img1 from "../assets/Cinema P1 Dribbble.png"
import img2 from "../assets/Porsche.png"
import img3 from "../assets/casino.png"
import img4 from "../assets/computer.png"
import img5 from "../assets/mine.png"
import img6 from "../assets/interior.png"


const Portfolios = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img1} alt="Image of image"/>
            <h3>Movie Search App</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/MowahidLatif/MovieSearchApp" className="btn" target="blank">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img2} alt="Image of image"/>
            <h3>Exotic Car Rentals</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/MowahidLatif/Websites/tree/main/CarWebsite" className="btn" target="blank">Github</a>
              <a href="https://exotic-car-rentals.netlify.app" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img3} alt="Image of image"/>
            <h3>Casino Night</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/MowahidLatif/Websites/tree/main/CasinoWebsite" className="btn" target="blank">Github</a>
              <a href="https://casino-night.netlify.app/" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img6} alt="Image of image"/>
            <h3>Modern Interior</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/MowahidLatif/Websites/tree/main/InteriorDesignWebsite" className="btn" target="blank">Github</a>
              <a href="https://modern-interior-design.netlify.app/" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img5} alt="Image of image"/>
            <h3>Mine Sweeper Arcade Game</h3>
            <div className="portfolio_item-cta">
              <a href="https://github.com/MowahidLatif/HTML-CSS-And-Javascript-Projects/tree/master/Mine%20Sweeper" className="btn" target="blank">Github</a>
              <a href="https://my-mine-sweeper.netlify.app/" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item_img">
            <img src={img4} alt="Image of image"/>
            <h3>PrintF Function</h3>
            <div className="portfolio_item-cta">
              <a href="hthttps://github.com/MowahidLatif/QwasarBootCamp/tree/main/PrintF" className="btn" target="blank">Github</a>
              <a href="https://dribbble.com/Alien_pixels" className="btn btn-primary" target="blank">Live Demo</a>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolios;

// ADD URL OF ALL PROJECTS INTO THE GITHUB SECTION
// USE IMAGES FROM DRIBBBLE OR FROM THAT SPLASH WEBSITE 
// USE HOWEVER MANY IAMGES THAT ARE NEEDED FOR YOUR THING 