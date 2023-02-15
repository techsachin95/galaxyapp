import React from 'react'
import SingleCard from './SingleCard'
const Card = () => {
    return (
        <>
            <div className="card">
                <h1>Pricing</h1>
                <div className="plans">
                    <SingleCard project='Only One Project'training='Training Available' video='No Class Recording Available' plans='Basic Plan' rs='5 Lakh'access='No Unlimited Access' food='No Food'/>
                    <SingleCard project='Only 5 Project'training='Training Available' video='Class Recording Available ' plans='Primium Plan' rs='15 Lakh' access='No Unlimited Access' food='Food Available'/>
                    <SingleCard project='Unlimited Project'training='Training Available' video='Class Recording Available' plans='Gold Plan' rs='30 Lakh' access='Unlimited Access' food='Spacial Food'/>
                </div>
            </div>
        </>
    )
}

export default Card