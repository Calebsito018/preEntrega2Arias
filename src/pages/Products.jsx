import React from 'react'

import ItemListContainer from '../components/ItemListContainer/ItemListContainer'
//json
import {JsonData} from "../json/asyncMock"
const Products = () => {
    return (
        <div>
            <ItemListContainer  jsonData ={JsonData} greeting="Pre-entrega 1"/>
        </div>
    )
}

export default Products