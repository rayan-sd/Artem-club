import React, { Component } from "react";
import Slider from "react-slick";
import team1 from './../images/team/Maelys.png';
import team2 from './../images/team/Thomas.png';
import team3 from './../images/team/Vincent.png';
import team4 from './../images/team/Wara.png';

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
                <div className="stepp">
                <img  src={team1} alt="team1"></img>
                <div style={{textAlign:"center"}}>
                  <span>Maelys</span>
                  <br/>
                  <span>Commercial Leader</span>
                </div>
                </div>
                <div className="stepp">
                  <img src={team2} alt="team1"></img>
                  <div style={{textAlign:"center"}}>
                    <span >Thomas</span>
                    <br/>
                    <span>Developer Leader</span>
                  </div>
                </div>
                <div className="stepp">
                <img  src={team3} alt="team1"></img>
                <div style={{textAlign:"center"}}>
                    <span>Vincent</span>
	                  <br/>
							      <span>Project Leader</span>
                </div>
                </div>
            </Slider>
          </div>
        );
      }
}
