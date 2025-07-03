import { Outlet } from "react-router"; 

import Header from "./Header";
import Footer from "./Footer";

function SiteWrapper() {
    
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );

}

export default SiteWrapper;