import React from 'react'
import './menu.css'
import { FaSearch } from 'react-icons/fa';
import Item from '../Item/Item';


const MenuCore = () => {
    const [isOpen, setOpen] = React.useState(false);
    const [areItemDisplayed, setItemDisplayed] = React.useState(true);
    return (
        <>
            <div className='menu_container'>
                <div className='left_container'>
                    <div className='logo_container'>
                        <img className='image' src='https://codeat21.com/wp-content/uploads/2021/03/CodeAT21-Logo.png' alt='logo' />
                    </div>
                </div>
                <div className='right_container'>
                    <div className='itemMenu'>
                        {
                            areItemDisplayed && (
                                <>
                                    <Item className="Item" Title={"Home"} action={"/"}/>
                                    <Item className="Item" Title={"About"} action={"/about"} />
                                    <Item className="Item" Title={"Shop"} type={"dropdown"}/>
                                    <Item className="Item" Title={"Contact"} action={"/contact"}/>
                                </>
                            )
                        }
                        <Item className="Item" Title={<FaSearch />} type={"searchbar"} setItemDisplayed={setItemDisplayed}/>
                    </div>
                    <div className='burgerButton' >
                        <label className='buttonContainer'>
                            <input type="checkbox" id="check" onClick={() =>  setOpen(!isOpen)}/>
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                </div>
            </div>
            {
                isOpen && (
                    <>
                        <div className='menuContainer'>
                            <div className='itemPhoneButton searchBox'>
                                <input className='searchBar' type="text" name="search_value" placeholder='Search ...' />
                                <div className=''><FaSearch /></div>
                            </div>
                            <div className='itemPhoneButton'>Home </div>
                            <div className='itemPhoneButton'>About </div>
                            <div className='itemPhoneButton'>Shop </div>
                            <div className='itemPhoneButton'>Contact </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MenuCore
