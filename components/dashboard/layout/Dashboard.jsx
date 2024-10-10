'use client'
import { useState } from "react";
import CreateNews from "../components/CreateNews";
import Sidebar from "./Sidebar";
import News from "../components/News";
import Writers from "../components/Writers";
import AddWriter from "../components/AddWriter";
import AddCategory from "../components/AddCategory";

const Dashboard = () => {
    const [active, setActive] = useState(1);
    return(
        <div className="w-[85%] md:pt-[30px] flex mx-auto">
            <div className={`w-[60px]  md:w-[310px] h-[450px] bg-white bg-opacity-90  border-[#00000014] shadow-sm rounded-[5px] shadow-sm mt-[80px] mb-[80px] sticky ${scroll ? "top-[120px]" : "top-[30px]"} left-[30px] `}>
                <Sidebar active={active} setActive={setActive} />
            </div>
                {
                    active === 1 &&(
                        <div className="w-full pr-4 h-full bg-transparent mt-[80px]">
                            <CreateNews setActive={setActive} />
                        </div>
                    )
                }
                {
                    active === 2 &&(
                        <div className="w-full pr-4 h-full bg-transparent mt-[80px]">
                            <News setActive={setActive} />
                        </div>
                    )
                }
                {
                    active === 3 &&(
                        <div className="w-full pr-4 h-full bg-transparent mt-[80px]">
                            <AddWriter setActive={setActive} />
                        </div>
                    )
                }
                {
                    active === 4 &&(
                        <div className="w-full pr-4 h-full bg-transparent mt-[80px]">
                            <Writers setActive={setActive} />
                        </div>
                    )
                }
                {
                    active === 5 &&(
                        <div className="w-full pr-2 h-full bg-transparent mt-[80px]">
                            <AddCategory />
                        </div>
                    )
                }
        </div>
    )
}

export default Dashboard; 