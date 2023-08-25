import React from 'react'
import '../css/Doc.css'

const SpecSetting = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../images/POS_WEB_Images/spec/spec_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <h3>點擊右下方的加號按鍵來添加新的規格</h3>
            {getPics(1)}
            <br /> <br />

            <h1>將規格添加至菜品</h1>
            <div className="space-y-2">
            <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6" >
                        fasdfasfsad
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {/* Put The Content 1 Here  */}asdfsadfsadfsad
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        {/* Put The Header 2 Here  */}
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {/* Put The Content 2 Here  */}
                    </span>
                </details>
            </div>
        </div>
    )
}

export default SpecSetting;