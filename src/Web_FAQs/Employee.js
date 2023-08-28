import React from "react";

const Employee = () => {
    const getPics = (num) => {
        return (
            <img alt='' src={require('../images/POS_WEB_Images/employee/employee_' + num + '.png')} />
        )
    }

    return (
        <div className="doc-content">   
            <h1>概要</h1>
            
        </div>
    )
}

export default Employee;