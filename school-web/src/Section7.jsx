
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from './assets/imagee.png';

export default function Section7() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    return (
        <motion.section
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: { opacity: 1, transition: { duration: 0.6 } },
                hidden: { opacity: 0, transition: { duration: 0.6 } },
            }}
            className="flex flex-col lg:flex-row items-center justify-between min-h-screen ml-10 mr-10 py-10 gap-5 mt-8"
        >
            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.2 } },
                    hidden: { opacity: 0, x: -50, transition: { duration: 0.6 } },
                }}
                className="gap-2"
            >
                <h1 className="text-3xl md:text-5xl leading-tight mb-4 md:mb-7 font-semibold">
                    Join the Journey to Academic Success
                </h1>
                <motion.p
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="text-sm md:text-base text-gray-600 mb-6 md:mb-8"
                >
                    Unlock your full potential with our dynamic learning platform. Connect with peers, engage with expert mentors, and access a wealth of resources designed to support and inspire you. Join our community today and take the first step towards achieving your academic goals.
                </motion.p>
                <motion.button
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.6 } },
                        hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.4 } },
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-pink-500 text-sm md:text-base px-4 md:px-6 py-2 md:py-3 text-white rounded-r-3xl hover:bg-pink-700 transition-colors"
                >
                    Start Your Learning Journey Now
                </motion.button>
            </motion.div>
            <motion.img
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6, delay: 0.4 } },
                    hidden: { opacity: 0, x: 50, transition: { duration: 0.6 } },
                }}
                src={image1}
                alt="Decorative graphic"
                className="rounded-t-lg"
            />
        </motion.section>
    );
}