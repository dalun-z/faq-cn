import React from "react";

const TableMap = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_WEB_Images/map/map_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>餐桌管理</h1>
            <h3>該界面主要是用於使用餐廳的平面圖進行管理餐桌，達到更直觀和方便的目的。該餐桌可在POS機端展現出來</h3> <br />

            <h1>管理餐桌</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊圖示位置管理餐桌
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(1)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 點擊右上角‘Add Table’添加桌面，以及‘Save’來保存操作
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>
            </div>
        </div>
    )
}

export default TableMap;