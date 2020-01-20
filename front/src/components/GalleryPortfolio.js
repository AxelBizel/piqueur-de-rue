import React, { Component } from "react";
import ImageGallery from 'react-image-gallery';
import axios from "axios";


class GalleryPortfolio extends Component {
  constructor(props){
    super(props);
    this.state = {
      img: null
    };
    this.getImages=this.getImages.bind(this);

  }

  getImages = () => {
    let images = [];
    this.state.img.map(img => images.push({
       original:`${img.path}`,
       thumbnail: `${img.path}`,}));
       console.log('img', images)
      return images
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/api/images/+${this.props.portfolio.id}`).then(res => {
      const imgData = res.data;
      this.setState({ img: imgData });
      console.log(this.state);
      this.getImages();
    });
  }

 
  render() {
          
    // const images = [  {
    //        original: 'http://localhost:5000/img/4/A290_1.jpg',
    //        thumbnail:'http://localhost:5000/img/4/A290_1.jpg'
    //      }]

      const {img} =  this.state
    return  (<div>

      {img === null ?  <p> loading </p> : <ImageGallery items={this.getImages()} />}
    </div>
    )
  }
}

export default GalleryPortfolio;
