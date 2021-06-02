import React from 'react'

import '../Styles/ContentCard.scss';

const ContentCard = ({cardData}) => {
    return (
        <div className='content-card'>
            { cardData.left ? <img src={cardData.image} /> : null}
            <div className='content-card-info'>
                <p>{cardData.date}</p>
                <h1>{cardData.title}</h1>
                <p>{cardData.description}</p>
                <a>Read More</a>
            </div>
            { cardData.left ? null : <img src={cardData.image} />}
        </div>
    )
}

export default ContentCard;
