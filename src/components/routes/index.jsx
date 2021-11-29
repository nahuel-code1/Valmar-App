import React from 'react';
import { Routes, Route } from 'react-router-dom'
import IndexHome from '../home/index';
import IndexEstates from '../estates/index';
import FeaturedProperty1 from '../home/featuredProperty1';
import FeaturedProperty2 from '../home/featuredProperty2';
import FeaturedProperty3 from '../home/featuredProperty3';

export default function IndexRoutes () {
    return (
        <Routes>
{/* 
            <Route path="/" element={<IndexHome />} />

            <Route path="/" element={<IndexHome />} />

            <Route path="/" element={<IndexHome />} />

            <Route path="/" element={<IndexHome />} /> */}

            <Route path="inmuebles" element={<IndexEstates />} />

            <Route path="home" element={<IndexHome />}>

                <Route path="inmueble_destacado_1" element={<FeaturedProperty1 />} />

                <Route path="inmueble_destacado_2" element={<FeaturedProperty2 />} />

                <Route path="inmueble_destacado_3" element={<FeaturedProperty3 />} />
            
            </Route> 

        </Routes>
    )
}
