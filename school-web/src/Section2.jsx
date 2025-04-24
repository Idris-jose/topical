import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from './assets/Mask group.png';

export default function Section2() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const sectionVariants = {
        visible: { opacity: 1, transition: { duration: 0.6 } },
        hidden: { opacity: 0, transition: { duration: 0.6 } },
    };

    return (
        <motion.section
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            variants={sectionVariants}
            className="ml-10 min-h-screen mr-10 py-10"
        >
            <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-4xl text-center font-semibold mb-20"
            >
                About Us
            </motion.h1>
            <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
                <motion.div
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
                        hidden: { opacity: 0, x: -50, transition: { duration: 0.6 } },
                    }}
                    className="text-left md:w-1/2"
                >
                    <h2 className="text-3xl font-semibold mb-5">
                        Empowering Students, Transforming Futures
                    </h2>
                    <motion.p
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                            hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                        }}
                        className="mb-4"
                    >
                        At Topicaltest, we are dedicated to empowering students across Nigeria and West Africa by providing them with the tools they need to excel academically. Our platform offers interactive, topic-based quizzes, real-time study sessions, and personalized feedback, all designed to enhance exam preparation and learning outcomes. We believe in fostering a supportive community where students can connect, collaborate, and grow together.
                    </motion.p>
                    <motion.p
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
                            hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                        }}
                        className="mb-4"
                    >
                        Join us on your journey to academic success with Topicaltest—where learning meets opportunity.
                    </motion.p>
                    <motion.button
                        animate={inView ? "visible" : "hidden"}
                        variants={{
                            visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.8 } },
                            hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#991F94] px-6 py-2 text-white rounded-r-3xl hover:bg-[#7a1776] transition"
                    >
                        Learn More
                    </motion.button>
                </motion.div>
                <motion.img
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
                        hidden: { opacity: 0, x: 50, transition: { duration: 0.6 } },
                    }}
                    src={image1}
                    alt="Empowering Students"
                    className="w-full md:w-1/2 h-auto mt-4 md:mt-0 rounded-lg shadow-lg"
                />
            </div>
        </motion.section>
    );
}