import React from 'react'
import '../css/Doc.css'

const Intro = () => {

    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../images/POS_WEB_Images/intro/intro_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <div className="bg-white">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h1 className="text-4xl font-semibold">
                        POSTRON 後台管理常见问题解答
                    </h1>
                    <p className="mt-6 mb-4 text-gray-600">
                        {/* 如有別的疑問請直接聯係POSTRON的技術人員 */}
                    </p>
                    <div className="space-y-2">
                        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                            <summary className="px-4 py-6">
                                a. 什麽是 <strong>第一名稱</strong> 與 <strong>第二名稱</strong>
                            </summary>
                            <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                                <p>
                                    {getPics(8)} <br />
                                    POSTRON的第一名稱與第二名稱都是相互對應的 <br />
                                    儅用戶在POS機上選擇顯示為 ’第一名稱‘ 時，相對應的語言就會顯示出來 <br />
                                    同時也可選擇打印機打印出來的收據展示的語言 <br /> <br />
                                    <span className='note'>
                                        請注意保持該店鋪的所有第一名稱和第二名稱的一致性 <br />
                                        比如：設置改碼組時設置第一名稱為中文，第二名稱為英文，儅設置菜品名稱時也請保持同一個順序 <br />
                                        同時，第一名具有唯一性，不能出現兩個相同第一名稱的單品（第二名稱可重複）
                                    </span> <br /> <br /> <br />
                                </p>
                                <h3>可在POS機中的‘設定’功能裏改變POS機所顯示的名稱</h3>
                                {getPics(9)}
                            </span>
                        </details>
                        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                            <summary className="px-4 py-6 note">
                                b. 在POS機上點擊POSTRON的App圖標后加載過程中發生的App閃退
                            </summary>
                            <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                                <h3>造成這種閃退的一般情況是該POS機無法讀取到菜單信息</h3>
                                <p>
                                    1. 檢查後臺管理的菜單是否有添加至該POS機 <br />
                                    2. 請先跳至‘POS機設定’界面 <br />
                                    {getPics(1)}
                                    <br />
                                    3. 點擊圖示位置
                                    {getPics(2)}
                                    <br />
                                    4. 選擇指定菜盤到該POS機上后，點擊提交
                                    {getPics(3)}
                                    5. 再重新嘗試一次查看是否還存在閃退的情況
                                </p>
                            </span>
                        </details>
                        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                            <summary className="px-4 py-6 note">
                                c. 在POS機上點擊<strong>‘堂食’</strong>功能后導致的App閃退
                            </summary>
                            <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                                <h3>造成這種閃退的一般情況是該POS機沒法讀取到餐桌的信息，或者餐桌并沒有建立</h3>
                                <p>
                                    1. 請跳至<strong>‘餐桌管理’</strong>界面
                                    {getPics(4)} <br />
                                    2. 確認是否已經有餐桌存在，如果沒有，請點擊右上方的加號健去創建一個新的餐桌
                                    {getPics(5)} <br />
                                    3. 輸入餐桌名稱以及該餐館的平面圖（支持 .PNG以及.JPEG等常見圖形文件）
                                    {getPics(6)}
                                </p>
                            </span>
                        </details>
                        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                            <summary className="px-4 py-6">
                                d. 圖片關係 - 無法上傳菜品的圖片（error：圖片不符合規定）
                            </summary>
                            <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                                <p>
                                    1. 錯誤情況：
                                    {getPics(7)} <br />
                                    2. 目前該功能只支持上傳 .GIF 格式的圖片 <br />
                                    3. 請先把 .PNG 以及 .JPEG 等圖片格式轉化成 .GIF 再上傳
                                </p>
                            </span>
                        </details>

                        <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                            <summary className="px-4 py-6">
                                e. 食物（套餐）已存在，無法添加。<span className='note'>該情況只針對用戶確定沒有存在（添加）過相同單品的情況</span>
                            </summary>
                            <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                                <p>
                                    1. 儅添加一個菜品或套餐時出現下圖的錯誤提示
                                    {getPics(10)} <br />
                                    2. 請點擊當前頁面的‘回收站’檢查一下是否有相同的菜品或套餐之前刪除過
                                    {getPics(11)} <br />
                                    3. ‘回收站’頁面會顯示出曾經刪除過的單品，可選擇‘還原’或‘清空’
                                    {getPics(12)}
                                </p>
                            </span>
                        </details>
                    </div>
                </div>
            </div>
        </div>

    )
};

export default Intro;