import React, {Children} from "react";
import Header from "./Header";
import Footer from "./Footer";
import '../styles/components/Layout.css'

const Layout = ({Children}) => {
    return (
        <div className="Main">
            <Header/>
            {Children}
            <Footer/>
        </div>
    );
};

export default Layout;