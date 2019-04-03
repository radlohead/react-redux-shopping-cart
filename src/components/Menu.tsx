import React from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <>
            <ul>
                <li>
                    <Link to="/">index</Link>
                </li>
                <li>
                    <Link to="/products">products</Link>
                </li>
                <li>
                    <Link to="/wishlist">wishlist</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
