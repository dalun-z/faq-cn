import React from "react";

const Push = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/push/push_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>概要</h1>
            <h3>該界面主要功能是記錄已推送的消息以及推送新的消息給注冊的會員</h3>
            {getPics(1)} <br />

            <h1>推送内容講解</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 普通推送
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            普通推送 為發送一些實時信息或問候信息，比如：有顧客遺失手機或錢包在餐廳裏，就可以通過此方式通知顧客 <br />
                        </h3> <br/>
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 優惠推送
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            優惠推送 為發送新推出的或正在進行的優惠活動通過短信或Email的形式給會員們 <br />
                            會員會在短信或Email中收到該優惠的QR Code，然後來到餐廳給服務員掃描該QR Code來參加優惠打折活動
                        </h3>
                        {getPics(3)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 選擇發送的會員範圍
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            a. ‘全部會員’ 是指在‘會員管理’界面中的所有會員 <br />
                            b. ‘選中會員’ 是指在‘會員管理’界面中的所有會員中選擇一部分出來發送該信息推送<br />
                            &ensp; b.1. 點擊圈起部分添加想要發送該信息推送的會員<br />
                            {getPics(4)}
                            &ensp; b.2. 勾選想要選擇的會員，然後點擊提交<br />
                            {getPics(5)}
                            &ensp; b.3. 添加的會員會顯示在下方圈起的部分<br />
                            {getPics(6)}
                        </h3>
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        4. 選擇優惠
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            此處來選擇進行推廣的優惠 <br />
                            {getPics(7)}
                            <span style={{color:'red'}}>注意，此處所能選擇的優惠，必須在‘優惠設置’下的‘優惠管理’界面開啓‘是否二維碼優惠’功能</span>
                            {getPics(8)}
                        </h3> <br/> 
                        <p>
                            a. 如果該優惠已經開啓了‘是否二維碼優惠’功能，那麽在‘操作’欄下方除了‘刪除’按鍵，會在旁邊顯示一個QR Code的按鍵 <br />
                            b. 將鼠標放在所選優惠的區域，雙擊打開該優惠的詳情可更改‘是否二維碼優惠’功能的開啓情況
                        </p>
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        5. 使用次數 ； 次/每人
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            使用次數： 為該推送優惠的總共允許被使用的次數 <br />
                            次/每人： 為允許每個人使用該優惠的次數
                        </h3> <br/>
                    </span>
                </details>
            </div>
        </div>
    )
}

export default Push;