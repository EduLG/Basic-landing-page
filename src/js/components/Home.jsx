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
			title: "De vito too high",
			description: "So much wow for this De Vito goin' on",
			button: "become De Vito"
		},
		{
			src: "https://i.pinimg.com/736x/47/59/92/4759920758abd58cff373bdcf19818d5.jpg",
			title: "De vito too high",
			description: "So much wow for this De Vito goin' on",
			button: "become De Vito"
		},
		{
			src: "https://i.pinimg.com/736x/b7/cf/ee/b7cfeeb1feabe37992b36f8ae60a03b0.jpg",
			title: "De vito too high",
			description: "So much wow for this De Vito goin' on",
			button: "become De Vito"
		},
		{
			src: "https://i.pinimg.com/736x/16/36/18/16361845f7e361d3902a3bd746b3e432.jpg",
			title: "De vito too high",
			description: "So much wow for this De Vito goin' on",
			button: "become De Vito"
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