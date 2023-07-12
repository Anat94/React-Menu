import React from 'react'
import style from './Item.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md';
import { Link } from "react-router-dom";


const Item = ({title, type, action, setItemDisplayed = false}) => {
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
                <div>{title}</div>
                <MdKeyboardArrowDown />
            </div>
            {/* // TODO: Find a way to display dropdown menu outside of the menu */}
        </>
        : type === "searchbar" ? (
            <>
                {
                    isClick ? (
                        <div className={style.searchContainer}>
                            <input className={style.searchBox} type="text" name="search_value" placeholder='Search ...' />
                            <div className={style.item_container} onClick={hideItem}>{title}</div>
                        </div>
                    ) :
                    <div className={style.item_container} onClick={displayItem}>{title} </div>
                }
            </>
        ) :
        <Link to={action} className={style.linkToAction}><div className={style.item_container}>{title}</div></Link>
    )
}

export default Item