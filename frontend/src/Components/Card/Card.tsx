import React from 'react'
import './Card.css'

interface CardProps {
    title: string
    img: string
    link: string
    
}

export const Card: React.FC<CardProps> = ({title, img, link}) => {
        return (<div className = "card_container">
            
            <a href = {link} target="_blank" rel="noreferrer">
                <img src = {img} alt = {title}/>
                <div className = "middle middle-blur">
                    <h2 className = "card_title">{title}</h2>

                </div>

            </a>
        </div>);
}