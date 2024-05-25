import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './layout/Header.jsx';
import MainBody from './MainBody.jsx';
import Footer from './layout/Footer.jsx'
import './css/style.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div style={{backgroundColor:"black", color: "grey"}}>
        <Header />
        <div className='px-4'>
            <MainBody />
        </div>
        <Footer />
    </div>
);