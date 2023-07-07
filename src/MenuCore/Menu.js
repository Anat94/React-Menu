import React from 'react'
import './menu.css'
import { FaSearch } from 'react-icons/fa';
import Item from '../Item/Item';


const MenuCore = () => {
    return (
        <div className='menu_container'>
            <div className='left_container'>
                <div className='logo_container'>
                    <img className='image' src='https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png' alt='logo' />
                </div>
            </div>
            <div className='right_container'>
                <Item Title={"Home"}/>
                <Item Title={"About"}/>
                <Item Title={"Shop"} type={"dropdown"}/>
                <Item Title={"Contact"}/>
                <Item Title={<FaSearch />} type={"searchbar"}/>
            </div>
        </div>
    )
}

export default MenuCore
