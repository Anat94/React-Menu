import React from 'react'
import style from './NotFound.module.css'

const NotFound = () => {
    return (
        <>
            <div className={style.notFoundContainer}>
                <div className={style.notFoundContent}>
                    <div className={style.display404}>
                        <h1 className={style.text404}>4<span style={{color: '#00b7ff'}}>0</span>4</h1>
                    </div>
                    <h2 className={style.notFoundtitle}>The page requested can not be found</h2>
                </div>
            </div>
        </>
    )
}

export default NotFound