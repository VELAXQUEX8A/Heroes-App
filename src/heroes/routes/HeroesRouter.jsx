import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/Navbar";
import { DcPages, MarvelPage, SearchPage } from "../pages";
import { HeroPage } from "../pages/HeroPage";

export const HeroesRouter = () => {
    return ( 
        <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/marvel" element={<MarvelPage />} />
                <Route path="/dc" element={<DcPages />} />
                <Route path="/" element={<MarvelPage />} />       
                <Route path="hero/:id" element={<HeroPage/>}/> 
                <Route path="/Search" element={<SearchPage />} />
            </Routes>
        </div>
        </>
     );
}