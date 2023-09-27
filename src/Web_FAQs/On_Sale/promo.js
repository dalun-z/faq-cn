import React from 'react'
import BoxContent from '../../global/BoxContent'

const Promo = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/promo/promo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>優惠管理</h1>
            <h3>該界面主要是添加以及管理店鋪的優惠活動</h3>
            {getPics(1)}

            <h1>添加新的優惠</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 點擊界面右上角的加號鍵來添加新的優惠活動
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 填寫該優惠活動的信息
                    </span>
                    <span>
                        <h3>
                            a. 優惠名稱：該優惠的顯示名稱 <br />
                            b. 優惠類型：<br />
                            &emsp; b.1. 滿減： 滿足消費一定數額可減免。如：滿20減5 <br />
                            &emsp; b.2. 買贈： 滿足購買一定數量可贈送。如：買2送1 <br />
                            &emsp; b.3. 折扣： 購買該單品就可以減少部分折扣 <br />
                            c. 是否二維碼優惠：打開后，顧客可展示二維碼給收銀員，收銀員通過掃描二維碼的方式實現為單品使用優惠
                        </h3>
                        {getPics(3)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. ‘是否二維碼優惠’ 與 ‘推送管理’ 的聯係
                    </span>
                    <span>
                        <h3>
                            儅打開‘是否二維碼優惠’后，會在所有優惠列表的右側‘操作’欄下看到有多出一個QR Code的圖片 <br />
                            <p className='note'>只有打開‘是否二維碼優惠’這個功能，才能夠在‘會員管理’下的‘推送管理’功能通過短信或Email推送該優惠給顧客</p>
                        </h3>
                        {getPics(6)}
                    </span>
                </BoxContent>
            </div>
        </div>
    )
}

export default Promo;