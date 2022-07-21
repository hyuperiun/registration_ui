import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './../page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
