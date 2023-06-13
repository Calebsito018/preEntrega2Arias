import React from 'react'

import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import {JsonData} from "../json/asyncMock"
import { useParams } from 'react-router-dom'
const Item = () => {
    const { itemId} = useParams();
    const filterById = JsonData.filter ((product) => product.id === parseInt(itemId))
    return (
        <div>
            <ItemDetailContainer  jsonData={filterById} greeting="Pre-entrega 1"/>
        </div>
    )
}

export default Item