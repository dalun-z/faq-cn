import React from "react";
import BoxContent from "../global/BoxContent";

const Employee = () => {
    const getPics = (num, additionalStyle) => {
        return (
            <img
                alt=''
                className='doc-pics'
                style={additionalStyle}
                src={require('../images/POS_WEB_Images/employee/employee_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">
            <h1>員工管理</h1>
            <h3>該界面用於管理員工登錄信息以及員工基本信息</h3>
            {getPics(1)}
            {getPics(2)}
            <br />

            <h1>個別信息簡介</h1>
            <div className="space-y-2">
                <BoxContent>
                    <span>
                        員工組
                    </span>
                    <span>
                        <h3>員工組的相關權限是在‘系統設置’下的‘用戶組’建立的。用於區分不同權限員工對不同功能的使用</h3>
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        是否可登錄POS
                    </span>
                    <span>
                        <h3>此開關打開后并且給予PIN后，該員工就可使用PIN登錄POS機。關閉則無法使用</h3>
                    </span>
                </BoxContent>

                <BoxContent>
                    <span>
                        是否可登錄後臺
                    </span>
                    <span>
                        <h3>此開關打開后并且給予登錄信息后，該員工可使用該登錄信息登錄此網頁后臺管理界面</h3>
                    </span>
                </BoxContent>
            </div>
        </div>
    )
}

export default Employee;