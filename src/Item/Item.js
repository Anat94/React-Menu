import React from 'react'
import style from './Item.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";


const Item = ({Title, type, action, setItemDisplayed}) => {
    const [isClick, setIsClick] = React.useState(false);

    const displayItem = React.useCallback(() => {
        setIsClick(!isClick);
        setItemDisplayed(false)
    }, [isClick, setItemDisplayed]);

    const hideItem = React.useCallback(() => {
        setIsClick(!isClick);
        setItemDisplayed(true)
    }, [isClick, setItemDisplayed]);

    return (
        type === "dropdown" ?
        <>
            <div className={`${style.dropdownContainer} ${style.item_container}`}>
                <div>{Title}</div>
                <MdKeyboardArrowDown />
            </div>
            {/* <div className={style.dropdownComponent}>
                <ul className={style.dropdown}>
                    <li key={1} className={style.menuitems}>
                        <a href={"/about"}>{"COUCOU"}</a>
                    </li>
                    <li key={1} className={style.menuitems}>
                        <a href={"/about"}>{"COUCOU2"}</a>
                    </li>
                </ul>
            </div> */}
        </>
        : type === "searchbar" ? (
            <>
                {
                    !isClick && <div className={style.item_container} onClick={displayItem}>{Title} </div>
                }
                {
                    isClick && (
                        <div className={style.searchContainer}>
                            <div className={style.item_container} onClick={hideItem}>{Title}</div>
                            <input className={style.searchBox} type="text" name="search_value" placeholder='Search ...' />
                        </div>
                    )
                }
            </>
        ) :
        <Link to={action} className={style.linkToAction}><div className={`Item ${style.item_container}`}>{Title}</div></Link>
    )
}

export default Item