import React from 'react'
import '../../css/Doc.css'

const SpecSetting = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/spec/spec_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>點擊右下方的加號按鍵來添加新的規格</h3>
            {getPics(1)}
            <br /> <br />

            <h1>將規格添加至菜品</h1>
            <div className="space-y-2">
            <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6" >
                        1. 跳轉至‘菜單類別設置’界面
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 選擇類別，然後雙擊想要添加規格的單品
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(3)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 點擊圈起部分的‘商品規格’，然後選擇想要添加入該單品的規格。比如：此處將為‘炒飯’單品添加‘牛肉’，‘豬肉’和‘鷄肉’規格
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(4)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        4. 可以為每個規格設置價格
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            例如：‘鷄肉’規格的費用設置的是‘$1.00’，這代表了‘鷄肉炒飯’需要在‘炒飯’的基礎上再加$1.00
                            <br/>同理牛肉炒飯要貴$2.00，豬肉炒飯不加錢，原價
                        </h3>
                        {getPics(6)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        5. 選擇完畢后點擊提交
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(5)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        6. 圖爲在POS機上展示的規格對應的界面以及其價格變化
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(7)}
                        {getPics(8)}
                    </span>
                </details>

                
            </div>
        </div>
    )
}

export default SpecSetting;