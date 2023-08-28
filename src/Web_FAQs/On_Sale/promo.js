import React from 'react'

const Promo = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../../images/POS_WEB_Images/promo/promo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>該界面主要是添加以及管理店鋪的優惠活動</h3>
            {getPics(1)}

            <h1>添加新的優惠</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊界面右上角的加號鍵來添加新的優惠活動
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 填寫該優惠活動的信息
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
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
                </details>
            </div>
        </div>
    )
}

export default Promo;