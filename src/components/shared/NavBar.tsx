import Logo from "@/assets/long-logo.svg"
import ShortLogo from "@/assets/short-logo.svg"
import { navLinks } from "../constant"
import { Link, NavLink, useLocation } from "react-router-dom"
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
function NavBar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setVisible(latest > 50);
    })
    console.log(visible);

    const { pathname } = useLocation();
    return (
        <div className="">
            <nav
                className={`h-18 px-6 flex items-center justify-between fixed z-50 transition-all duration-300 
                    ${visible
                        ? 'w-[90%] py-2 shadow-md left-1/2 -translate-x-1/2 top-4 rounded-[50px] glass-card'
                        : 'w-full py-4 shadow-none left-0 translate-x-0 top-0 '
                    }`}
            >
                <section>
                    <Link to={'/'}>
                        <img src={Logo} alt="logo" className="w-42 h-auto hidden md:flex" />
                        <img src={ShortLogo} alt="logo" className="flex md:hidden w-8 h-auto" />
                    </Link>
                </section>
                <section className="flex items-center justify-center gap-12">
                    <ul className="flex gap-8">
                        {navLinks.map(({ lable, path, icon: Icon }) => {
                            return (
                                <li key={lable} className={`${pathname === path ? 'text-primary border-b-2 border-primary md:border-0' : 'text-text'}`}>
                                    <NavLink to={path} className='flex items-center justify-center gap-2'>
                                        <Icon className="w-[20px] h-[20px]" />
                                        <p className="capitalize text-[16px] hidden md:flex">{lable}</p>
                                    </NavLink>
                                </li>
                            )
                        })}
                    </ul>
                    {/* <Switch className="" /> */}
                </section>

            </nav>
        </div>
    )
}

export default NavBar


