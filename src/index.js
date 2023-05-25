import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './utils/style/index.css';
import Home from './pages/Home';
import Header from "./components/Header";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Router>
            <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </React.StrictMode>
);

