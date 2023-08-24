import React from 'react'
import '../css/Doc.css'

const Combo = () => {
    const getPics = (num) => {
        return (
            <img src={require('../images/POS_WEB_Images/combo/combo_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1>
            <p>
                這個界面是用于添加和更改套餐信息的。
            </p>
            <br />

            <h1>添加套餐</h1>
            <div className="space-y-2">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        {/* Put The Title 1 Here  */}
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">

                        {/* Put The Content 1 Here  */}

                    </span>
                </details>

                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        {/* Put The Title 2 Here  */}
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">

                        {/* Put The Content 2 Here  */}

                    </span>
                </details>
            </div>
        </div>
    );
}

export default Combo;