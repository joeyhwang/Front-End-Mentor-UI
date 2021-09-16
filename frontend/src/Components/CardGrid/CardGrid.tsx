import React from 'react'
import { Card } from '../Card/Card';
import './CardGrid.css'
import {CardInfo} from './CardInfo'

const difficulty = ["2 - Junior", "1 - Newbie" ]

interface CardGridProps {

}

export const CardGrid: React.FC<CardGridProps> = () => {
        return (<div className = "card_grid_container">
            {CardInfo.map((a , i) => {
                return (
                    <div key = {i}>
                    <h1 className = "card_difficulty"> {difficulty[i]}</h1>
                    <div  className = "card_grid">
                        {a.map((card, i)=> {
                            return (
                                <Card key = {i} title = {card.title} img = {card.img} link = {card.link}/>
                            )
                        })}
                    </div>
                    </div>
                )

            })}

        </div>);
}