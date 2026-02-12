import Image from 'next/image';
import { motion } from 'framer-motion';
// components
import AnimatedText from './AnimatedText';

const About = () => {
    return (
        <section className="relative pt-12 pb-24 bg-[#EFF6FF]" id="about">
            <div className="w-full px-4 xl:px-32 h-full">
                <div className="h-full flex items-center justify-center">
                    {/* image + shape */}
                    <div className="hidden xl:flex flex-1 pl-8">
                        <div className="relative w-full max-w-[380px]">
                            {/* shape */}
                            <div className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 -z-10"></div>
                            {/* image */}
                            <div className="rounded-tl-[8px] rounded-tr-[120px] w-full bg-[#EFF6FF] min-h-[480px] flex items-end justify-center">
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
                                        ease: 'linear',
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
                            <p className="text-lg">Gen AI Engineer</p>
                        </div>
                        <p className="max-w-[680px] mx-auto xl:mx-0 mb-2">
                            I'm an <strong>AI Engineer</strong> with 6+ years of experience building smart
                            solutions that help businesses work smarter. I create intelligent applications
                            that can understand and respond to human language, making technology more
                            accessible and useful for everyone.
                            <br />
                            <br />
                            My work delivers real results: I've helped companies{' '}
                            <strong>reduce waste by 45%</strong>, achieve{' '}
                            <strong>record-breaking sales</strong>, and improve data accuracy from{' '}
                            <strong>95% to 99%</strong>. Whether it's processing millions of records daily
                            or building systems that understand customer needs, I focus on creating
                            practical AI solutions that make a measurable difference.
                            <br />
                            <br />
                            Outside of work, I'm passionate about travel and photography, always exploring
                            new places and capturing unique perspectives through my lens.
                        </p>
                        {/* info items */}
                        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12 max-w-max mx-auto xl:mx-0 items-center">
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Location</div>
                                <p>Mumbai, India</p>
                            </div>
                            {/* item 2 */}
                            <div className="max-w-max">
                                <div className="uppercase font-bold text-primary">Email</div>
                                <p>roushankumarmail07@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
