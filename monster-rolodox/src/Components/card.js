import React from 'react'
import './card.css'

export const Card = props => {
    return (
        <div class="card-container">
            <img alt="Monster" src={`https://robohash.org/${props.singleMonster.id}?set=set2&size=180x180`} />
              <h1><b>{props.singleMonster.name}</b></h1>
                <p>{props.singleMonster.email}</p>
        </div>
    )
} 



