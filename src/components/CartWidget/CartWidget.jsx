import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
const CartWidget = () => {
    return (
        <button className='cart-button'>
            <FontAwesomeIcon icon={faBagShopping} />
            <span className='count'>0</span>
        </button>
    )
}

export default CartWidget