import React from "react";
import BoxContent from "../global/BoxContent";

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
                <BoxContent>
                    <span>
                        1. 點擊圖示位置管理餐桌
                    </span>
                    <span>
                        {getPics(1)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 點擊右上角‘Add Table’添加桌面，以及‘Save’來保存操作
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>
            </div>
        </div>
    )
}

export default TableMap;