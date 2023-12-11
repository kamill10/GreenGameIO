import { FC } from "react";
import { Outlet } from "react-router-dom";
import spring_logo from "../assets/spring-logo.png"

const AuthenticationLayout: FC = () => {
    return (
        <main className="h-screen flex justify-center items-center">
            <div className="flex w-[70vw] h-[80vh] shadow-large-shadow">
                <div className="bg-nice-green h-[100%] w-[40%]">
                    <img src={spring_logo} alt="GreenGameIO" className="w-[55%] ml-auto mr-auto pt-[15%]" />
                    <p className="font-sans text-3xl italic font-medium mt-7 text-center">GreenGameIO</p>
                </div>

                <div className="bg-white h-[100%] w-[60%] pt-40">
                    <Outlet />
                </div>
            </div>
        </main>
    );
}

export default AuthenticationLayout;