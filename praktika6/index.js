import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {FuncElem} from "./FuncElem/FuncElem";
import {ClassElem} from "./ClassElem/ClassElem";

ReactDOM.render(
    <React.StrictMode>
        <FuncElem/>
        <ClassElem/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();