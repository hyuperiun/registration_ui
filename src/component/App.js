import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { MainPage, TrainingPage, TrainingContentPage } from './../page';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route exact path="/training" element={<TrainingPage/>}/>
                <Route path="/training/:trainingId" element={<TrainingContentPage/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
