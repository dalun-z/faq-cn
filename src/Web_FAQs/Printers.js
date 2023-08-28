import React from "react";

const Printers = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../images/POS_WEB_Images/printers/printer_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>概要</h1>
            <h3>該界面主要功能是添加和管理打印機</h3> <br />

            <h1>管理打印機</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊右上角添加新的打印機
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(1)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 填寫必填的打印機信息，POS機通過此處的MAC Address在LAN中尋找該打印機
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 添加打印機至單品（忽略此步驟可能會導致某些單品無法被打印出來）
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            1. 跳轉至‘菜品菜單’下的‘菜品類別設置’界面 <br/>
                            2. 選擇類別<br/>
                            3. 將所選類別的‘菜品’下方的選項條拉至最右側，勾選想要使用的打印機<br/>
                            4. 點擊保存<br/>
                        </h3>
                        {getPics(3)}
                    </span>
                </details>
            </div>
        </div>
    )
}

export default Printers;