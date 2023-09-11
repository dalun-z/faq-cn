import React from 'react'
import '../../css/Doc.css'

const OrderMenu = () => {
    const getPics = (num) => {
        return (
            <img alt='' className='doc-pics' src={require('../../images/POS_WEB_Images/menu/menu_' + num + '.png')} />
        )
    }

    return (
        <div className='doc-content'>
            <h1>菜單設置</h1>
            <p>
                該界面主要是設置菜單，以及為菜單增添新的菜盤以及菜品。<br />
                設置好的菜單將會以同樣的順序展現在POS機上 <br />
                該界面主要分為兩個區塊：
                <br />&nbsp;&nbsp; 1. 綠色圈起的部分為菜單區塊，在這裏能添加新菜單或者為所選菜單新增單品
                <br />&nbsp;&nbsp; 2. 藍色圈起的部分為菜單信息區塊，展示所選菜單包含的所有菜盤和菜品
            </p>
            {getPics(1)}  <br /><br />
            <p>下圖為POS機展示的界面與順序：</p>
            {getPics(11)}  <br /><br />

            <h1>菜單</h1>
            <div className="space-y-2">
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊屏幕右上角的加號來創建新的菜單或編輯菜單
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 添加菜單
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
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
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 基本菜單信息與功能
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(5)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 添加新的菜盤
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>添加菜盤有兩種方式</h3>
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 1. 關閉複製菜品分類：該方式為創建一個全新的菜盤，需要手動往菜盤添加菜品</h3>
                        {getPics(6)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 2. 開啓複製菜品分類：該方式可直接自動添加所選的‘菜品類別’中的所有菜品到新建的菜盤中</h3>
                        {getPics(7)}
                    </span>
                </details>

                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 改變菜盤或菜品的展示順序
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 1.將鼠標放在想要改變位置的菜盤上，這個例子中我們將鼠標放在‘商品’這個菜盤上</h3>
                        {getPics(8)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 2. 按住鼠標左鍵，不要鬆開，然後輕輕滑動一下鼠標，此時圖標應變成淡綠色，并且該菜盤可隨意拖動</h3>
                        {getPics(9)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 3. 繼續按住鼠標左鍵，將該菜盤拖拽到想要放置的位置</h3>
                        {getPics(10)}
                        <br />
                        <h3>&nbsp;&nbsp;&nbsp;&nbsp; 4. 對想要改變位置的菜品使用上述1-3同樣的方式即可</h3>
                    </span>
                </details>
            </div>
        </div>
    );
}

export default OrderMenu;