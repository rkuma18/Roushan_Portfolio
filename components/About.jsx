import Image from "next/image";
import { motion } from "framer-motion";
// components
import AnimatedText from "./AnimatedText";

const About = () => {
    return (
        <section className="relative pt-12 pb-24" id="about">
            <div className="container mx-auto h-full">
                <div className="h-full flex items-center justify-center">
                    {/* image + shape */}
                    <div className="hidden xl:flex flex-1 pl-8">
                        <div className="relative w-full max-w-[380px]">
                            {/* shape */}
                            <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
                            {/* image */}
                            <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#e5f8f6] min-h-[480px] flex items-end justify-center">
                                <Image
                                    src="/assets/about/img.png"
                                    width={350}
                                    height={478}
                                    quality={100}
                                    priority
                                    alt="About me profile image"
                                />
                            </div>
                            {/* rotating shape */}
                            <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        rotate: [0, 360],
                                    }}
                                    transition={{
                                        duration: 10,
                                        ease: "linear",
                                        repeat: Infinity,
                                    }}
                                >
                                    <Image
                                        src="/assets/about/shape-1.svg"
                                        width={160}
                                        height={160}
                                        alt="Rotating decorative shape"
                                    />
                                </motion.div>
                                <div className="absolute text-center text-white">
                                    <div className="text-5xl font-bold leading-none">6+</div>
                                    <div className="leading-none text-center">
                                        Years of <br /> Experience
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* text */}
                    <div className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 flex flex-col gap-6">
                        <div>
                            <AnimatedText text="I'm Roushan" textStyles="h2 mb-2" />
                            <p className="text-lg">Data Scientist</p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
                            I'm a <strong>Data Scientist and AI Engineer</strong> with 6+ years of experience in
                            machine learning, NLP, and AI automation. I specialize in building scalable solutions
                            from AI chatbots and recommendation systems to intelligent analytics platforms across
                            industries like <span className="font-medium">BFSI, Retail, Logistics, and Hospitality</span>.
                            <br /><br />
                            My current focus lies in working with <strong>LLMs</strong>,
                            <strong> Retrieval Augmented Generation (RAG)</strong> pipelines, and deploying
                            <strong> practical AI</strong> in real world products.
                            <br /><br />
                            Outside of tech, I’m an avid <strong>traveler and photographer</strong>,
                            always exploring new perspectives both through data and through life.
                        </p>
                        {/* info items */}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
                            {/* item 1 */}
                            {/*<div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Age</div>
                                <p>30 Years</p>
                            </div>*/}
                            {/* item 2 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Born in</div>
                                <p>Patna, India</p>
                            </div>
                            {/* item 3 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Phone</div>
                                <p>+91 8986510661</p>
                            </div>
                            {/* item 4 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Email</div>
                                <p>roushankumarmail07@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About