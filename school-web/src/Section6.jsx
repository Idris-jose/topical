import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Section6() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const testimonials = [
        {
            name: "Adeda, 17",
            picture: 'https://via.placeholder.com/150',
            testimony: 'Topical helped me prepare for my WAEC exams. The quizzes were challenging and fun, and the feedback from educators was invaluable. I’m proud to say I passed with flying colors!',
            stars: 5
        },
        {
            name: "Adeda, 17",
            picture: 'https://via.placeholder.com/150',
            testimony: 'Topical helped me prepare for my WAEC exams. The quizzes were challenging and fun, and the feedback from educators was invaluable. I’m proud to say I passed with flying colors!',
            stars: 5
        },
        {
            name: "Adeda, 17",
            picture: 'https://via.placeholder.com/150',
            testimony: 'Topical helped me prepare for my WAEC exams. The quizzes were challenging and fun, and the feedback from educators was invaluable. I’m proud to say I passed with flying colors!',
            stars: 5
        },
        {
            name: "Adeda, 17",
            picture: 'https://via.placeholder.com/150',
            testimony: 'Topical helped me prepare for my WAEC exams. The quizzes were challenging and fun, and the feedback from educators was invaluable. I’m proud to say I passed with flying colors!',
            stars: 5
        },
        {
            name: "Emily Davis",
            picture: 'https://via.placeholder.com/150',
            testimony: 'I’ve learned so much since joining. Highly recommend it to everyone!',
            stars: 5
        },
        {
            name: "Daniel Garcia",
            picture: 'https://via.placeholder.com/150',
            testimony: 'The resources are top-notch and easy to use. Great experience overall.',
            stars: 4
        },
        {
            name: "Olivia Martinez",
            picture: 'https://via.placeholder.com/150',
            testimony: 'This platform has been a game-changer for my academic journey.',
            stars: 5
        },
        {
            name: "William Hernandez",
            picture: 'https://via.placeholder.com/150',
            testimony: 'I appreciate the variety of resources available. It’s been very helpful.',
            stars: 4
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = {
        mobile: 1,
        desktop: 4
    };

    const handleNext = () => {
        if (currentIndex + 1 < testimonials.length) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const displayedTestimonials = testimonials.slice(
        currentIndex,
        currentIndex + (window.innerWidth < 768 ? itemsPerPage.mobile : itemsPerPage.desktop)
    );

    const testimonialVariants = {
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
            className="p-8 min-h-screen mt-20"
        >
            <motion.h3
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-sm font-semibold text-[#991F94] mb-2"
            >
                Student Testimonial
            </motion.h3>
            <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-4xl font-bold text-gray-800 mb-4"
            >
                Real Experiences, Real Results
            </motion.h1>
            <motion.p
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.4 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-gray-600 max-w-2xl mb-8"
            >
                Discover how our platform has transformed the learning journeys of students just like you. Explore their stories and see firsthand the impact our community and resources have had on their academic success.
            </motion.p>
            <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {displayedTestimonials.map((testimonial, index) => (
                        <motion.div
                            custom={index}
                            animate={inView ? "visible" : "hidden"}
                            variants={testimonialVariants}
                            key={index}
                            className="p-4 bg-white rounded-lg shadow-md"
                        >
                            <div className="flex items-center mb-2">
                                <p className="text-yellow-500 text-lg">
                                    {"★".repeat(testimonial.stars) + "☆".repeat(5 - testimonial.stars)}
                                </p>
                            </div>
                            <p className="text-gray-600 text-sm mb-4 italic">"{testimonial.testimony}"</p>
                            <div className="flex items-center">
                                <img
                                    src={testimonial.picture}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                            </div>
                        </motion.div>
                    ))}
                </div>
                <motion.div
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.6 } },
                        hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                    }}
                    className="flex justify-center gap-4 mt-6"
                >
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handlePrev}
                        disabled={currentIndex === 0}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            currentIndex === 0 ? 'bg-gray-200 text-gray-400' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                        } transition-colors`}
                    >
                        ←
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={handleNext}
                        disabled={currentIndex + (window.innerWidth < 768 ? itemsPerPage.mobile : itemsPerPage.desktop) >= testimonials.length}
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                            currentIndex + (window.innerWidth < 768 ? itemsPerPage.mobile : itemsPerPage.desktop) >= testimonials.length
                                ? 'bg-gray-200 text-gray-400'
                                : 'bg-[#991F94] text-white hover:bg-[#7a1776]'
                        } transition-colors`}
                    >
                        →
                    </motion.button>
                </motion.div>
            </div>
        </motion.section>
    );
}