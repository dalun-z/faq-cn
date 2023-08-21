import React from 'react'

const POS_Settings = () => {
    const getPics = (num) => {
        return (
            <img src={require('../images/POS_WEB_Images/pos_setting/ps_' + num + '.png')} />
        )
    }

    return (
        <div>
            <h1>概要</h1>
            <h3>‘POS機設定’ 是提供給店長或經理去管理POS機在每個門店的狀態：</h3>
            <p>1. 查看每個POS機器的使用狀態. <br />
                2. 改POS機的名字或者添加備註. <br />
                3. 設置一個POS機成爲那家門店的主機 (每家門店只允許存在一臺主機). <br />
                4. 設置POS機是否允許離線使用. <br />
                5. 查看POS機機型. <br />
                6. 查看POS機激活狀態. <br />
                7. 更改POS機界面和菜單讀取. <br />
            </p>
            <br />

            <h1>界面</h1>
            {getPics(1)}
            <br />
            <h3>狀態: </h3>
            <p>
                ▶橘色代表正在使用 <br />
                ▶灰色代表沒在使用
            </p>
            <br />
            <h3>操作:</h3>
            <p>
                ■ 操作下方的第一個圖標是 ‘POS界面設定’ 可以設定不同界面的顯示設定， 點開后會有三個視窗 <br />
                <br />
            </p>
            <div className="space-y-2">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        門店pos主界面模塊設定
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(2)} <br />
                        在啓動POS機時，改屏幕作爲主要界面。您可以通過拖拽和拉動圖標輕鬆地將它們安排到您喜歡的位置。<br />
                        通過將圖標拖放到左側，您可以自定義最合適你店鋪的功能。如果你不打算使用某些功能，您可以把相應的功能拖拽到右側 <br />
                    </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        門店POS訂單模塊設定
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(3)} <br />
                        當收銀員在POS上爲顧客下訂單時，該屏幕作爲菜單部分的操作欄。爲了根據使用頻率組織圖標，只需將它們從左上角拖動到右下角。 <br />
                        將最常用的操作放在左上角，將最少使用的操作放在右下角。如果有任何您不打算使用的操作，您可以將它們的圖標拖放到右側。<br />
                        通過這種方式，您可以根據自己的特定需求定製操作欄，以優化效率
                        <br />
                    </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        門店pos付款模塊設定
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(4)} <br />
                        ▶當您在操作欄中選擇“結算”功能時，該屏幕將顯示各種支付方式，供顧客結算賬單使用。<br />
                        ▶要自定義支付選項，您可以將圖標拖放到右側，如果您不打算使用某些支付方式。<br />
                        ▶“自定義1/2/3”按鈕爲商家提供了設置顧客的替代支付方式的靈活性。例如，顧客可以使用積分來支付訂單，<br />
                        而不是使用現金或信用卡。這些可定製的按鈕使企業能夠根據獨特的顧客偏好和忠誠計劃定製支付選項。
                        <br />
                    </p>
                </details>
                <br/>
                <p>
                    ■ 第二個圖標代表“菜單”功能，允許用戶爲所選的POS設置特定的菜單。但是，需要注意的是，<br />
                    POS用戶可以根據需要選擇並切換到POS機器上提供的其他菜單。這提供了根據要求或產品變更的便利，<br />
                    使用戶在管理POS機器上的菜單時更加具有控制性和適應性。用戶可以根據需求靈活地訪問不同的菜單。 <br />
                    <br />
                    {getPics(5)}
                </p>
            </div>
        </div>
    );
};

export default POS_Settings;