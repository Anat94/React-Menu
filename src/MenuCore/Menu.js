import React, { Children } from 'react'
import './menu.css'
import { FaSearch } from 'react-icons/fa';
import Item from '../Item/Item';


const MenuCore = ({searchDisplayed, children}) => {
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
                                    {children}
                                </>
                            )
                        }
                        {
                            searchDisplayed && <Item className="Item" Title={<FaSearch />} type={"searchbar"} setItemDisplayed={setItemDisplayed}/>
                        }
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
                            {
                                searchDisplayed &&
                                <div className='searchBox'>
                                    <input className='searchBar' type="text" name="search_value" placeholder='Search ...' />
                                    <div className=''><FaSearch /></div>
                                </div>
                            }
                            <div style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center'}}>
                                {children}
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default MenuCore
