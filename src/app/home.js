import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';

function App() {
    return(<h1>Welcome</h1>);
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);