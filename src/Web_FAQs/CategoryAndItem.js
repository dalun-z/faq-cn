import React from 'react'
import '../css/Doc.css'

const CategoryAndItem = () => {
    const getPics = (num) => {
        return (
            <img src={require('../images/POS_WEB_Images/category/cat_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            
        </div>
    )
}

export default CategoryAndItem;