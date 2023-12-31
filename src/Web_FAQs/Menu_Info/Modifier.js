import React from 'react'
import BoxContent from '../../global/BoxContent'

const Modifier = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/mod/mod_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>改碼組設置</h1>
            <h3>改碼組可以爲不同的菜定製不同的選項.</h3>
            {getPics(1)} <br />
            <br />

            <h1>添加改碼組步驟：</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 點擊屏幕右上角的加號來創建新的改碼組
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 輸入改碼組的基本信息
                    </span>
                    <p>
                        a. 第一名稱與第二名稱為該改碼組的顯示名稱，跟POS機系統上的第一，第二名稱相對應 <br />
                        b. 最小選擇與最大選擇代表了這個改碼組的選擇次數的上限以及下限 <br />
                        c. ’是否可復選‘ 按鈕表示可以重複選擇該改碼組中的任一選項（默認每個選項只能選擇一次） <br />
                        {getPics(3)}
                        <br />
                    </p>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 最小選擇 與 最大選擇 詳細描述
                    </span>
                    <p>
                        以下圖為例：
                        {getPics(1)} <br />
                        <br />
                        ’辣度‘ 下方的 1-1 所表示的意思就是 <strong>最小選擇：1</strong> 以及 <strong>最大選擇：1</strong> <br />
                        也就是說，在這個辣度選項中，用戶只能選擇（不辣，小辣，中辣，大辣）選項中的一項 <br />
                        滿足條件后會自動跳轉到下一個改碼組 <br />
                        假如想設置該改碼組無限制次數要求的話，只需設置成0-0 <br />
                    </p>
                </BoxContent>

                <BoxContent>
                    <span>
                        4. 為該改碼組添加選項
                    </span>
                    <p>
                        以下圖為例：
                        {getPics(5)} <br />
                        <br />
                        點擊最右側的加號按鍵來為改碼組添加選項, 以下為彈窗 <br /> <br />
                        {getPics(4)}
                        <br />
                        此第一名稱與第二名稱也是跟系統裏的第一，第二名稱是想對應的。 <br />
                        類型可以選擇’無‘，’百分比‘ 以及 ’固定金額‘。<br />
                        <strong>無 ： </strong> 指該選項選擇后不需要顧客支付額外金錢，比如：加水 <br />
                        <strong>百分比 ： </strong> 指該選項選擇后需要額外支付原單品金額的百分比的價錢，比如：單品原價為$20，該選項百分比為20%，那麽選了此改碼組的選項后，單品最終價格為:$20*1.2=$24      <br />
                        <strong>固定金額 : </strong> 指該選項選擇后需要額外此選項的固定金額，比如：單品原價為$20,該選項固定金額為$5，那麽選擇了此改碼組該選項后，單品的最終價格為：$20+$5=$25   <br />
                    </p>
                </BoxContent>

                <BoxContent>
                    <span>
                        5. 更改改碼組及其選項
                    </span>
                    <p>
                        {getPics(6)} <br />
                        只需點擊改碼組或選項下方的按鍵
                    </p>
                </BoxContent>
            </div>
            <br /><br />
            <h1>設置改碼動作</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 點擊屏幕左上角的按鍵來添加或修改 改碼動作
                    </span>
                    <span>
                        {getPics(9)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 點擊下方的 ‘添加改碼動作’ 增加新的動作
                    </span>
                    <span>
                        {getPics(10)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 添加改碼動作后，將此動作加進需要此動作的改碼組選項
                    </span>
                    <span>
                        {getPics(7)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        4. 在該選項中，選擇需要啓用的改碼動作 <span className='note'>注意：只有啓用的改碼動作才能在POS機上使用，沒啓用的改碼動作會顯示為灰色</span>
                    </span>
                    <span>
                        {getPics(8)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        5. 在POS機中顯示的畫面，下方圈起的部分為 ‘改碼動作’ 的區域。顯示灰色説明沒有啓用
                    </span>
                    <span>
                        {getPics(11)}
                    </span>
                </BoxContent>
            </div>

        </div>
    )
}

export default Modifier;