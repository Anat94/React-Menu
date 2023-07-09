import React from 'react'
import './NotFound.css'

const NotFound = () => {
    return (
        <>
            <div className='notFoundContainer'>
                <div className="notFoundContent">
                    <div className="display404">
                        <h1 className='text404'>4<span className='colorBlue'>0</span>4</h1>
                    </div>
                    <h2 className='title'>The page requested can not be found</h2>
                </div>
            </div>
        </>
    )
}

export default NotFound