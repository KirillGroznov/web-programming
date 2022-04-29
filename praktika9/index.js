import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Asteroids} from './pages/asteroids';
import {Destroy} from './pages/destroy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Asteroids />}/>
                <Route path="/destroy" element={<Destroy />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
reportWebVitals();