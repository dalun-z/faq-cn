import React from 'react'
import BoxContent from '../../global/BoxContent'

const SpecSetting = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/spec/spec_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>規格設定</h1>
            <h3>點擊右下方的加號按鍵來添加新的規格</h3>
            {getPics(1)}
            <br /> <br />

            <h1>將規格添加至菜品</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 跳轉至‘菜單類別設置’界面
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 選擇類別，然後雙擊想要添加規格的單品
                    </span>
                    <span>
                        {getPics(3)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 點擊圈起部分的‘商品規格’，然後選擇想要添加入該單品的規格。比如：此處將為‘炒飯’單品添加‘牛肉’，‘豬肉’和‘鷄肉’規格
                    </span>
                    <span>
                        {getPics(4)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        4. 可以為每個規格設置價格
                    </span>
                    <span>
                        <h3>
                            例如：‘鷄肉’規格的費用設置的是‘$1.00’，這代表了‘鷄肉炒飯’需要在‘炒飯’的基礎上再加$1.00
                            <br />同理牛肉炒飯要貴$2.00，豬肉炒飯不加錢，原價
                        </h3>
                        {getPics(6)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        5. 選擇完畢后點擊提交
                    </span>
                    <span>
                        {getPics(5)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        6. 圖爲在POS機上展示的規格對應的界面以及其價格變化
                    </span>
                    <span>
                        {getPics(7)}
                        {getPics(8)}
                    </span>
                </BoxContent>
            </div>
        </div>
    )
}

export default SpecSetting;