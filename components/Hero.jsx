"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";
import { FiDownload } from "react-icons/fi";

// components
import RotatingShape from "./RotatingShape";
import Header from "./Header";
import Stats from "./Stats/Stats";

const Hero = () => {
    return (
        <section className="h-[800px] relative bg-gradient-to-r from-gray-50 via-blue-50 to-indigo-50 overflow-hidden" id="home">
            {/* header */}
            <Header />
            {/* hero content - full width grid layout */}
            <div className="h-full xl:grid xl:grid-cols-2">
                {/* left column - text content */}
                <div className="h-full flex items-center justify-center xl:justify-start xl:pl-32">
                    <div className="relative z-20 w-full max-w-[680px] flex flex-col items-center xl:items-start text-center xl:text-left pt-10 px-4 xl:px-0">
                        <h1 className="h1 mb-4 max-w-[320px] xl:max-w-full leading-tight xl:leading-none">
                            <span className="text-accent">I deliver value</span> through{" "}
                            <TypeAnimation
                                preRenderFirstString={true}
                                sequence={["Data Science", 2000, "Artificial Intelligence", 2000]}
                                speed={50}
                                repeat={Infinity}
                                wrapper="span"
                                cursor={false}
                                className="ml-2 xl:ml-4"
                            />
                        </h1>
                        <p className="lead max-w-[476px] mb-7">
                        Building smart AI solutions that help businesses grow and make better decisions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <ScrollLink to="contact" smooth>
                                <button className="btn btn-accent">Contact me</button>
                            </ScrollLink>
                            <a
                                href="/Roushan_Kumar_CV.pdf"
                                download="Roushan_Kumar_CV.pdf"
                                className="btn border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <FiDownload className="text-xl" />
                                Download CV
                            </a>
                        </div>
                        {/* stats */}
                        <Stats />
                    </div>
                </div>

                {/* right column - image */}
                <div className="hidden xl:flex relative bg-accent h-full items-end justify-start pl-16">
                    <div className="relative w-[558px] h-[642px] z-40">
                        <Image 
                            src="/assets/hero/dev.png" 
                            fill 
                            quality="100" 
                            priority 
                            className="object-contain"
                            alt="Developer illustration"
                        />
                    </div>
                    {/* arrow shape */}
                    <div
                        className="hidden xl:flex absolute top-48 left-8"
                        data-scroll
                        data-scroll-speed="0.05"
                    >
                        <Image 
                            src="/assets/hero/arrow.svg" 
                            width={160} 
                            height={160} 
                            alt="Arrow decoration"
                        />
                    </div>
                    {/* shape 1 */}
                    <div
                        className="absolute top-[600px] left-4"
                        data-scroll
                        data-scroll-speed="0.02"
                    >
                        <RotatingShape 
                            content={
                                <Image 
                                    src="/assets/hero/shape-1.svg" 
                                    width={38} 
                                    height={38}
                                    alt="Decorative shape"
                                />
                            }
                            direction="left"
                            duration={6}
                        />
                    </div>
                    {/* shape 2 */}
                    <div
                        className="absolute top-[240px] right-[30%]"
                        data-scroll
                        data-scroll-speed="0.01"
                    >
                        <RotatingShape 
                            content={
                                <Image 
                                    src="/assets/hero/shape-2.svg" 
                                    width={34} 
                                    height={34}
                                    alt="Decorative shape"
                                />
                            }
                            direction="right"
                            duration={5}
                        />
                    </div>
                    {/* shape 3 */}
                    <div
                        className="absolute top-[480px] right-[20%]"
                        data-scroll
                        data-scroll-speed="0.08"
                    >
                        <RotatingShape 
                            content={
                                <Image 
                                    src="/assets/hero/shape-3.svg" 
                                    width={36} 
                                    height={36}
                                    alt="Decorative shape"
                                />
                            }
                            direction="left"
                            duration={7}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;