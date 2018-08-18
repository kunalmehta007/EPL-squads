import React, { Component } from 'react';
import CardList from './CardList';
import { player } from './player';
import Searchbox from './Searchbox';
import './App.css'

//STATE is an object that describes your application. Able to change. Here its 'player'. 
//PROPS come out of STATE.
//Constructor and render are pre-built in react
//your customized functions use arrows


class App extends Component {

	constructor(){
		super()	
		this.state = {
			player: player,
			searchfield: '',
			isHovered: false
		};
	}

	onCardHover = (event) => {
		this.setState({ isHovered: true });
	}



	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
		

	}


	render() {

		const filteredplayers = this.state.player.filter(player => {
			return (player.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) || player.Team.toLowerCase().includes(this.state.searchfield.toLowerCase()) || player.country.toLowerCase().includes(this.state.searchfield.toLowerCase()) || player.position.toLowerCase().includes(this.state.searchfield.toLowerCase()));
		})

		
				return (
						<div className = 'tc bg-light-green'>
							<h1 align='center'>English Premier League</h1>
							<img src = 'https://png2.kisspng.com/20180530/iix/kisspng-english-football-league-201718-premier-league-w-5b0f50d0061699.476136911527730384025.png' alt= 'pl logo' class = 'center' />
							<Searchbox searchChange = {this.onSearchChange}/>
							<CardList player={filteredplayers}/>
						</div> 
				);
			}		
}

export default App;