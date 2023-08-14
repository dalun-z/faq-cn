import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';

const Postron_Web_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
        POS_Settings: <POS_Settings />,
    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    return (
        <Layout
            sidebar={
                <Sidebar>
                    <Menu
                        menuItemStyles={{
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
                        }}
                    >
                        {/* <MenuItem component={<Link to="/web-faq-pages/" />}>Intros</MenuItem>
                        <MenuItem component={<Link to="/web-faq-pages/page2" />}>POS Settings</MenuItem>
                        <MenuItem component={<Link to="/web-faq-pages/page3" />}>Menu Settings</MenuItem> */}
                        <MenuItem onClick={() => handleContentChange('Intro')}>概要</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>POS Settings</MenuItem>
                        <MenuItem onClick={() => handleContentChange('POS_Settings')}>POS Settings</MenuItem>
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