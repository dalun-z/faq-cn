import React from 'react'
import '../../css/Doc.css'

const Pictures = () => {
    const getPics = (num) => {
        return (
            <img alt=''
                className='doc-pics'
                src={require('../../images/POS_WEB_Images/pic/pic_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>圖片關係</h1>
            <h3>一個存放該店鋪所需的所有圖片的界面</h3>
            <h3>注意：該功能只支持上傳 .GIF 格式的圖片，請先將.PNG 與 .JPEG等格式轉換為.GIF后再進行上傳</h3>
            {getPics(1)}
        </div>
    )
}

export default Pictures;