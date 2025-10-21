import FinisherHeaderComponent from "@/components/style/FinisherHeaderComponent"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { useEffect, useState } from "react";
import MyImage from "../../assets/images/mushfik.png";
import { Facebook, Github, Linkedin } from "lucide-react";

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
            {/* hero section */}
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

            {/* about section */}
            <section className="h-full w-full center justify-start flex-col text-text">
                <h2 className="text-4xl font-bold">Who We Are</h2>
                <p className="px-6 md:px-24 py-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic dignissimos unde voluptas eos laborum suscipit! Neque, possimus rem! Adipisci possimus tenetur error dicta dolorum officiis distinctio deleniti natus maiores!
                    <br></br><br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic dignissimos unde voluptas eos laborum suscipit! Neque, possimus rem! Adipisci possimus tenetur error dicta dolorum officiis distinctio deleniti natus maiores!
                </p>
                <div className="center flex-col">

                    <h2 className="uppercase text-xl font-medium pt-4 pb-12">teams members</h2>

                    <div className="w-full center gap-12 flex-wrap">
                        {/* card 01 */}
                        <div className="card w-[240px] h-[280px] glass-card center rounded-[15px] transition-transform duration-300 group cursor-pointer">
                            <div className="w-[95%] h-[95%] bg-gray-100 rounded-[12px] overflow-hidden">
                                {/* <img src="../../assets/images/mushfik.png" alt="mushfik" /> */}
                                <img src={MyImage} className="w-full h-full object-cover object-top" alt="" />
                                <div className="w-full bg-gray-100 center flex-col gap-4 transition-transform group-hover:-translate-y-[100%] py-4">
                                    <h2 className="text-lg font-bold">Md. Mushfiqur Rahman</h2>
                                    <p className="text-md font-medium">Fornt-End Developer</p>
                                    <ul className="center gap-6">
                                        <li><Facebook strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Linkedin strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Github strokeWidth={1} className="hover:text-primary" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* card 02 */}
                        <div className="card w-[240px] h-[280px] glass-card center rounded-[15px] transition-transform duration-300 group cursor-pointer">
                            <div className="w-[95%] h-[95%] bg-gray-100 rounded-[12px] overflow-hidden">
                                {/* <img src="../../assets/images/mushfik.png" alt="mushfik" /> */}
                                <img src={MyImage} className="w-full h-full object-cover object-top" alt="" />
                                <div className="w-full bg-gray-100 center flex-col gap-4 transition-transform group-hover:-translate-y-[100%] py-4">
                                    <h2 className="text-lg font-bold">Md. Mushfiqur Rahman</h2>
                                    <p className="text-md font-medium">Fornt-End Developer</p>
                                    <ul className="center gap-6">
                                        <li><Facebook strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Linkedin strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Github strokeWidth={1} className="hover:text-primary" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* card-03 */}
                        <div className="card w-[240px] h-[280px] glass-card center rounded-[15px] transition-transform duration-300 group cursor-pointer">
                            <div className="w-[95%] h-[95%] bg-gray-100 rounded-[12px] overflow-hidden">
                                {/* <img src="../../assets/images/mushfik.png" alt="mushfik" /> */}
                                <img src={MyImage} className="w-full h-full object-cover object-top" alt="" />
                                <div className="w-full bg-gray-100 center flex-col gap-4 transition-transform group-hover:-translate-y-[100%] py-4">
                                    <h2 className="text-lg font-bold">Md. Mushfiqur Rahman</h2>
                                    <p className="text-md font-medium">Fornt-End Developer</p>
                                    <ul className="center gap-6">
                                        <li><Facebook strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Linkedin strokeWidth={1} className="hover:text-primary" /></li>
                                        <li><Github strokeWidth={1} className="hover:text-primary" /></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* showcase section */}
            <section className="h-screen w-full bg-gray-100 center flex-col">

                <div className="center">
                    <Carousel className="w-full bg-green-100 rounded-xl p-4">
                        <CarouselContent className="-ml-2">
                            {Array.from({ length: 5 }).map((_, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full sm:basis-1/2 lg:basis-1/3 px-2"
                                >
                                    <div className="rounded-lg overflow-hidden border-2 border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300">
                                        <img
                                            src={MyImage}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <CarouselPrevious className="cursor-pointer left-2" />
                        <CarouselNext className="cursor-pointer right-2" />
                    </Carousel>
                </div>
            </section>

        </div>
    )
}

export default Home
