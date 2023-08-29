import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Layout from '../Routes/Layout';
import '../css/Layout.css'
import '../css/Doc.css'

import POS_Settings from '../Web_FAQs/POS_Settings';

import Intro from '../Web_FAQs/Menu_Info/Intro';
import Modifier from '../Web_FAQs/Menu_Info/Modifier';
import CategoryAndItem from '../Web_FAQs/Menu_Info/CategoryAndItem';
import OrderMenu from '../Web_FAQs/Menu_Info/OrderMenu';
import Combo from '../Web_FAQs/Menu_Info/Combo';
import InvControl from '../Web_FAQs/Menu_Info/InvControl';
import Tag from '../Web_FAQs/Menu_Info/Tag';
import SpecSetting from '../Web_FAQs/Menu_Info/SpecSetting';
import Pictures from '../Web_FAQs/Menu_Info/Pictures';

import Shos from '../Web_FAQs/Order_Setting/shos';
import Wol from '../Web_FAQs/Order_Setting/wol';
import Wos from '../Web_FAQs/Order_Setting/wos';
import OrderReview from '../Web_FAQs/Order_Setting/orderReview';

import Promo from '../Web_FAQs/On_Sale/promo';
import HappyHour from '../Web_FAQs/On_Sale/happyHour';

import TableMap from '../Web_FAQs/Table_Map';
import Printers from '../Web_FAQs/Printers';
import Employee from '../Web_FAQs/employee';

import Member from '../Web_FAQs/Members/Member';
import Push from '../Web_FAQs/Members/Push';

const Postron_Web_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        POS_Settings: <POS_Settings />,

        Intro: <Intro />,
        Modifier: <Modifier />,
        CategoryAndItem: <CategoryAndItem />,
        OrderMenu: <OrderMenu />,
        Combo: <Combo />,
        InvControl: <InvControl />,
        Tag: <Tag />,
        SpecSetting: <SpecSetting />,
        Pictures: <Pictures />,

        shos: <Shos />,
        wol: <Wol />,
        wos: <Wos />,
        OrderReview: <OrderReview />,

        Promo: <Promo />,
        HappyHour: <HappyHour />,

        TableMap: <TableMap />,
        Printers: <Printers />,
        Employee: <Employee />,

        Member: <Member />,
        Push: <Push />,

    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    var bgColor = '#ebf3be'

    const commonItemStyles = {
        backgroundColor: bgColor,
        button: {
            '&:hover': {
                backgroundColor: '#ef8d32',
                color: 'brown',
                transition: 'background-color 0.4s ease',
            },
        },
    };

    return (
        <Layout
            sidebar={
                <Sidebar>
                    <Menu menuItemStyles={commonItemStyles} rootStyles={{ backgroundColor: bgColor, height: '1500px', paddingTop: '15px', paddingLeft: '10px' }}>
                        <MenuItem onClick={() => handleContentChange('Intro')}>常見問題匯總</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>POS機設定</MenuItem>

                        <SubMenu label="菜品菜單">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 改碼組設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('CategoryAndItem')} > 菜品類別設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('OrderMenu')} > 菜單設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Combo')} > 套餐設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('InvControl')} > 庫存設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Tag')} > 標簽管理 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Pictures')} > 圖片關係 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('SpecSetting')} > 規格設定 </MenuItem>
                        </SubMenu>

                        <SubMenu label="點單設置">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('shos')} > 自助點單 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('wos')} > 網絡點單 </MenuItem>
                            {/* <MenuItem style={commonItemStyles} onClick={() => handleContentChange('wol')} > 網絡訂單 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('OrderReview')} > 訂單評價 </MenuItem> */}
                        </SubMenu>

                        <SubMenu label="優惠設置">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Promo')} > 優惠管理 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('HappyHour')} > Happy Hours </MenuItem>
                        </SubMenu>

                        <MenuItem onClick={() => handleContentChange('TableMap')}>餐桌管理</MenuItem>
                        <MenuItem onClick={() => handleContentChange('Printers')}>打印機管理</MenuItem>
                        <MenuItem onClick={() => handleContentChange('Employee')}>員工管理</MenuItem>

                        <SubMenu label="會員管理">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Member')} > 會員管理 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Push')} > 推送管理 </MenuItem>
                        </SubMenu>

                        <SubMenu label="費用管理">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 稅費設定 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 小費設定 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 其他費用設定 </MenuItem>
                        </SubMenu>

                        <SubMenu label="統計報表">

                        </SubMenu>

                        <SubMenu label="系統設置">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 門店評論 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 基本設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 用戶組 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 單據打印模板 </MenuItem>
                        </SubMenu>
                    </Menu>
                </Sidebar>
            }
            mainContent={
                contentMap[content]
            }
        />

    );
};

export default Postron_Web_FAQ;