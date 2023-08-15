import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';

const Postron_Web_FAQ = () => {
    const [content, setContent] = useState('Intro');
    const [subMenu, setSubMenu] = useState(null);

    const contentMap = {
        Intro: <Intro />,
        POS_Settings: <POS_Settings />,
    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    const toggleSubMenu = (child) => {
        setSubMenu(subMenu === child ? null : child);
    }

    const isSubMenu = (child) => {
        return subMenu === child;
    }

    const changeIcon = (child) => {
        return (
            <span style={{ float: 'right' }}>{isSubMenu(child) ? '👆' : '👇'}</span>
        );
    }

    const cerateButtonStyles = (additionalStyles = {}) => ({
        button: {
            [`&.active`]: {
                backgroundColor: '#0f1097',
                color: '#b6c8d9',
            },
            '&:hover': { 
                backgroundColor: '#ed5f16', 
                color: 'white', 
            },
        },
    });

    return (
        <Layout
            sidebar={
                <Sidebar>
                    <Menu menuItemStyles={cerateButtonStyles()}>
                        <MenuItem onClick={() => handleContentChange('Intro')}>概要</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>POS機設定</MenuItem>
                        <MenuItem onClick={() => toggleSubMenu('菜品菜單')}>菜品菜單 {changeIcon('菜品菜單')}</MenuItem>
                        {isSubMenu('菜品菜單') && (
                            <MenuItem>
                                <Menu menuItemStyles={cerateButtonStyles()}>
                                    <MenuItem onClick={() => handleContentChange('Intro')}>改碼組設置</MenuItem>
                                </Menu>
                            </MenuItem>   
                        ) }
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