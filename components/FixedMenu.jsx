import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CgMenuGridR} from 'react-icons/cg';
import { useMediaQuery } from "react-responsive";
import {FiMapPin, FiMail} from 'react-icons/fi';

//components
import Nav from "./Nav";
import Social from "./Social";

const SCROLL_THRESHOLD = 150;

const FixedMenu = () => {
    const [showMenuButton, setShowMenuButton] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [isMounted, setIsMounted] = useState(false); // ensure the component is mounted

    // handle escape key to close menu
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape' && showMenu) {
                setShowMenu(false);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [showMenu]);
    
    const isMobile = useMediaQuery({
        query: "(max-width: 640px)",
    });

    // check if the component is mounted to prevent SSR mismatches
    useEffect(()=>{
        setIsMounted(true)
    }, []);

    useEffect(() => {
        if (isMounted){
            const handleScroll = () => {
                setShowMenuButton(window.scrollY > SCROLL_THRESHOLD);
            };
            if (!isMobile) {
                window.addEventListener("scroll", handleScroll);
                return ()=> window.removeEventListener("scroll", handleScroll);
            } else {
                // always show the button on mobile
                setShowMenuButton(true);
            }
        }
    }, [isMobile, isMounted])
    // prevent rendering until mounted
    if (!isMounted) return null;

    return (
        <>
            {/* Backdrop overlay */}
            <AnimatePresence>
                {showMenu && showMenuButton && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                        onClick={() => setShowMenu(false)}
                    />
                )}
            </AnimatePresence>

            <div className="fixed w-full z-50 flex justify-center pointer-events-none">
                {/* menu */}
                <AnimatePresence>
                    {
                        showMenu && showMenuButton && (
                            <motion.div
                            initial={{opacity: 0, y:20}}
                            animate={{opacity:1 , y:0}}
                            exit={{opacity: 0, y:20}}
                            transition={{duration: 0.2}}
                            role="dialog"
                            aria-label="Navigation menu"
                            className="fixed top-20 md:top-32 left-0 right-0 mx-auto w-[90%] md:w-full max-w-md md:max-w-[1170px] px-4 pointer-events-auto">
                                <div className="bg-white w-full shadow-custom mx-auto py-8 md:py-12 px-6 md:px-12 xl:px-32 flex items-center gap-12 rounded-lg">
                                <Nav 
                                containerStyles="md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left" 
                                listStyles="flex flex-col justify-center gap-4" 
                                linkStyles="font-primary text-4xl text-primary cursor-pointer" 
                                spy={true}
                                />
                                
                                {/*info */}
                                <div className="hidden md:flex mx-auto">
                                    <div>
                                        <div className="flex gap-12 mb-12">
                                            {/*location */}
                                            <div className="flex flex-col">
                                                <div className="text-[28px] text-accent mb-2">
                                                    <FiMapPin />
                                                </div>
                                                <p className="font-semibold text-primary text-lg">Location</p>
                                                <p>Mumbai, India</p>
                                            </div>
                                             {/* email */}
                                             <div className="flex flex-col">
                                                <div className="text-[28px] text-accent mb-2">
                                                    <FiMail />
                                                </div>
                                                <p className="font-semibold text-primary text-lg">Email</p>
                                                <p>roushankumarmail07@gmail.com</p>
                                            </div>
                                        </div>
                                        {/* socials */}
                                        <Social containerStyles="flex gap-2" iconStyles="text-[20px] w-[32px] h-[32px] text-primary flex items-center justify-center rounded-full"/>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )
                }
            </AnimatePresence>
            
            {/* menu button */}
            {/* render button without animations on mobile */}
            {isMobile ? (
                <div className="fixed z-50 bottom-8 right-8">
                    <button
                        onClick={()=> setShowMenu(!showMenu)}
                        className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none pointer-events-auto"
                        aria-label="Toggle navigation menu"
                        aria-expanded={showMenu}
                    >
                        <CgMenuGridR  className="text-4xl text-white"/>
                    </button>
                </div>
            ): (
                <AnimatePresence>
                    {showMenuButton && (
                        <motion.div 
                            initial={{y:100, opacity:0}} 
                            animate={{y: 0, opacity: 1}}
                            exit={{y:100, opacity:0}}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 40,
                            }}
                           className="fixed z-50 bottom-16 pointer-events-auto"
                        >
                            <button
                                onClick={()=> setShowMenu(!showMenu)}
                                className="bg-accent shadow-custom w-[54px] h-[54px] rounded-lg cursor-pointer flex items-center justify-center select-none"
                                aria-label="Toggle navigation menu"
                                aria-expanded={showMenu}
                            >
                                <CgMenuGridR className="text-4xl text-white"/></button>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            </div>
        </>
    );
};

export default FixedMenu;