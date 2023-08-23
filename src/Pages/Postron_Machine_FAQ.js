import React, { useState } from 'react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import POS_Settings from '../Web_FAQs/POS_Settings';
import Layout from '../Routes/Layout';
import Intro from '../Web_FAQs/Intro';

const Postron_Machine_FAQ = () => {
    const [content, setContent] = useState('Intro');

    const contentMap = {
        Intro: <Intro />,
        POS_Settings: <POS_Settings />,
    }

    const handleContentChange = ct => {
        setContent(ct)
    }

    return (
        <div></div>
    );
};

export default Postron_Machine_FAQ;