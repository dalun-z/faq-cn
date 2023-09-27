import React from "react";
import BoxContent from "../global/BoxContent";

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
                <BoxContent>
                    <span>
                        網格圖顯示
                    </span>
                    <span>
                        {getPics(1)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        平面圖顯示
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>
            </div>
            <br /><br />

            <h3>點餐界面</h3>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        更改菜單目錄
                    </span>
                    <span>
                        <h3>1. 點擊屏幕頂部圈起的位置更換菜單</h3>
                        {getPics(3)}
                        <br />
                        <h3>2. 在下方選項想要更換的菜單</h3>
                        {getPics(4)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        平面圖顯示
                    </span>
                    <span>
                        {getPics(4)}
                    </span>
                </BoxContent>
            </div>
        </div>
    )
};

export default dinein;