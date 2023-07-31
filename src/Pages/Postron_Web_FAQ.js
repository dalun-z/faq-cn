import React from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link, Routes, Route } from 'react-router-dom';
import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';

const Postron_Web_FAQ = () => {
    return (
        <Layout
            sidebar={
                <Sidebar>
                    <Menu
                        menuItemStyles={{
                        button: {
                            // the active class will be added automatically by react router
                            // so we can use it to style the active menu item
                            [`&.active`]: {
                            backgroundColor: '#0f1097',
                            color: '#b6c8d9',
                            },
                        },
                        }}
                    >
                        <MenuItem component={<Link to="/web-faq-pages/" />}> Intros</MenuItem>
                        <MenuItem component={<Link to="/web-faq-pages/page2" />}> Calendar</MenuItem>
                        <MenuItem component={<Link to="/web-faq-pages/page3" />}> E-commerce</MenuItem>
                    </Menu>
                </Sidebar>
            }
            mainContent={
                <Routes>
                    <Route path="/web-faq-pages/" element={<Intro />} />
                    <Route path="/web-faq-pages/page2" element={<POS_Settings />} />
                    <Route path="/web-faq-pages/page3" element={<POS_Settings />} />
                </Routes>
            }
        />
    );
};

export default Postron_Web_FAQ;