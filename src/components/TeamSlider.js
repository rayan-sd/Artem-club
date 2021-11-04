import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import nft1 from '../images/img_nft/nft1.JPG';
import nft2 from '../images/img_nft/nft2.JPG';
import nft3 from '../images/img_nft/nft3.JPG';
import nft4 from '../images/img_nft/nft4.JPG';
import nft5 from '../images/img_nft/nft5.JPG';
import nft6 from '../images/img_nft/nft6.JPG';

export default class TeamSlider extends Component {
  state = {
    goToSlide: 1,
    offsetRadius: 4,
    showNavigation: false,
  };

  slides = [
    {
      key: 1,
      content: <img src={nft1} alt="1" />
    },
    {
      key: 2,
      content: <img src={nft2} alt="2" />
    },
    {
      key: 3,
      content: <img src={nft3} alt="3" />
    },
    {
      key: 4,
      content: <img src={nft4} alt="4" />
    },
    {
      key: 5,
      content: <img src={nft5} alt="5" />
    },
    {
      key: 6,
      content: <img src={nft6} alt="6" />
    },
    {
      key: 7,
      content: <img src={nft4} alt="7" />
    },

  ].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });

  onChangeInput = e => {
    this.setState({
      [e.target.name]: parseInt(e.target.value, 10) || 0
    });
  };

  render() {
    return (
      <div style={{textAlign:'center'}} className="slider_ordi">
        <div className="slider">
          <Carousel
            slides={this.slides}
            goToSlide={this.state.goToSlide}
            offsetRadius={this.state.offsetRadius}
            showNavigation={this.state.showNavigation}
            animationConfig={this.state.config}
            centerMode={true}
          />
        </div>
      </div>
    );
  }
}
