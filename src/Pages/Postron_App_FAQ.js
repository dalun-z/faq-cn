import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import Layout from '../Routes/Layout';
import '../css/Layout.css'
import '../css/Doc.css'
import '../css/Banner.css';


import Intro from '../App_FAQs/Intro';

const Postron_App_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    var bgColor = '#daeff3'

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
                    </Menu>
                </Sidebar>
            }
            mainContent={
                contentMap[content]
            }
        />

    );
};

export default Postron_App_FAQ;