import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import Layout from '../Routes/Layout';
import { globalSettings } from '../global/global';
import '../css/Layout.css'
import '../css/Doc.css'
import '../css/Banner.css';

import Intro from '../App_FAQs/Intro';
import Dinein from '../App_FAQs/dinein';

const Postron_App_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
        Dinein: <Dinein />,
    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    const commonItemStyles = globalSettings.commonItemStyles;

    return (
        <Layout
            sidebar={
                <Sidebar>
                    <Menu menuItemStyles={commonItemStyles} rootStyles={{ backgroundColor: globalSettings.bgColor, height: '1500px', paddingTop: '15px', paddingLeft: '10px' }}>
                        <MenuItem onClick={() => handleContentChange('Intro')}>常見問題匯總</MenuItem>
                        <MenuItem onClick={() => handleContentChange('Dinein')}>堂食</MenuItem>
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