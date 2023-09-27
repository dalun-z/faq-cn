import React from "react";
import { Link } from 'react-router-dom';
import BoxContent from "../global/BoxContent";

const Intro = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_APP_Images/img_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                <h1 className="text-4xl font-semibold">
                    POS機常見問題解答
                </h1>

                <p className="note">如App發生閃退問題，請參考<span style={{ textDecoration: 'underline', color: 'blue' }}><Link to='/faq-cn/web-faq-page'>POSTRON 後台管理常见问题解答</Link></span>中對應閃退情況的解答</p>
                <br />
                <div className="space-y-2">
                    <BoxContent>
                        <span>
                            a. 為POS機更改 POS機語言 或 商品顯示名稱
                        </span>
                        <span>
                            <h3>
                                1. 點擊POS機主界面的‘設定’功能
                            </h3>
                            {getPics(1)}
                            <br />
                            <h3>
                                2. 綠色圈起部分為更改POS機語言，藍色圈起部分為更改商品顯示名稱
                            </h3>
                            {getPics(2)}
                        </span>
                    </BoxContent>

                    <BoxContent>
                        <span>
                            b. 為POS機鏈接店内不同的打印機
                        </span>
                        <span>
                            <h3>1. 點擊POS機主界面的‘設定’功能</h3>
                            {getPics(1)}
                            <br />
                            <h3>2. 點擊‘Printer’按鍵跳轉至搜尋打印機界面</h3>
                            {getPics(3)}
                            <br />
                            <h3>3. 點擊‘Search’按鍵搜尋已從後臺管理添加的打印機</h3>
                            {getPics(4)}
                            <br />
                            <h3>4. 通過在同個局域網搜索的結果會顯示出找到打印機的IP地址</h3>
                            {getPics(5)}
                            <br />
                            <h3>5. 搜索完畢后點擊‘確認’，打印機會自動鏈接上POS機</h3>
                            <br />
                        </span>
                    </BoxContent>
                </div>
            </div>
        </div>
    )
}

export default Intro;