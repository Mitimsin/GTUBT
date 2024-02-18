import React, { useEffect, useState } from "react";
import "./App.css";

import icon from "./assets/image/white_logo.png";
import logo from "./assets/image/color_logo.png";
import LoadingScreen from "./components/Base/LoadingScreen";
import { HashRouter, Routes, Route } from "react-router-dom";
import GeekDay from "./components/GeekDay/GeekDay";
import MainPage from "./components/MainPage/MainPage";

export const DataContext = React.createContext<{
    mobile: boolean;
    setFaint: (state: boolean) => void;
}>({ mobile: false, setFaint: () => {} });

function App() {
    const [ready, setReady] = useState(false);
    const [faint, setFaint] = useState(false);
    const [mobile, setMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 1024);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        console.log(faint);
    }, [faint]);

    return (
        <>
            {ready ? (
                <DataContext.Provider value={{ mobile, setFaint }}>
                    <HashRouter>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <LoadingScreen faint={faint} />
                                        <MainPage />
                                    </>
                                }
                            />
                            <Route
                                path="/geekday"
                                element={
                                    <>
                                        <LoadingScreen faint={faint} />
                                        <GeekDay />
                                    </>
                                }
                            />
                        </Routes>
                    </HashRouter>
                </DataContext.Provider>
            ) : (
                <LoadingScreen />
            )}
            <ImagePreloader
                imageUrl={logo}
                onImageLoad={() => {
                    setTimeout(() => {
                        setReady(true);
                        setFaint(true);
                    }, 2000);
                }}
            />
            <ImagePreloader
                imageUrl={icon}
                onImageLoad={() => {
                    setTimeout(() => {
                        setReady(true);
                        setFaint(true);
                    }, 2000);
                }}
            />
        </>
    );
}

interface ImagePreloaderProps {
    imageUrl: string;
    onImageLoad: () => void;
}

function ImagePreloader({ imageUrl, onImageLoad }: ImagePreloaderProps) {
    useEffect(() => {
        const img = new Image();
        img.src = imageUrl;
        img.onload = () => {
            onImageLoad();
        };
    }, [imageUrl, onImageLoad]);

    return null;
}

export default App;
