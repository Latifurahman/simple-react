import React from 'react';
import './Member.css';

const Member = (props) => {
    const members = props.member;
    const total = members.reduce((total, element) => total + element.salary , 0);
    return (
        <div className="members-detail">
            <h2>Added Player: {members.length}</h2>
            <div className="player-name">
                <h3>Players Name:</h3>
                {
                    members.map(member => <h6>{member.name}</h6>)
                }
            </div>
            
                <h3 className="budget">Total Budget: {total}</h3>
        </div>
    );
};

export default Member;