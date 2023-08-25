import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';
import Modifier from '../Web_FAQs/Modifier';
import CategoryAndItem from '../Web_FAQs/CategoryAndItem';
import OrderMenu from '../Web_FAQs/OrderMenu';
import Combo from '../Web_FAQs/Combo';
import InvControl from '../Web_FAQs/InvControl';
import Tag from '../Web_FAQs/Tag';
import SpecSetting from '../Web_FAQs/SpecSetting';
import Pictures from '../Web_FAQs/Pictures';

import '../css/Layout.css'

const Postron_Web_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
        POS_Settings: <POS_Settings />,
        Modifier: <Modifier />,
        CategoryAndItem: <CategoryAndItem />,
        OrderMenu: <OrderMenu />,
        Combo: <Combo />,
        InvControl: <InvControl />,
        Tag: <Tag />,
        SpecSetting: <SpecSetting />,
        Pictures: <Pictures />,
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
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 自助點單 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 網絡點單 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 網絡訂單 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 訂單評價 </MenuItem>
                        </SubMenu>

                        <SubMenu label="優惠設置">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 優惠管理 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > Happy Hours </MenuItem>
                        </SubMenu>

                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>餐桌管理</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>打印機管理</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>員工管理</MenuItem>

                        <SubMenu label="會員管理">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 會員管理 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 推送管理 </MenuItem>
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