import React from 'react';
import './card.styles.css';

export const Card = props =>(

    <div className='card-container'>
        <img 
        alt='monster' 
        src={`https://robohash.org/${props.monster.id}cd ?set=set2&size=145x145`}
        />
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)