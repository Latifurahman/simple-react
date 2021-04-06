import React, { useEffect, useState } from 'react';
import './Main.css';
import Player from '../../components/Player/Player';
import PlayerData from '../../components/data/data.json';
import Member from '../Member/Member';

const Main = () => {
    const [players, setPlayers] = useState([]);
    const [member, setMember] = useState([]);

    const handleAddPlayer = (player) =>{
        const newMember = [...member, player];
        setMember(newMember);
    }
    useEffect(()=>{
        setPlayers(PlayerData);
    }, [])
    return (
        <div className="main">
            
            <div className="main-left">
                    {
                     players.map(player => <Player player={player} key={player.alpha2Code} handleAddPlayer={handleAddPlayer}></Player>)
                     }
            </div>

            <div className="main-right">
                <h1><u>Khulna Tigers Club</u></h1>
                <Member member={member}></Member>
            </div>
            
        </div>
    );
};

export default Main;