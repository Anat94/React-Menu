import React from 'react'
import './menu.css'
import { FaSearch } from 'react-icons/fa';


const Menu = () => {
    return (
        <div className='menu_container'>
            <div className='left_container'>
                <div className='logo_container'>
                    <img className='image' src='https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png' alt='logo' />
                </div>
            </div>
            <div className='right_container'>
                <div className='item_container'>Home</div>
                <div className='item_container'>About</div>
                <div className='item_container'>Shop</div>
                <div className='item_container'>Contact</div>
                <div className='item_container'><FaSearch /></div>
            </div>
        </div>
    )
}

export default Menu
