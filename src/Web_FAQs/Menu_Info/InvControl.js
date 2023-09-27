import React from 'react'
import BoxContent from '../../global/BoxContent'

const InvControl = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/inv/inv_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>庫存設置</h1>
            <p>該界面作用於管理單品的數量，用以方便記錄和觀察店鋪的庫存情況</p>
            {getPics(1)} <br />

            <h1>添加單品進入庫存</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 跳轉至‘菜品類別設置’界面
                    </span>
                    <span >
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 選擇需要進行庫存管理的類別，選擇需要庫存管理的單品
                    </span>
                    <span >
                        {getPics(3)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 點擊右上角的保存。<span className='note'>很重要的一個步驟，否則您的操作將不會被保存下來</span>
                    </span>
                    <span >
                        {getPics(4)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        4. 返回‘庫存管理’界面，這時就能看到剛剛所添加的單品已經加入了庫存管理（左側為類別名稱，右側為單品）
                    </span>
                    <span >
                        {getPics(5)}
                    </span>
                </BoxContent>
            </div> <br /><br />

            <h1>管理庫存單品</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 點擊需要調整庫存的單品
                    </span>
                    <span >
                        {getPics(6)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 輸入相關庫存信息
                    </span>
                    <span >
                        <p>
                            a. ‘當前庫存’ 為單品的目前庫存量，每銷售出該單品，當前庫存就會減少相應數量 <br />
                            b. ‘最大庫存’ 為單品可保留的最大庫存量<br />
                            c. ‘刷新類型’ 有四種：無，日，周，月（下面會單獨介紹）<br />
                            d. ‘刷新時間’ 為刷新當天的時間<br />
                        </p><br />
                        {getPics(7)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 刷新類型
                    </span>
                    <span >
                        <h3>日</h3> <br />
                        {getPics(8)} <br />
                        <h3>周</h3> <br />
                        {getPics(9)} <br />
                        <h3>月</h3> <br />
                        {getPics(10)} <br />
                    </span>
                </BoxContent>
            </div>
        </div>
    )
}

export default InvControl;