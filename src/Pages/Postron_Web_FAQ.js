import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';
import Modifier from '../Web_FAQs/Modifier'
import CategoryAndItem from '../Web_FAQs/CategoryAndItem';
import '../css/Layout.css'

const Postron_Web_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
        POS_Settings: <POS_Settings />,
        Modifier: <Modifier />,
        CategoryAndItem: <CategoryAndItem />,
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
                    <Menu menuItemStyles={commonItemStyles} rootStyles={{ backgroundColor: bgColor, height: '900px', paddingTop: '15px' }}>
                        <MenuItem onClick={() => handleContentChange('Intro')}>常見問題匯總</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>POS機設定</MenuItem>
                        <SubMenu label="菜品菜單">
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('Modifier')} > 改碼組設置 </MenuItem>
                            <MenuItem style={commonItemStyles} onClick={() => handleContentChange('CategoryAndItem')} > 菜品類別設置 </MenuItem>
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