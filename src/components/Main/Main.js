import React, { useEffect, useState } from 'react';
import './Main.css';
import Player from '../../components/Player/Player';
import PlayerData from '../../components/data/data.json';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const handleAddPlayer = (player) =>{
        console.log('added', player)
    }
    useEffect(()=>{
        setPlayers(PlayerData);
    }, [])
    return (
        <div className="main">
            
            <div className="main-left">
                    {
                     players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                     }
            </div>

            <div className="main-right">
                <h1><u>Khulna Tigers Club</u></h1>
            </div>
            
        </div>
    );
};

export default Main;