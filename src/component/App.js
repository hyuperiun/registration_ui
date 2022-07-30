import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage } from './../page';
import { GymDetailsPage } from './../page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/gym" element={<GymDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
