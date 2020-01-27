import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import axios from "axios";
import {IPserver} from '../conf/confIP'
 

class GalleryPortfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    };
    this.getImages = this.getImages.bind(this);
  }

  getImages = () => {
    let images = [];
    this.state.img.map(img => {
      if (img.active === 1) {
        images.push({
          original: `${img.path}`,
          thumbnail: `${img.path}`
        });
      }
    });
    return images;
  };

  componentDidMount() {
    axios
      .get(`${IPserver}/api/images/+${this.props.portfolio.id}`)
      .then(res => {
        const imgData = res.data;
        this.setState({ img: imgData });
        console.log(this.state);
        this.getImages();
      });
  }

  render() {
    const { img } = this.state;
    return (
      <div>
        {img === null ? (
          <p> loading </p>
        ) : (
          <ImageGallery items={this.getImages()} />
        )}
      </div>
    );
  }
}

export default GalleryPortfolio;
