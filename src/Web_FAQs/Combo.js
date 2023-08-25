import React from 'react'
import '../css/Doc.css'

const Combo = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../images/POS_WEB_Images/combo/combo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <p>
                這個界面是用于添加和更改套餐信息的。
            </p>
            <br />

            <h1>添加套餐</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 填寫表格中的必填信息，然後點擊右上角的‘新增套餐’按鍵
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(1)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 網頁上方會出現‘保存成功’的提示，説明套餐新建完成
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 然後點擊左上方的‘套餐明細’按鍵來為該套餐添加菜品
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(3)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        4. 跳轉至‘套餐明細’界面后，首先點擊‘添加層級’
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(4)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        5. 填寫該層級的相關信息后提交。（層級名稱比如：‘主食’，‘飲品’，‘小菜’等等...）
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(5)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        6. 層級添加完畢后，點擊右上角的加號為層級添加菜品
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(6)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        7. 層級添加完畢后，點擊右上角的加號為層級添加菜品
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(6)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        8. 添加菜品至該層級
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>
                            1. 從上方區域選擇類別 <br />
                            2. 類別選擇完畢后會出現對應類別的菜品 <br />
                            3. 點擊’添加至商品層’，並選擇想要將單品加入的之前創建好的層級中
                        </h3>
                        {getPics(7)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        9. 添加完菜品后請記得點擊右上方的‘保存套餐’按鍵
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(8)}
                    </span>
                </details>


            </div>
        </div>
    );
}

export default Combo;