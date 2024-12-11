import { Outlet, NavLink } from "react-router-dom";
import Header from "../components/header.jsx"
import Footer from "../components/Footer.jsx"


export default function AppLayout() {

    return (
        <>
            <Header />

            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )


}