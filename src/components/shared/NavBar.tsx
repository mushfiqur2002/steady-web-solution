import Logo from "@/assets/long-logo.svg"
import ShortLogo from "@/assets/short-logo.svg"
import { navLinks } from "../constant"
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
function NavBar() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('#home');

    useMotionValueEvent(scrollY, 'change', (latest) => {
        setVisible(latest > 50);
    })

    // Track active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => document.getElementById(link.path.replace('#', '')));
            const scrollPosition = window.scrollY + 150;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = sections[i];
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(navLinks[i].path);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial position
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.replace('#', ''));
        if (element) {
            const yOffset = -80; // Offset for fixed navbar
            const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };
    return (
        <div className="">
            <nav
                className={`h-18 px-6 flex items-center justify-between fixed z-50 transition-all duration-300 
                    ${visible
                        ? 'w-full md:w-[90%] lg:w-[80%] py-2 shadow-md left-1/2 -translate-x-1/2 md:top-4 md:rounded-[50px] backdrop-blur-md bg-white/30 border border-white/30'
                        : 'w-full py-4 shadow-none left-0 translate-x-0 top-0 '
                    }`}
            >
                <section>
                    <button onClick={() => scrollToSection('#home')} className="cursor-pointer">
                        <img src={Logo} alt="logo" className="w-42 h-auto hidden md:flex mt-[6px]" />
                        <img src={ShortLogo} alt="logo" className="flex md:hidden w-8 h-auto" />
                    </button>
                </section>
                {/* Desktop Navigation */}
                <section className="flex items-center justify-center gap-12 hidden md:flex">
                    <ul className="flex gap-8">
                        {navLinks.map(({ lable, path, icon: Icon }) => {
                            return (
                                <li key={lable} className={`${activeSection === path ? 'text-primary border-b-2 border-primary md:border-0' : 'text-text'}`}>
                                    <button 
                                        onClick={() => scrollToSection(path)}
                                        className='flex items-center justify-center gap-2 cursor-pointer'
                                    >
                                        <Icon className="w-[20px] h-[20px]" />
                                        <p className="capitalize text-[16px] hidden md:flex">{lable}</p>
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </section>
                {/* Mobile Menu Icon*/}
                <button
                    onClick={()=>setIsMobileMenuOpen(true)}
                    className='md:hidden focus:outline-none z-100 p-2'
                    aria-label='Toggle menu'>
                            <Menu className='w-7 h-7 text-text' />
                </button>
                    </nav>
            {/* Mobile Navigation Menu */}
            <div className={`md:hidden fixed z-100 inset-0 transition-all duration-300
                ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className='absolute inset-0 bg-black/20 backdrop-blur-sm'
                    onClick={() => setIsMobileMenuOpen(false)}
                />
                {/* Mobile Navlinks */}
                <div
                    className={`absolute right-0 top-0 h-full w-[70%] max-w-[300px] bg-white shadow-xl transition-transform duration-300
                    ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>

                    <div className='flex flex-col pt-20 px-6 relative'>
                        <X className='absolute top-6 right-8 w-7 h-7'
                        onClick={()=>setIsMobileMenuOpen(false)}/>
                        <ul className='flex flex-col gap-6'>
                            {
                                navLinks.map(({ lable, path, icon: Icon }) => {
                                    return (
                                        <li key={lable} className={`${activeSection === path ? 'text-primary border-b border-primary md:border-0' : 'text-text'}`}>
                                            <button
                                                onClick={() => scrollToSection(path)}
                                                className={`flex items-center gap-4 py-3 px-4 rounded-md transition-colors border-b border-slate-300 w-full text-left cursor-pointer`}
                                            >
                                                <Icon className="w-[20px] h-[20px]" />
                                                <p className="capitalize text-[16px]">{lable}</p>
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NavBar


