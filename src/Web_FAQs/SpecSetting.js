import React from 'react'
import '../css/Doc.css'

const SpecSetting = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../images/POS_WEB_Images/spec/spec_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
        </div>
    )
}

export default SpecSetting;