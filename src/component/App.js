import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { GymListPage, MainPage } from './../page';
import { GymDetailsPage } from './../page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="/list" element={<GymListPage/>}/>
                <Route path="/gym" element={<GymDetailsPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
