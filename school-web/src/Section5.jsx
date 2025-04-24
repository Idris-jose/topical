import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from './assets/Rectangle 12-1.png';
import image2 from './assets/Rectangle 12-2.png';
import image3 from './assets/Rectangle 12.png';

export default function Section5() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const items = [
        {
            id: 1,
            image: image1,
            subject: 'Physics',
            teacher: 'Teacher: Abayomi Odole',
            buttonstyle:
                'bg-[#991F94] text-white px-4 py-2 rounded-b-lg w-full hover:bg-[#7a1776] transition',
        },
        {
            id: 2,
            image: image2,
            subject: 'Chemistry',
            teacher: 'Teacher: Abayomi Odole',
            buttonstyle:
                'bg-gray-300 text-white px-4 py-2 rounded-b-lg w-full hover:bg-[#7a1776] transition',
        },
        {
            id: 3,
            image: image3,
            subject: 'Biology',
            teacher: 'Teacher: Abayomi Odole',
            buttonstyle:
                'bg-gray-300 text-white px-4 py-2 rounded-b-lg w-full hover:bg-[#7a1776] transition',
        },
    ];

    const cardVariants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
        }),
        hidden: { opacity: 0, y: 30, transition: { duration: 0.5, ease: "easeIn" } },
    };

    return (
        <motion.section
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: { opacity: 1, transition: { duration: 0.6 } },
                hidden: { opacity: 0, transition: { duration: 0.6 } },
            }}
            className="p-4 md:p-8 mb-4 text-center"
        >
            <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-2xl md:text-4xl font-bold text-gray-800 mb-4"
            >
                Our Subject List
            </motion.h1>
            <motion.p
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-gray-600 max-w-xl md:max-w-2xl mx-auto mb-6 md:mb-10"
            >
                Discover a wide range of knowledge tailored to your educational needs
                and embark on a seamless learning journey where every subject is just a
                click away, unlocking a holistic educational experience with us.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <motion.div
                        custom={index}
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        className="flex flex-col items-start bg-white rounded-lg shadow-md"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.subject}
                            className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
                        />
                        <div className="p-4 flex flex-col justify-between items-center w-full">
                            <div className="flex flex-col items-center gap-2">
                                <h2 className="text-lg md:text-xl font-semibold text-gray-800">
                                    {item.subject}
                                </h2>
                                <p className="text-gray-600 text-sm">{item.teacher}</p>
                            </div>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={item.buttonstyle}
                        >
                            Enroll now
                        </motion.button>
                    </motion.div>
                ))}
            </div>
            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.6 } },
                    hidden: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
                }}
                className="mt-6 md:mt-8"
            >
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FF69B4] text-white px-8 py-3 rounded-r-full hover:bg-[#ff4f9d] transition"
                >
                    Load More
                </motion.button>
            </motion.div>
        </motion.section>
    );
}