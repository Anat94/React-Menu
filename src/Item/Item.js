import React from 'react'
import style from './Item.module.css'


//type : dropdown, searchbar
const Item = ({Title, type}) => {
    const [isClick, setIsClick] = React.useState(false)
    console.log("type = ", type, " ", type === "searchbar");
  return (
        type === "dropdown" ?
            <div className={style.item_container}>{Title}</div>
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