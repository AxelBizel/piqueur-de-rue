import React, {Component} from "react";
import Slider from "react-slick";
import abeille from '../img/tatoueurs/abeille.jpg';
import cover_cuisse from '../img/tatoueurs/cover_cuisse.jpg';
import doight from '../img/tatoueurs/doight.jpg';
import fleur from '../img/tatoueurs/fleur.jpg';
import fleur_genou from '../img/tatoueurs/fleur_genou.jpg';
import oeil from '../img/tatoueurs/oeil.jpg';
import "./carrouselPortfolio.css";


class CarrouselPortfolio extends Component {
    constructor(props){
        super(props);

    }
      
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };


    return (
      <Slider {...settings}>
                <img src={abeille} className="imgCarrousel" alt="..."/>
                <img src={oeil} className="imgCarrousel" alt="..."/>
                <img src={doight} className="imgCarrousel" alt="..."/>
                <img src={fleur_genou} className="imgCarrousel" alt="..."/>
                <img src={fleur} className="imgCarrousel" alt="..."/>
                <img src={cover_cuisse} className="imgCarrousel" alt="..."/>
      </Slider>

    );
  }
}

export default CarrouselPortfolio;