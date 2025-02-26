import {  PropsWithChildren } from "react";
import splash1 from "@assets/splash_1.svg";
import splash2 from "@assets/splash_2.svg";
import splash3 from "@assets/splash_3.svg";
import splash4 from "@assets/splash_4.svg";

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className='page-wrapper'>
            <img src={splash1} className="splash first-section"/>
            <img src={splash2} className="splash second-section"/>
            <img src={splash3} className="splash third-section"/>
            <img src={splash4} className="splash footer-section"/>
            {children}
        </div>
    )
}   