import React from 'react'
import './cardlist.css'
import { Card } from './card'
export const CardList= props=> {
    return (
        <div className="card-list">
            
   {  
      props.monster.map(monster=>{
        return (
          <>
        <Card singleMonster={monster}/>
          </>
        )
      })
     }
    </div>
    )
}



