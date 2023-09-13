import React from "react";

const Printers = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_WEB_Images/printers/printer_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>打印機管理</h1>
            <h3>該界面主要功能是添加和管理打印機</h3> <br />
            <p className="note">只需輸入該打印機的正確MAC地址即可，POS機會通過該MAC地址在網絡中找到並匹配該打印機</p>
            <br />
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
                        2. 填寫必填的打印機信息，POS機將會通過此處的MAC Address在LAN中尋找該打印機
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
                            1. 跳轉至‘菜品菜單’下的‘菜品類別設置’界面 <br />
                            2. 選擇類別<br />
                            3. 將所選類別的‘菜品’下方的選項條拉至最右側，勾選想要使用的打印機<br />
                            4. 點擊保存<br />
                        </h3>
                        {getPics(3)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        4. 打印機名稱 以及 ID
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>打印機ID</h3>
                        <p>打印機ID為系統自動分配的數字，從1開始每添加一個打印機就會自動添加，<br/>在‘菜品類別設置’界面中添加打印機就是以打印機ID為識別</p>
                        <p className="note">ID ‘-1’ 為POS機的内置打印機</p>
                        <h3>打印機名稱</h3>
                        <p>打印機名稱是爲了用戶方便區分每個打印機的用途和擺放位置</p>
                        {getPics(4)}
                    </span>
                </details>
            </div>
        </div>
    )
}

export default Printers;