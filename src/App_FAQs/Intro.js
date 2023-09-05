import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {

    return (
        <div className="doc-content">
            <h1>POS機常見問題解答</h1>
            <p>如App發生閃退問題，請參考<span style={{ textDecoration: 'underline', color: 'blue' }}><Link to='/web-faq-page'>POSTRON 後台管理常见问题解答</Link></span>中對應閃退情況的解答</p>
            <br />
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        {/* Put The Header 1 Here  */}
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {/* Put The Content 1 Here  */}
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

export default Intro;