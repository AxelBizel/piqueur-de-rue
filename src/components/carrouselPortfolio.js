import React, {Component} from "react";
import Slider from "react-slick";
import indienne from '../img/tatoueurs/Indienne_gp.jpg';
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
                <img src={indienne}/>
                <img src={indienne}/>
                <img src={indienne}/>
                <img src={indienne}/>
                <img src={indienne}/>
                <img src={indienne}/>
      </Slider>
    );
  }
}

export default CarrouselPortfolio;