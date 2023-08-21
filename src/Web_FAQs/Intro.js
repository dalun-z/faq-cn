import React from 'react'
import '../css/Doc.css'

const Intro = () => {

    const getPics = (num) => {
        return (
            <img src={require('../images/POS_WEB_Images/intro/intro_'+num+'.png')}/>
        )
    }

    return (
        <div>
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-4xl font-semibold">
                    POSTRON 後台管理常见问题解答
                    </h2>
                    <p className="mt-6 mb-4 text-gray-600">
                        {/* 如有別的疑問請直接聯係POSTRON的技術人員 */}
                    </p>
                    <div className="space-y-2">
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                a. 點擊POSTRON的App圖標后加載過程中發生的App閃退
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                1. 檢查後臺管理的菜單是否有添加至該POS機 <br/>
                                2. 請先跳至‘POS機設定’界面 <br/>
                                {getPics(1)}
                                <br/>
                                3. 點擊圖示位置
                                {getPics(2)}
                                <br/>
                                4. 選擇指定菜盤到該POS機上
                                {getPics(3)}
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                b. 點擊<strong>‘堂食’</strong>功能后導致的App閃退
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                1. 請跳至<strong>‘餐桌管理’</strong>界面
                                {getPics(4)} <br/>
                                2. 確認是否已經有餐桌存在，如果沒有，請點擊右上方的加號健去創建一個新的餐桌
                                {getPics(5)} <br/>
                                3. 輸入餐桌名稱以及該餐館的平面圖（支持 .PNG以及.JPEG等常見圖形文件）
                                {getPics(6)}
                            </p>
                        </details>
                        <details className="w-full rounded-lg ring-1 ring-purple-600">
                            <summary className="px-4 py-6">
                                c. 圖片關係 - 無法上傳菜品的圖片（error：圖片不符合規定）
                            </summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                                1. 錯誤情況：
                                {getPics(7)} <br/>
                                2. 目前該功能只支持上傳 .GIF 格式的圖片 <br/>
                                3. 請先把 .PNG 以及 .JPEG 等圖片格式轉化成 .GIF 再上傳
                            </p>
                        </details>
                    </div>
                </div>
                </div>
        </div>

    )
};

export default Intro;