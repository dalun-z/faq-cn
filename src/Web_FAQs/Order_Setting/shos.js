import React from 'react'
import '../../css/Doc.css'

// Self Help Order Setting
// 自助點單
const Shos = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../../images/POS_WEB_Images/shos/shos_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>自助點單</h1>
            <h3>這個界面分爲兩個部分</h3>
            <p>
                1. 左邊（藍色框圈起的部分）為下載所選菜單的桌子二維碼，以及設置桌子二維碼的樣式 <br />
                2. 右邊（綠色框圈起的部分）為設置顧客掃完桌子二維碼下單后的餐廳的接受訂單的方式和支付方式
            </p>
            {getPics(1)} <br />

            <h1>菜單桌子二維碼</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 下載所選菜單的桌子二維碼
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>a. 選擇想要下載桌子二維碼的菜單</h3>
                        {getPics(2)} <br />
                        <h3>b. 選好菜單后，點擊右側的‘下載桌子二維碼’</h3>
                        {getPics(3)} <br />
                        <h3>c. 下載好的菜單是以壓縮.zip的格式保存到你的電腦，裏面會有對應每一個桌子（‘餐桌管理’中設置好的桌子）的QR Code</h3>
                        <p>下載好的.zip壓縮包中的餐桌QR Code文件</p>
                        {getPics(4)} <br/>
                        <p>以及對應的‘餐桌管理’的設置</p>
                        {getPics(5)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 設置顧客掃描桌子二維碼下單后餐廳接收訂單的方式
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(6)}
                        <h3>
                            a. 標記1號 ‘二維碼反掃’ 的設置是指顧客掃描二維碼下單完成后會出現一個QR Code，這時需要一個服務員來掃描這個QR Code來確定下單 <br/><br/>
                            b. 標記2號 ‘系統直接收單’ 的設置是指顧客掃描二維碼下單后可直接提交訂單，店鋪會在POS機上得到提示有新的訂單查收<br/><br/>
                            c. 標記3號 ‘在綫支付’ 功能打開后，顧客可在下單完成后直接在網頁上完成支付<br/><br/>
                            d. 標記4號 ‘外帶’ 功能打開后，顧客可在下單時選擇該訂單是外賣還是堂食<br/><br/>
                            e. 請在結束操作后點擊右上角的‘submit’按鈕以提交所完成的操作，否則將不會生效
                        </h3>
                    </span>
                </details>
            </div>
        </div>
    )
}

export default Shos;