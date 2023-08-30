import React from "react";
import { Link } from 'react-router-dom';

const Intro = () => {

    return (
        <div className="doc-content">
            <h1>POS機常見問題解答</h1>
            <p>如App發生閃退問題，請參考<span style={{textDecoration: 'underline', color:'blue'}}><Link to='/web-faq-page'>POSTRON 後台管理常见问题解答</Link></span>中對應閃退情況的解答</p>

            
        </div>
    )
}

export default Intro;