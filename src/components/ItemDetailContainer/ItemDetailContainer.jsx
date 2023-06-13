import React from 'react'
import CardsDetail from "../CardsDetail/CardsDetail"
const ItemDetailContainer = (jsonData) => {
    return (
        <section className='card-container'>
            {
                jsonData.jsonData.map((product) =>{
                    return <CardsDetail jsonData={product} key={product.id}/>
                })
            }
        </section>
    )
}

export default ItemDetailContainer