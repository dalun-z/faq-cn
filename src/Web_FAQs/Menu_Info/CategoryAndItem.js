import React from 'react'
import '../../css/Doc.css'

const CategoryAndItem = () => {

    const getPics = (num) => {
        return (
            <img 
                alt='' 
                className='doc-pics'
                src={require('../../images/POS_WEB_Images/category/cat_' + num + '.png')} 
            />
        )
    }

    return (
        <div className='doc-content'>
            <h1>菜品類別設置 </h1>
            <p>這個界面主要分爲兩個部分，上半部分（用綠框圈起的部分）為類別，下半部分（用藍框圈起的部分）為該類別對應的菜品</p> <br />
            {getPics(1)} <br />
            <br/>
            <p>
                界面最右上角的位置有三個按鍵，分別為‘添加’，’導入‘和‘導出’。 <br/>
                添加會在下方詳細提到，這裏主要講解一下‘導入’和‘導出’的功能。 <br/>
                ‘導出’功能可以以Excel表格的形式導出當前的菜單組， <br/>
                如有別的店面需要相同的菜單的話就可以將‘導出’的菜單直接‘導入’到新建的店鋪，<br/>
                省去重複輸入菜單的步驟。
            </p>
            {getPics(7)}
            <br/> <br/>
            <h1>類別</h1>
            <h3>添加類別步驟：</h3>
            <div className="space-y-2">
            <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊屏幕右上角的加號來創建新的類別
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(2)}
                    </span>
                </details>
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 輸入類別的基本信息然後點擊提交
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(3)}
                        <br />
                    </span>
                </details>
            </div>
            <br />

            <h1>菜品</h1>
            <h3>添加菜品步驟：</h3>
            <div className="space-y-2">
            <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        1. 點擊想要添加菜品的類別
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(4)}
                    </span>
                </details>
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        2. 點擊菜品部分的右上角的加號來為該類別添加新的菜品
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        {getPics(5)}
                        <br />
                    </span>
                </details>
                <details className="w-10/12 rounded-lg ring-2 ring-purple-600">
                    <summary className="px-4 py-6">
                        3. 菜品設置的詳細解釋（帶*號為必填項）
                    </summary>
                    <span className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600 box-content">
                        <h3>厨顯名稱</h3>
                        <p>此名稱將被後厨的打印機隨著訂單詳情打印出來是用以顯示在後厨以方便不同語言的厨師能夠理解</p> <br />

                        <h3>UPC 條碼</h3>
                        <p>
                            單品條形碼 <br />
                            <span className='note'>*UPC條碼具有唯一性，不能有重複相同的條碼</span>
                        </p> <br />

                        <h3>描述信息</h3>
                        <p>對該菜品的詳細描述</p> <br />

                        <h3>銷售單位（必填）</h3>
                        <p>該選項決定了該菜品將以什麽樣的單位出售。比如說按個，按磅，按公斤等等...</p> <br />

                        <h3>成本</h3>
                        <p>為該單品的製作成本</p> <br />

                        <h3>售價（必填）</h3>
                        <p>該單品的售價</p> <br />

                        <h3>默認折扣</h3>
                        <p>為該單品的售價的折扣，會自動計算到最終售價上</p> <br />

                        <h3>是否允許積分兌換</h3>
                        <p>打開后允許顧客使用積分兌換該單品</p> <br />

                        <h3>是否允許優惠</h3>
                        <p>打開后，允許收銀員（服務員）對該單品使用任何激活的優惠卷，可在<span style={{ color: 'red' }}>優惠設置</span>界面進行設置</p> <br />

                        <h3>打開價格</h3>
                        <p>激活後，該單品的售價將會失效，每次下單該單品時需要手動輸入金額，輸入的金額將由收銀員自己決定</p> <br />

                        <h3>是否允許改價</h3>
                        <p>激活后，允許收銀員去更改該單品的價格</p> <br />

                        <h3>是否庫存管理</h3>
                        <p>打開后，將該單品的銷售數量加入後臺庫存計算，每出售一單將會相對應的後臺庫存減少，可在<span style={{ color: 'red' }}>庫存管理</span>一欄進行設置</p> <br />

                        <h3>是否按單位銷售</h3>
                        <p>打開后，每次下單該單品都需要手動輸入單品的單位數量</p> <br />

                        <h3>算稅</h3>
                        <p>為該單品的稅率，可在<span style={{ color: 'red' }}>費用管理</span>界面進行設置</p> <br />

                        <h3>出單打印機</h3>
                        <p>設置該單品從哪個打印機打出收據，可在<span style={{ color: 'red' }}>打印機管理</span>界面進行設置</p> <br />

                        <h3>自定義標簽</h3>
                        <p>為單品自定義各種標簽以便收銀員（服務員）進行快速查找該單品並下單，可在<span style={{ color: 'red' }}>標簽管理</span>一欄進行設置</p> <br />

                        <h3>改碼組</h3>
                        <p>為該單品設置各種額外選項，可在<span style={{ color: 'red' }}>改碼組設置</span>一欄進行設置</p> <br />

                        <h3>圖片</h3>
                        <p>
                            為該單品添加圖片，可在<span style={{ color: 'red' }}>圖片關係</span>一欄進行設置 <br />
                            <span className='note'>*圖片僅支持 .GIF 格式</span>
                        </p> <br />

                        <h3>菜品規格</h3>
                        <p>
                            該設置可為單品賦予’多選一‘的功能，比如麵條，那麽規格設置可為’牛肉‘，’鷄肉’或‘豬肉’, <br/>
                            那麽收銀員在給該單品下單時，POS機會强制要求從’牛肉‘，’鷄肉’或‘豬肉’中選其中一個來給麵條這個單品下單
                        </p> <br />

                        <br /> <br />
                        {getPics(6)}
                    </span>
                </details>
            </div>
        </div>
    )
}

export default CategoryAndItem;