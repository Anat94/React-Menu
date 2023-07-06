import React from 'react'
import style from './Item.module.css'

const Item = ({Title}) => {
  return (
        <div className={style.item_container}>{Title}</div>
    )
}

export default Item