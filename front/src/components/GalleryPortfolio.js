import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import abeille from '../img/tatoueurs/abeille.jpg';
import cover_cuisse from '../img/tatoueurs/cover_cuisse.jpg';
import doight from '../img/tatoueurs/doight.jpg';
import fleur from '../img/tatoueurs/fleur.jpg';
import fleur_genou from '../img/tatoueurs/fleur_genou.jpg';
import oeil from '../img/tatoueurs/oeil.jpg';
 
const images = [
  {
    original: `${abeille}`,
    thumbnail: `${cover_cuisse}`,
  },
  {
    original: `${cover_cuisse}`,
    thumbnail:`${cover_cuisse}`,
  },
  {
    original: `${doight}`,
    thumbnail: `${doight}`,
  },
  {
    original: `${fleur}`,
    thumbnail: `${fleur}`,
  },
  {
    original: `${fleur_genou}`,
    thumbnail:`${fleur_genou}`,
  },
  {
    original: `${oeil}`,
    thumbnail:`${oeil}`,
  },
];
 
class GalleryPortfolio extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default GalleryPortfolio;
