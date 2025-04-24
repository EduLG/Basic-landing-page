import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./Jumbotron";
import Card from "./Card";

//create your first component
const Home = () => {
	const cards = [
		{
			src: "https://i.pinimg.com/736x/4f/d6/74/4fd674794e8a70cbb7bd700bfece9e52.jpg",
			title: "De Vito too high",
			description: "So much wow for this De Vito goin' on",
			button: "become De Vito"
		},
		{
			src: "https://i.pinimg.com/736x/7a/83/8b/7a838bd6680e3f865edb3dbee55d7ebd.jpg",
			title: "Dj Chandalf",
			description: "Sick mix for rotten ears",
			button: "become Chandalf"
		},
		{
			src: "https://i.pinimg.com/736x/b7/cf/ee/b7cfeeb1feabe37992b36f8ae60a03b0.jpg",
			title: "Foreast mall",
			description: "Gollums are 50% off",
			button: "Buy more Gollums"
		},
		{
			src: "https://i.pinimg.com/736x/ae/fc/cd/aefccd7cb003b680be1cce09c23dc188.jpg",
			title: "Space Chandalf",
			description: "Chandalf spacier than ever",
			button: "Go to space"
		}
	]
	return (
		<div class="container-md bg-light p-4">
            <Jumbotron 
				title="Lorem Fistrum"
				description="Lorem fistrum está la cosa muy malar está la cosa muy malar la caidita ese que llega llevame al sircoo papaar papaar papaar papaar pupita.Al ataquerl pecador no puedor te va a hasé pupitaa.Caballo blanco caballo negroorl benemeritaar a peich no te digo trigo por no llamarte Rodrigor"
				lowerDesc="Benemeritaar a peich fistro qué dise usteer qué dise usteer. No puedor condemor fistro llevame al sircoo."
				buttonText="Al ataquer!"
			/>
			<div className="d-flex justify-content-between">
				{
					cards.map((card, index)=>{
						return (
							<Card 
								src = {card.src}
								title = {card.title}
								description = {card.description}
								button = {card.button}
								key = {index}
							/>
						);
					})
				}
			</div>
		</div>
	);
};

export default Home;