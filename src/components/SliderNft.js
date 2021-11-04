import React, { Component } from "react";
import Slider from "react-slick";
import nft1 from '../images/img_nft/nft1.JPG';
import nft2 from '../images/img_nft/nft2.JPG';
import nft3 from '../images/img_nft/nft3.JPG';
import nft4 from '../images/img_nft/nft4.JPG';
import nft5 from '../images/img_nft/nft5.JPG';
import nft6 from '../images/img_nft/nft6.JPG';

export default class SliderNft extends Component {
    render() {
      const settings =
      {
          dots: true,
          autoplay : true,
          infinite: true,
          arrows : true,
          rows: 5,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,        
          responsive: [
              {
                  breakpoint: 900,
                  settings: {
                      slidesToShow: 1,
                      rows:1,
                      centerMode: true,
                      centerPadding: 5,
                  }
              }
          ]
      };
        return (
          <div className="slider_tel">
            <Slider {...settings}>
                <div className="step">
                    <img style={{width : '70%'}} src={nft1} alt="1" />
                </div>
                <div className="step">
                    <img style={{width : '70%'}} src={nft2} alt="2" />
                </div>
                <div className="step">
                    <img style={{width : '70%'}} src={nft3} alt="3" />
                </div>
                <div className="step">
                    <img style={{width : '70%'}} src={nft4} alt="1" />
                </div>
                <div className="step">
                    <img style={{width : '70%'}} src={nft5} alt="2" />
                </div>
                <div className="step">
                    <img style={{width : '70%'}} src={nft6} alt="3" />
                </div>
            </Slider>
          </div>
        );
      }
}
