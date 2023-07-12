import React from 'react'
import style from './menu.module.css'
import { FaSearch } from 'react-icons/fa';
import Item from '../Item/Item';
import defaultLogo from "../defaultLogo.png"

const MenuCore = ({searchDisplayed, children, logo=defaultLogo }) => {
    const [isOpen, setOpen] = React.useState(false);
    const [areItemDisplayed, setItemDisplayed] = React.useState(true);

    return (
        <>
            <div className={style.menu_container}>
                <div className={style.left_container}>
                    <div className={style.logo_container}>
                        <img className={style.menuLogo} src={logo} alt='logo' />
                    </div>
                </div>
                <div className={style.right_container}>
                    <div className={style.itemMenu}>
                        {
                            areItemDisplayed && (
                                <>
                                    {children}
                                </>
                            )
                        }
                        {
                            searchDisplayed && <Item Title={<FaSearch />} type={"searchbar"} setItemDisplayed={setItemDisplayed}/>
                        }
                    </div>
                    <div className={style.burgerButton}>
                        <label className={style.buttonContainer}>
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
                        <div className={style.menuContainer}>
                            {
                                searchDisplayed &&
                                    <div className={style.searchBox}>
                                        <input className={style.searchBar} type="text" name="search_value" placeholder='Search ...' />
                                        <div><FaSearch /></div>
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
