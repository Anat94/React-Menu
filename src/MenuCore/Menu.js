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
                <Item className="Item" Title={"Home"} action={"/"}/>
                <Item className="Item" Title={"About"} action={"/about"} />
                <Item className="Item" Title={"Shop"} type={"dropdown"}/>
                <Item className="Item" Title={"Contact"} action={"/contact"}/>
                <Item className="Item" Title={<FaSearch />} type={"searchbar"}/>
            </div>
        </div>
    )
}

export default MenuCore
