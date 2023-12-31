import React from 'react'
import BoxContent from '../../global/BoxContent'

const Tag = () => {
    const getPics = (num) => {
        return (
            <img alt=''
                className='doc-pics'
                src={require('../../images/POS_WEB_Images/tag/tag_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>標簽管理</h1>
            <h3>
                標簽是用於更快捷的區分單品的一種方式，跟類別有一點相似之處。
            </h3>
            <p>
                拿‘飲品’這個類別來打個比方，‘飲品’可能包含了熱飲，冷飲，咖啡，酒類等更細節的分類。<br />
                這時候只需要在‘飲品’下的單品中，加入細分后的標簽，就能在POS機上更快速的鎖定細分后的單品<br />
            </p> <br />
            <br /> <br />

            <h1>添加標簽</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        1. 點擊界面右上方的加號按鍵添加新的標簽
                    </span>
                    <span>
                        {getPics(1)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        2. 填寫標簽的基本信息，可用顔色區分開不同功能的標簽
                    </span>
                    <span>
                        {getPics(2)}
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        3. 下圖為標簽在後臺管理的設置以及對應在POS機上展現的標簽界面
                    </span>
                    <span>
                        <h3>後臺管理的‘標簽管理’界面</h3>
                        {getPics(4)} <br />
                        <h3>POS機上對應的顯示界面</h3>
                        {getPics(3)}
                    </span>
                </BoxContent>
            </div>

        </div>
    )
}

export default Tag;