import React from "react";

const dinein = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_APP_Images/dinein/dine_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>
                堂食
            </h1>
            <br />
            <h3>餐桌管理界面</h3>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        網格圖顯示
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(1)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        平面圖顯示
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>
            </div>
            <br /><br />

            <h3>點餐界面</h3>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        更改菜單目錄
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>1. 點擊屏幕頂部圈起的位置更換菜單</h3>
                        {getPics(3)}
                        <br />
                        <h3>2. 在下方選項想要更換的菜單</h3>
                        {getPics(4)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        平面圖顯示
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(4)}
                    </span>
                </details>
            </div>
        </div>
    )
};

export default dinein;