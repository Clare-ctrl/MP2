import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { useState } from 'react';
import SearchInput from '../components/SearchInput';
import GalleryView from '../components/GalleryView';
import TabButton from '../components/TabButton';
function RootLayout() {

    return (
        <>
            <Header />
            <Outlet />
        </>
    );
}

export default RootLayout;