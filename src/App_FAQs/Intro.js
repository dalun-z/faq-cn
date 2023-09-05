import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_APP_Images/img_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>POS機常見問題解答</h1>
            <p>如App發生閃退問題，請參考<span style={{ textDecoration: 'underline', color: 'blue' }}><Link to='/web-faq-page'>POSTRON 後台管理常见问题解答</Link></span>中對應閃退情況的解答</p>
            <br />
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        a. 為POS機更改 POS機語言 或 商品顯示名稱
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            1. 點擊POS機主界面的‘設定’功能
                        </h3>
                        {getPics(1)}
                        <br/>
                        <h3>
                            2. 綠色圈起部分為更改POS機語言，藍色圈起部分為更改商品顯示名稱
                        </h3>
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        b. 為POS機鏈接店内不同的打印機
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>1. 點擊POS機主界面的‘設定’功能</h3>
                        {getPics(1)}
                        <br/>
                        <h3>2. 點擊‘Printer’按鍵跳轉至搜尋打印機界面</h3>
                        {getPics(3)}
                        <br/>
                        <h3>3. 點擊‘Search’按鍵搜尋已從後臺管理添加的打印機</h3>
                        {getPics(4)}
                        <br/>
                        <h3>4. 通過在同個局域網搜索的結果會顯示出找到打印機的IP地址</h3>
                        {getPics(5)}
                        <br/>
                    </span>
                </details>
            </div>
        </div>
    )
}

export default Intro;