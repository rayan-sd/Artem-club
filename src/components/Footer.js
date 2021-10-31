import React, { Component } from "react";
import logo_site from '../images/logo/logo_site.png'
import opensea from '../images/social/opensea.png'
import Twitter from '../images/social/twitter.png'
import discord from '../images/social/discord.png'

export default class Footer extends Component {
    render() {
        return(             
            <div className="footer">
                <div className="logo">
                <a href="https://opensea.io/"><img className="space_image" style={{left:'2%'}}src={opensea}></img></a>
                <a href="https://twitter.com/WrongArtemClub"><img className="space_image" style={{left:'8%'}}src={Twitter}></img></a>
                <a  href="https://discord.gg/sQSk9Brg"><img className="space_image" style={{left:'14%', width: '2%'}} src={discord}></img></a>
                </div>
                <div className="logo">
                    <img src={logo_site} style={{float:'right'}} alt="SITE Logo"></img>                        
                </div>
                <div className="footer_text">
                    <p>Politic policy</p>
                    <p>Term & conditions</p>
                    <p>Contacts </p>
                </div>
            </div>
        );
    }
}


