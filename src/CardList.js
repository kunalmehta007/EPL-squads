import React from 'react';
import Card from './Card'; //importing the card component


// Need to pass 'player' parameter as player is not defined here
const CardList = ({ player }) => {

	return (

		<div>
			{
	            player.map((user, i) => {
				//the 'key' is needed for react to maintain a unique id for each component
				return (	
							<Card 
								Key={i} 
								image= {player[i].image} 
								name = {player[i].name} 
								position = {player[i].position} 
								country = {player[i].country}
								Team = {player[i].Team}
								TeamImage = {player[i].TeamImage}
								Desc = {player[i].Desc}
							
							/>
						);

					})
			}  
        </div>


	 );
}

export default CardList;