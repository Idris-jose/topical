import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from './assets/Group 1.png';
import image2 from './assets/Frame 21.png';

export default function Section1() {
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
            className="flex flex-col lg:flex-row items-center min-h-screen px-4 lg:px-8 gap-5 mt-8"
        >
            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
                    hidden: { opacity: 0, x: -50, transition: { duration: 0.6 } },
                }}
                className="text-left w-full lg:w-1/2"
            >
                <h1 className="text-3xl lg:text-4xl font-semibold mb-5">
                    Achieve Your Academic<br /> Goals with <span className="text-[#991F94]">Topicaltest</span>
                </h1>
                <motion.p
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="font-light text-gray-600"
                >
                    Join thousands of students who are transforming their academic journey with Topicaltest. From personalized quizzes to real-time study sessions, our platform is designed to help you excel in your exams and beyond.
                </motion.p>
                <motion.div
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="flex flex-col sm:flex-row justify-start items-center mt-4 gap-2"
                >
                    <input
                        className="border-2 border-[#991F94] rounded p-2 w-full sm:w-80"
                        type="text"
                        placeholder="Enter email"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#991F94] p-2 text-white rounded sm:rounded-r-3xl w-full sm:w-auto"
                    >
                        Start learning now
                    </motion.button>
                </motion.div>
                <motion.div
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="flex justify-start items-center mt-4 gap-2"
                >
                    <img src={image2} alt="Image 2" className="h-5" />
                </motion.div>
                <motion.h3
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="text-sm mt-2"
                >
                    Supported by amazing people across Nigeria and other countries across West Africa
                </motion.h3>
            </motion.div>

            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
                    hidden: { opacity: 0, x: 50, transition: { duration: 0.6 } },
                }}
                className="flex justify-center lg:justify-end w-full lg:w-1/2"
            >
                <img src={image1} alt="Image 1" className="w-full lg:w-auto h-auto mt-4" />
            </motion.div>
        </motion.section>
    );
}