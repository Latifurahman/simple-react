import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import './Player.css';


const Player = (props) => {
    console.log(props);
    const {name, image, salary} = props.player;
    return (
        <div>
            <div className="players">
                <div className="players-container">
                    <img src={image} alt=""/>
                    <div className="players-details">
                        <h5>{name}</h5>
                        <p>Salary: <small>{salary}</small></p>
                        <button button onClick = {() => props.handleAddPlayer(props.player) } > < FontAwesomeIcon icon = { faPlus}/> Add to Club</button >
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Player;