import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.module.scss';
import Home from 'pages/home';
import Request from 'pages/request';
import LeftSideBar from 'shared-components/LeftSideBar/LeftSideBar';
import RightSideBar from 'shared-components/RightSideBar/RightSideBar';

function App() {
    return (
        <BrowserRouter>
            <LeftSideBar />
            <RightSideBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/request" element={<Request />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
