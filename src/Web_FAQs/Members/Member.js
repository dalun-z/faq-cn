import React from "react";

const Member = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/member/member_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>會員管理</h1>
            <h3>該界面直觀展示了所有注冊會員的個人信息，以及添加和管理會員的功能</h3>
            {getPics(1)} <br />

            <h1>注意</h1>
            <p>
                儅填寫或更改會員的 ‘聯係電話’ 和 ‘Email’ 時請注意，這兩項信息會跟推送通知的功能直接關聯 <br />
                儅推送選擇通過‘短信’時會發送到該填寫的‘聯係電話’號碼上 <br />
                儅推送選擇通過‘Email’時會發送到填寫的‘Email’郵箱上 <br />
                詳細解釋會在‘會員管理’下的‘推送管理’進行講解
            </p><br />
            {getPics(2)}
        </div>
    )
}

export default Member;