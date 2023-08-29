import React from 'react'

const HappyHour = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/promo/promo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>該界面主要是添加以及管理店鋪的固定時間段的優惠活動</h3>
            {getPics(4)}

            <h3>添加新的優惠時間段</h3>
            <p style={{color: 'red'}}>
                需注意：此處‘優惠類型’的‘固定金額’選項為將要從優惠的單品原價中減去的金額
                <br/>如：‘固定金額’輸入為$2,單品原價為$14,那麽儅這個優惠時間段到后，該單品的售價為$12
            </p><br/>
            {getPics(5)}
        </div>
    )
}

export default HappyHour;