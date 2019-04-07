import React from 'react'
import { Link } from 'react-router-dom'
import '@src/css/components/Menu.scss'

const Menu = () => {
    return (
        <>
            <ul className="gnb">
                <li className="gnb__index">
                    <Link to="/">index</Link>
                </li>
                <li className="gnb__products">
                    <Link to="/products">products</Link>
                </li>
                <li className="gnb__wishlist">
                    <Link to="/wishlist">wishlist</Link>
                </li>
            </ul>
        </>
    )
}

export default Menu
