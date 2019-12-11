import React, {Component} from "react";
import Slider from "react-slick";
import indienne from '../img/tatoueurs/Indienne_gp.jpg';
import neo from '../img/tatoueurs/NeoNico_color.jpg';
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
      slidesToShow: 1,
      slidesToScroll: 1
    };


    return (
      <Slider {...settings}>
                <img src={indienne} className="imgCarrousel"/>
                <img src={neo} className="imgCarrousel"/>
                <img src={indienne} className="imgCarrousel"/>
                <img src={neo} className="imgCarrousel"/>
                <img src={indienne} className="imgCarrousel"/>
                <img src={neo} className="imgCarrousel"/>
      </Slider>
    );
  }
}

export default CarrouselPortfolio;