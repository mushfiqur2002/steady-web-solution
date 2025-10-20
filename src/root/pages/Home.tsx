import NavBar from "@/components/shared/NavBar"
import FinisherHeaderComponent from "@/components/style/FinisherHeaderComponent"
import { useEffect, useState } from "react";

function Home() {
    const arr = ['Build', 'design', 'redesign', 'optimize', 'systemize'];
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % arr.length);
        }, 1850);
        return () => clearInterval(interval);
    }, [arr.length])
    return (
        <div className="w-full center flex-col">
            <FinisherHeaderComponent />
            <section className="hero w-full h-[500px] md:h-[550px] center flex-col gap-4">
                <h1 className="text-[28px] md:text-4xl lg:text-6xl capitalize text-center font-sans">Transforming Your Vision
                    <br></br> into a
                    <span className="uppercase font-medium md:font-semibold font-serif"> Digital Presence</span>
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl center flex-col lg:flex-row gap-4">
                    <span>we help you</span>
                    <span className="relative text-4xl uppercase bg-accent text-text rounded-full h-10 overflow-hidden px-4">
                        <span
                            className="relative top-0 left-0 transition-transform duration-700 ease-in-out flex flex-col items-center"
                            style={{ transform: `translateY(-${index * 2.5}rem)` }}
                        >
                            {arr.map((word, i) => (
                                <span key={i}>{word}</span>
                            ))}
                        </span>
                    </span>
                    <span>your website</span>
                </p>
            </section>

            <section className="h-screen w-full center">
                <h1>hello</h1>
            </section>
        </div>
    )
}

export default Home
