import React from 'react';
import "./Card.css";

function Card(props) {
    const {card}=props;
    let total=0;
    for(const info of card){
        total=total+info.age;
    }
    let name=[];
    for(const info of card){
        name=name+info.name;
    }

    return (
        <div >
            <h1 className="head__line">CEO History</h1>
            <h2> CEO Added:{props.card.length}</h2>
            
            <h2>Age:{total}</h2>
            <h3>Name:{name}</h3>
            
        </div>
    )
}

export default Card
