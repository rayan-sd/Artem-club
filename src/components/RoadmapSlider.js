import React, { Component } from "react";
import Slider from "react-slick";

export default class RoadmapSlider extends Component {
    render() {
      const settings =
      {
          dots: true,
          autoplay : true,
          infinite: true,
          arrows : false,
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
          <div>
            <Slider {...settings}>
              <div className="step">
                  <p>Buy A Faceless Fighter NFT:</p>
                  <p>We can not stress this enough, to be part of the club, players must buy our one-of-a-kind characters. After purchase, access to the games will be delivered and the NFT character will be used to play.</p>
                </div>
                <div className="step">
                  <p>Airdrop of 10 NFT characters to random Faceless Fighters:</p>
                  <p>When the clock at the top of this page runs out, we will be airdropping 10 free-of-charge NFTs to anyone who has purchased a Faceless Fighter. This is a one-time-only offer.</p>
                </div>
                <div className="step">
                  <p>Organize and sponsor a Free Fight tournament in real life:</p>
                  <p>To kick off the fights, we will host a real, free event where players will have an opportunity to meet, play, boost rank, gain notoriety, and get prizes just for participating.</p> 
                </div>
                <div className="step">
                  <p>Creation of Fight Tokens that will be used within the game:</p>
                  <p>After this first tournament we will create prizes for winners in the form of Fight Tokens. These tokens can be used to increase character fighting skills.</p> 
                </div>
                <div className="step">
                  <p>Launch of the multiplayer game:</p>
                  <p>The last step of the rollout is to deploy games where a number of players can join. This will allow people to invite friends and then engage in large battles with high value. After all, the more players, the more fun!</p> 
                </div>
            </Slider>
          </div>
        );
      }
}


