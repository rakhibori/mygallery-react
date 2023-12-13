import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/main.scss';
import MyGallery from './components/MyGallery';
import store from './app/store';
import {Provider} from 'react-redux';


export default function App1() {
    
    return(
       <div className='mainBox'>
           <Provider store={store}>
                <Routes><Route path='/' element={<MyGallery/>}></Route></Routes>
           </Provider>
       </div>
    )
}