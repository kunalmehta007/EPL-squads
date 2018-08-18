import React from 'react';
import './Card.css';
import ReactDOM from 'react-dom';
import './App.css';

const Card = ({name, Team, TeamImage, position, country, image, Desc}) => {
    return (
        <div className = 'tc bg-light-gray hover-bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5 w5' id='total'>  
                <img alt='img' width= '200' height = '200' src = {image}/>
                    <div class = 'playerbasic'>
                        
                        <h2>{name}</h2>
                        <img alt='club.img' width='50' height ='50' src={TeamImage}/>
                        <h4>{Team}</h4>
                        <p>{position}</p>
                        <p>{country}</p>
                </div>        
                <div className = 'playerdesc'> 
                        <p className = 'descfont'>{Desc}</p>   
                </div>  
                   
        </div>
    );
}


export default Card;