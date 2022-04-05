import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import ProjectRoutes from "./projectRoutes";
import {BrowserRouter} from "react-router-dom";
import  './index.scss'

ReactDOM.render(
    <BrowserRouter>
        <ProjectRoutes/>
    </BrowserRouter>,
    document.getElementById('root')
);

reportWebVitals();
