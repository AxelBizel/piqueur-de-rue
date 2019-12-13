import React, {Component} from "react";
import Slider from "react-slick";
import abeille from '../img/tatoueurs/abeille.jpg';
import cover_cuisse from '../img/tatoueurs/cover_cuisse.jpg';
import doight from '../img/tatoueurs/doight.jpg';
import fleur from '../img/tatoueurs/fleur.jpg';
import fleur_genou from '../img/tatoueurs/fleur_genou.jpg';
import oeil from '../img/tatoueurs/oeil.jpg';
import "./carrouselPortfolio.css";
// import Swipe from 'react-easy-swipe';


class CarrouselPortfolio extends Component {
    constructor(props){
        super(props);

    }

      // onSwipeStart(event) {
      //   console.log('Start swiping...', event);
      // }
     
      // onSwipeMove(position, event) {
      //   console.log(`Moved ${position.x} pixels horizontally`, event);
      //   console.log(`Moved ${position.y} pixels vertically`, event);
      // }
     
      // onSwipeEnd(event) {
      //   console.log('End swiping...', event);
      // }
     
      
    render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };


    return (
      // <Swipe
      // onSwipeStart={this.onSwipeStart}
      // onSwipeMove={this.onSwipeMove}
      // onSwipeEnd={this.onSwipeEnd}>
      <Slider {...settings}>
                <img src={abeille} className="imgCarrousel" alt="..."/>
                <img src={oeil} className="imgCarrousel" alt="..."/>
                <img src={doight} className="imgCarrousel" alt="..."/>
                <img src={fleur_genou} className="imgCarrousel" alt="..."/>
                <img src={fleur} className="imgCarrousel" alt="..."/>
                <img src={cover_cuisse} className="imgCarrousel" alt="..."/>
      </Slider>
      // </Swipe>

    );
  }
}

export default CarrouselPortfolio;