import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Trending from "../Trending/Trending";
import Subs from "../Subscriptions/Subs";
import Home from "../Home/Home";
import Main from "../Main/Main";
import Private from "../Private/Private";
import PrivateTwo from "../PrivateTwo/PrivateTwo";
// import Pages from "../Pages/Pages";

const Path = () => {
    return (
        <>
            <Home />
            <div className="d-flex">
                <Navbar />
                <Routes>
                    <Route path="/home2" element={<Main />} />
                    <Route path="/trending" element={<Trending />} />
                    <Route path="/subs" element={<Subs />} />
                    <Route path="/private" element={<Private />} />
                    <Route path="/privateTwo" element={<PrivateTwo/>}/>
                    {/* <Route path="/photos/:id" element={<Pages />}/> */}
                </Routes>
            </div>
        </>
    )
}

export default Path;