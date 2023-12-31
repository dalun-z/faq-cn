import React from 'react'
import BoxContent from '../../global/BoxContent'

const Combo = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/combo/combo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>套餐設置</h1>
            <p>
                該界面是用于添加和更改套餐信息的。
            </p>
            <br />

            <h1>添加套餐</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 填寫表格中的必填信息，然後點擊右上角的‘新增套餐’按鍵
                    </span>
                    <span>
                        {getPics(1)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 網頁上方會出現‘保存成功’的提示，説明套餐新建完成
                    </span>
                    <span >
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 新建套餐完成後點擊左上方的‘套餐明細’按鍵來為該套餐添加菜品
                    </span>
                    <span>
                        {getPics(3)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        4. 跳轉至‘套餐明細’界面后，首先點擊‘添加層級’
                    </span>
                    <span >
                        {getPics(4)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        5. 填寫該層級的相關信息后提交。（層級名稱比如：‘主食’，‘飲品’，‘小菜’等等...）
                    </span>
                    <span >
                        {getPics(5)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        6. 層級添加完畢后，點擊右上角的加號為層級添加菜品
                    </span>
                    <span>
                        {getPics(6)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        7. 添加菜品至該層級
                    </span>
                    <span >
                        <h3>
                            1. 從上方區域選擇類別 <br />
                            2. 類別選擇完畢后會出現對應類別的菜品 <br />
                            3. 點擊’添加至商品層’，並選擇想要將單品加入的之前創建好的層級中
                        </h3>
                        {getPics(7)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        8. 添加完菜品后請記得點擊右上方的‘保存套餐’按鍵，否則操作將不會被保存
                    </span>
                    <span >
                        {getPics(8)}
                    </span>
                </BoxContent>

                <br /><br />

                <h1>更改存在的套餐</h1>
                <BoxContent>
                    <span>
                        1. 點擊圖中圈起的區域選擇已存在的套餐
                    </span>
                    <span >
                        {getPics(9)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 選擇套餐完畢后，選擇想要更改的信息（套餐信息，套餐明細）
                    </span>
                    <span >
                        {getPics(10)}
                    </span>
                </BoxContent>
            </div>
        </div>
    );
}

export default Combo;