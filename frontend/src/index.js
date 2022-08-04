import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import { Context } from './Context/myContext';
import './index.css';

const root = createRoot(document.getElementById('root'));

root.render(
    <Context>
        <App />
    </Context>
);