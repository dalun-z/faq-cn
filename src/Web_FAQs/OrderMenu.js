import React from 'react'
import '../css/Doc.css'

const OrderMenu = () => {
    const getPics = (num) => {
        return (
            <img src={require('../images/POS_WEB_Images/menu/menu_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>概要</h1> <br />
            <p>
                該界面主要是設置菜單，以及為菜單增添新的菜盤以及菜品。<br />
                設置好的菜單將會以同樣的順序展現在POS機上 <br />
                該界面主要分為兩個區塊：
                <br />&nbsp;&nbsp; 1. 綠色圈起的部分為菜單區塊，在這裏能添加新菜單或者為所選菜單新增單品
                <br />&nbsp;&nbsp; 2. 藍色圈起的部分為菜單信息區塊，展示所選菜單包含的所有菜盤和菜品
            </p>
            {getPics(1)}  <br /><br />



            <h1>菜單</h1>
            <div className="space-y-2">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊屏幕右上角的加號來創建新的菜單或編輯菜單
                    </summary>
                    <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(2)}
                    </p>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 添加菜單
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        <h3>添加菜單有兩種方式</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 1. 關閉複製菜單：該方式為創建一個全新的菜單，需要手動往菜單添加菜盤類別和菜品</h3>
                        {getPics(3)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 2. 開啓複製菜單：該方式可複製所選的菜單，所選菜單的所有内容將會複製到新建的菜單中</h3>
                        {getPics(4)}
                    </span>
                </details>
            </div>
            <br /> <br />



            <h1>菜單信息</h1>
            <div className="space-y-2">
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 基本菜單信息與功能
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        {getPics(5)}
                    </span>
                </details>
                <details className="w-full rounded-lg ring-1 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 添加新的菜盤
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        <h3>添加菜盤有兩種方式</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 1. 關閉複製菜品分類：該方式為創建一個全新的菜盤，需要手動往菜盤添加菜品</h3>
                        {getPics(6)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 2. 開啓複製菜品分類：該方式可直接添加所創建的‘菜品類別’中的所有菜品</h3>
                        {getPics(7)}
                    </span>
                </details>
            </div>
        </div>
    );
}

export default OrderMenu;