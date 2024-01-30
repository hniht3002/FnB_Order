import { ReactNode } from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";

interface IChildren {
    children: ReactNode
}

export default function MainLayout({children} : IChildren) {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

