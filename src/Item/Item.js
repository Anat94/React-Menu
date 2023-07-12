import React from 'react'
import style from './Item.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";


const Item = ({Title, type, action, setItemDisplayed = false}) => {
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
            {/* TODO: Find a way to display dropdown menu outside of the menu */}
        </>
        : type === "searchbar" ? (
            <>
                {
                    isClick ? (
                        <div className={style.searchContainer}>
                            <input className={style.searchBox} type="text" name="search_value" placeholder='Search ...' />
                            <div className={style.item_container} onClick={hideItem}>{Title}</div>
                        </div>
                    ) :
                    <div className={style.item_container} onClick={displayItem}>{Title} </div>
                }
            </>
        ) :
        <Link to={action} className={style.linkToAction}><div className={style.item_container}>{Title}</div></Link>
    )
}

export default Item