import React from 'react';
import roadmap from './images/good_image/roadmap.png';
import team1 from './images/team/Maelys.png';
import team2 from './images/team/Thomas.png';
import team3 from './images/team/Vincent.png';
import team4 from './images/team/Wara.png';

// import './css/letter-section.css';
import './css/roadmap-section.css';
import './css/team-section.css';
import './css/vip-section.css';

import './css/mint.css';
import './css/faq.css';
import './css/hero-content.css';
import './css/navbar.css';
import './css/footer.css';
import './App.css';


import Nav from "./components/Nav";
import RoadmapSlider  from './components/RoadmapSlider';
import FAQ from "./components/faq";
import Footer from "./components/Footer";
import TeamSlider from './components/TeamSlider';
import SliderNft from './components/SliderNft'

function App() {
  return (
    <div className="App">
      <Nav/>
      <main>
			{/* HERO CONTENT */}
			<div className="hero-wrapper" id="list">
				{/* COUNTDOWN SECTION */}
				<div className="countdown-section" id="Mint">
					<div className="pad_right">
					<div className="part left background_swa">
						<h1 className="enter_line">Get on the list</h1>
					</div>
					</div>
					<TeamSlider/>
					<SliderNft/>
					<a  href="https://discord.gg/sQSk9Brg"><h1 className="join_button">Join the Discord</h1></a>
				</div>
			</div>

			{/* ABOUT US */}
			<div className="about-section_background" id="about">
				<div className="wrapper">
					<div className="hero-barre">
					</div>
					<div className="space">
						<span class="text">About us</span>
					</div>
					<div className="hero-barre1"></div>
				</div>
				<div class ="about-section">
					<div className="about-us-section">
						<p className="emphased center">Welcome on Wrong Artem Club</p>
						<p>After bringing our love of absurd and controversial art to Instagram with Superwrong Magazine, we wanted to take it a step further. </p>
						<p>It's through a passion for the metaverse that our dream was born, the Wrong Artem Club, with a common goal : to create a universe highlighting the artists who have made history, and those who have not finished building it.</p>
						<p>Thus, Wrong Artem Club wants to spearhead the accessibility of art by all, and this through our common ambitions: to shout art, to spread it, to help it to develop, to make it exist at all costs.</p>
						<p>So, the Wrong Artem Club welcomes you, and invites you to share with us what will make tomorrow a world of expression and emotion.</p>
					</div>
				</div>
			</div>
			{/* ROADMAP */}
			<div className="wrapper-title">
				<div className="roadmap_barre">
				</div>
				<div className="space_title">
					<p class="text">Roadmap</p>
				</div>
				<div className="roadmap_barre1"></div>
			</div>
			<section className="vip-section bettwen_sect_roadmap" id="Roadmap">
				<div className="grid_roadmap">
					<div className="roadmap-right">
						<div className="pourcent-left">
							<p className="pourcent-roadmap-left">25%</p>
							<p className="padd">15 random Wrong Artem Club NFTs giveaways for holders and 1 ETH giveaway</p>
						</div>
						<div>
							<p className="pourcent-roadmap-left">75%</p>
							<p className="padd">2,5% for charity (community vote on Discord) 1 rare Wrong Artem Club giveaway</p>
						</div>
					</div>
					<div className="roadmap-center">
						<img src={roadmap} class="img_roadmap" alt="Roadmap"></img>
					</div>
					<div className="roadmap-left">
						<div className="padding">
							<p className="pourcent-roadmap-right">10%</p>
							<p className="pad-text">1 ETH giveaway and 5 free mint NFTs giveaways</p>
						</div>
						<div className="pourcent-right">
							<p className="pourcent-roadmap-right">50%</p>
							<p className="pad-text">2,5 % for charity (community vote on Discord) Fan Art giveaway (with rewards)</p>
						</div>
						<div className="pad">
							<p className="pourcent-roadmap-right">100%</p>
							<p className="pad-text">Wrong Artem Club Digital exhibition<br></br> Companions free mint for all Wrong Artem Club holders</p>
						</div>
					</div>
				</div>
				<div className="style_text" >
					<p className="color_red">Ultime goal :</p>
					<p className="color_red">Our goal is to open the real Wrong Artem Club in Paris... and we will !</p>
					<a href="https://twitter.com/WrongArtemClub"><h1 className="join_button1">Join the Twitter</h1></a>
				</div>
			</section>
			{/* Team */}
			<div className="wrapper-title">
				<div className="team-barre">
				</div>
				<div className="space_title_team">
					<p class="text">Meet the team</p>
				</div>
				<div className="team-barre1"></div>
			</div>
			<section className="vip-section" id="Team">
					<div className="grid_team">
						<div className="team_1">
							<img  src={team4} alt="team1"></img>
							<span >Wara</span>
							<br/>
							<span>Artist & Art director</span>
						</div>
						<div className="text_team">
							<p> The whole collection is the work of Yam in her signature hand-drawn and colourful style using Procreate and Adobe Illustrator. With her art her mission has always been to highlight and empower women by making them the center of her pieces.</p>
							<p>World of Women aims to bring in more diversity and inclusivity to nfts, which we believe is very much missing in this male dominated space.</p>
							<p>We are all passionate and committed to the nft space and strongly believe this is our future and that our project can help make a diffe- rence. We hope you’ll follow along on this journey with us!</p>
						</div>
					</div>
					<div className="grid_team">
						<div className="team_2">
							<div className="team2sup"><img style={{paddingLeft: '53px'}} src={team3} alt="team1"></img></div>
							<span className="name">Vincent</span>
							<br/>
							<span className="last_name">Project Leader</span>
						</div>
						<div className="team_3">
						<img  src={team1} alt="team1" className="team3sup"></img>
							<span>Maelys</span>
							<br/>
							<span>Commercial Leader</span>
							</div>
						<div className="team_4">
						<div style={{marginBottom: '-26px'}}><img src={team2} alt="team1" className="team4sup"></img></div>
							<span >Thomas</span>
							<br/>
							<span>Developer Leader</span>
						</div>
					</div>
					<div className="grid_team">
						<div className="team_2">
							<div className="team2sup"><img style={{paddingLeft: '53px'}} src={team3} alt="team1"></img></div>
							<span className="name">Vincent</span>
							<br/>
							<span className="last_name">Project Leader</span>
						</div>
						<div className="team_3">
						<img  src={team1} alt="team1" className="team3sup"></img>
							<span>Maelys</span>
							<br/>
							<span>Commercial Leader</span>
							</div>
						<div className="team_4">
						<div style={{marginBottom: '-26px'}}><img src={team2} alt="team1" className="team4sup"></img></div>
							<span >Thomas</span>
							<br/>
							<span>Developer Leader</span>
						</div>
					</div>
				<div class="slider_team_phone">
						<div className="team_1">
							<img  src={team4} alt="team1"></img>
							<span >Wara</span>
							<br/>
							<span>Artist & Art director</span>
						</div>
						<div className="text_team">
							<p> The whole collection is the work of Yam in her signature hand-drawn and colourful style using Procreate and Adobe Illustrator. With her art her mission has always been to highlight and empower women by making them the center of her pieces.</p>
							<p>World of Women aims to bring in more diversity and inclusivity to nfts, which we believe is very much missing in this male dominated space.</p>
							<p>We are all passionate and committed to the nft space and strongly believe this is our future and that our project can help make a diffe- rence. We hope you’ll follow along on this journey with us!</p>
						</div>
						<RoadmapSlider/>
					</div>
			</section>
				{/* FAQ */}
				<section className="faq-section" id="faq">
					<div className="wrapper">
						<div className="hero-barre2">
						</div>
						<div className="space1">
						<p>F.A.Q</p>
						</div>
					</div>
					<div class ="faq-section">
					<div className="faq-us-section">
						<p className="emphased center">KEY INFORMATION</p>
						<p>Release Date — 27th of July 9pm CEST, 3pm EST, 12pm PST</p>
						<p>Total number of tokens — 10,000</p>
						<p>Tokens withheld from sale — 200 (giveaways, marketing, team and contributors)</p>
						<p>Given back —</p>
						<p class="tabulation">  15% - WoW Fund for Cryptoart</p>
						<p class="tabulation">  2.5% - She's the first</p>
						<p class="tabulation"> 2.5% - Too Young to Wed</p>
						<p class="tabulation"> 2.5% - Strange Cintia</p>
						<p> Token type — ERC-721</p>
						<p> Blockchain — Ethereum</p>
						<p> File hosting — IPFS</p>
						<p>Royalty fees — 4% (2% for creators & 2% for the Royalties Club) Number of traits — 11</p>
						<p>Number of attributes — 189</p>
						<p>Minimum number of traits — 7</p>
						<p>Licensing — Commercial rights + 50% royalties due to token owner</p>
						<p>Reveal Type — Instant</p>
						<p>Smart Contract — https://etherscan.io/address/0xe785e82358879f061bc3d- cac6f0444462d4b5330#code</p>
					</div>
					<FAQ/>
				</div>
			</section>
				{/* TEAM */}
				{/* <section className="team-section" id="team"> */}
					<div className="barre"></div>
				{/* </section> */}
			{/* </div> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
