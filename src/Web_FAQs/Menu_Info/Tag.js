import React from 'react'
import '../../css/Doc.css'

const Tag = () => {
    const getPics = (num) => {
        return (
            <img alt=''
                // style={{width:'800px'}}
                src={require('../../images/POS_WEB_Images/tag/tag_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>
                標簽是用於更快捷的區分單品的一種方式，跟類別有一點相似之處。
            </h3>
            <p>
                拿‘飲品’這個類別來打個比方，‘飲品’可能包含了熱飲，冷飲，咖啡，酒類等更細節的分類。<br />
                這時候只需要在‘飲品’下的單品中，加入細分后的標簽，就能在POS機上更快速的鎖定細分后的單品<br />
            </p> <br /> <br />

            <h1>添加標簽</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊界面右上方的加號按鍵添加新的標簽
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(1)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 填寫標簽的基本信息，可用顔色區分開不同功能的標簽
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(2)}
                    </span>
                </details>
            </div>

        </div>
    )
}

export default Tag;