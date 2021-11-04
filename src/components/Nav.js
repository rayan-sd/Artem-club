import React, { Component } from "react";
import logo from '../images/logo/logo.png'
import logo_site from '../images/logo/logo_site.png'

export default class Nav extends Component {
    constructor(){
        super();
        this.state = {
            menu_class : "links",
            control_navbar_class : "",
            check : 0
        }
        this.onChange = this.onChange.bind(this);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value })
    }

    handleResponsiveNavbar(){
		if(this.state.menu_class.localeCompare("links")===0 && (this.state.check === 1) ){
			this.setState({menu_class:"links opened"});
			this.setState({checked:"checked"});
		}
		else if(this.state.check===0 || this.state.check===3){
			this.setState({menu_class:"links"});
			this.setState({checked:"non"});
		}

		if(this.state.check === 3){
			this.setState({check:0});
		}
		else{
			this.setState({check:this.state.check+1});
		}
	}

    render() {
        return(
            <div className="background" >
                <nav>
                    <>
                        <a href="/"><img src={logo} alt="Logo Superwrong"></img></a>
                        <div className="control-responsive-navbar" onClick={() => this.handleResponsiveNavbar()}>
                            <label htmlFor="check">
                                <input type="checkbox" id="check" checked={this.state.checked === "checked"} onChange={this.onChange}/> 
                                <span></span>
                                <span></span>
                                <span></span>
                            </label>
                        </div>
                        <div className={this.state.menu_class}>
                            <a href="#about">About</a>
                            <a href="#Mint">Mint</a>
                            <a href="#Roadmap">Roadmap</a>
                            <a href="#Team">Team</a>
                            <a href="#faq">F.A.Q</a>
                        </div>
                        <div className={this.state.menu_class} style={{paddingLeft : 0,paddingRight: 0}}>
                            <div className="nav-none">
                                <a href="#about">About</a>
                                <a href="#Mint">Mint</a>
                                <a href="#Roadmap">Roadmap</a>
                                <a href="#Team">Team</a>
                                <a href="#faq">F.A.Q</a>
                            </div>
                            <h1 className="special">Connect</h1>
                        </div>
                    </>
                </nav>
                <div className="hero-content">
					<div className="wrapper">
						<div className="nav-barre"></div>
                            <img className="space_image"src={logo_site} alt="SITE Logo"></img>
                        <div className="nav-barre1"></div>
					</div>
				</div>
            </div>
        );
    }
}