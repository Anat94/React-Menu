import React from 'react'
import style from './Item.module.css'
import { MdKeyboardArrowDown } from 'react-icons/md';


const Item = ({Title, type}) => {
    const [isClick, setIsClick] = React.useState(false)
  return (
        type === "dropdown" ?
            <div className={style.dropdownContainer}>
                <div className={style.item_container}>{Title}</div>
                <MdKeyboardArrowDown />
            </div>
        : type === "searchbar" ? (
            <>
                <div className={style.item_container} onClick={() => setIsClick(!isClick)}>{Title} </div>
                {
                    isClick && (
                        <div className={style.searchContainer}>
                            <div className={style.item_container} onClick={() => setIsClick(!isClick)}>{Title}</div>
                            <input className={style.searchBox} type="text" name="search_value" placeholder='Search ...' />
                        </div>
                    )
                }
            </>
        ) :
            <div className={style.item_container}>{Title}</div>
    )
}

export default Item