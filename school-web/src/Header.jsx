import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { ref, inView } = useInView({
        triggerOnce: false, // Allow repeated animations
        threshold: 0.3, // Trigger when 30% of the element is in view
    });

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Animation variants for the header
    const headerVariants = {
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
        hidden: { opacity: 0, y: -50, transition: { duration: 0.6, ease: "easeIn" } },
    };

    // Animation variants for navigation links
    const navLinkVariants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
        }),
        hidden: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeIn" } },
    };

    // Animation variants for buttons
    const buttonVariants = {
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.4 } },
        hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
    };

    return (
        <motion.header
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            variants={headerVariants}
            className="border-2 border-[#991F94] text-black rounded-2xl m-2 mt-4 ml-30 mr-30 p-3 flex items-center justify-between"
        >
            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
                    hidden: { opacity: 0, x: -20, transition: { duration: 0.5 } },
                }}
                className="text-2xl font-bold"
            >
                School Web
            </motion.div>

            {/* Navigation menu */}
            <nav
                className={`${
                    isMenuOpen ? "block" : "hidden"
                } absolute top-16 left-0 w-full bg-white border-t-2 border-[#991F94] p-4 
                md:flex md:items-center md:justify-center md:static md:w-auto md:p-0 md:bg-transparent md:border-none md:flex-1`}
            >
                <div className="flex flex-col md:flex-row md:gap-4 md:items-center">
                    {["Home", "About", "Offering", "Subjects", "Testimonials"].map((item, index) => (
                        <motion.a
                            key={item}
                            href="#"
                            custom={index}
                            animate={(isMenuOpen || window.innerWidth >= 768) && inView ? "visible" : "hidden"}
                            variants={navLinkVariants}
                            className="block py-2 hover:text-gray-400 md:inline"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item}
                        </motion.a>
                    ))}
                    <motion.button
                        animate={inView ? "visible" : "hidden"}
                        variants={buttonVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 md:hidden bg-[#991F94] px-4 py-2 text-white rounded-r-3xl hover:bg-[#7a1a75] transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Start learning now
                    </motion.button>
                </div>
            </nav>

            {/* Desktop button and hamburger menu */}
            <div className="flex items-center">
                <motion.button
                    animate={inView ? "visible" : "hidden"}
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="md:hidden bg-[#991F94] p-2 text-white rounded"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                >
                    ☰
                </motion.button>
                <motion.button
                    animate={inView ? "visible" : "hidden"}
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="hidden md:block bg-[#991F94] px-4 py-2 text-white rounded-r-3xl hover:bg-[#7a1a75] transition-colors ml-4"
                    onClick={() => setIsMenuOpen(false)}
                >
                    Start learning now
                </motion.button>
            </div>
        </motion.header>
    );
}