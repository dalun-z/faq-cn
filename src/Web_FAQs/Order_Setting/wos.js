import React from 'react'
import '../../css/Doc.css'

// WEB Order Setting
// 網絡點單
const Wos = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../../images/POS_WEB_Images/wos/wos_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>該界面非爲6個部分：</h3>
            <p>
                1. 選擇菜單進行網上點單的設置 <br/>
                2. 設置顧客在網上點單的一些基礎設置 <br/>
                3. 網上支付的加密設置 <br/>
                4. 網上點單的網頁鏈接<br/>
                5. 網頁點單時的滾動顯示的圖片<br/>
                6. 鏈接到用戶已有的社交平臺賬號
            </p>
            {getPics(1)}
        </div>
    )
}

export default Wos;