import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NavBar from "./pages/NavBar";


const App = () => {

    return (
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path= '/' element={<Homepage/>}/>
                <Route path= '/posts' element={<Posts/>}/>
                <Route path= '/about' element={<About/>}/>
                <Route path= '*' element={<Posts/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default App;