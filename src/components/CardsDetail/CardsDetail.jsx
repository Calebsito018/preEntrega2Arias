import React from 'react'
//css
import "./cardsdetail.css"

const CardsDetail = (jsonData) => {
    console.log(jsonData);

    return (
        <section className='card-detail'>
            <div className='div1'>
                <h3>{jsonData.jsonData.description}</h3>
            </div>
            <div className='card-detail-img-container div2'>
                <img src={jsonData.jsonData.images} alt="" />
            </div>
            <div className='div3'>
                <h2>{jsonData.jsonData.title}</h2>
                <span>{jsonData.jsonData.price}</span>
                <button>Comprar</button>
            </div>
        </section>
    )
}

export default CardsDetail