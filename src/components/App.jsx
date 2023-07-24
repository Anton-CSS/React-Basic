import React from "react";
import { Route, Routes} from "react-router-dom";
import Posts from "./pages/Posts";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import NavBar from "./pages/NavBar";
import PostById from "./pages/PostById";
import Error from "./pages/Error";


const App = () => {

    return (
        <>
            <NavBar/>
            <Routes>
                <Route path= '/posts' element={<Posts/>}/>
                <Route path= {`/posts/:id`} element={<PostById/>}/>
                <Route path= '/' element={<Homepage/>}/>
                <Route path= '/about' element={<About/>}/>
                <Route path= '*' errorElement={<Error/>}/>
            </Routes>
        </>
    );
};

export default App;