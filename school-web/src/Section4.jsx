import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image1 from './assets/Group 9.png';
import image2 from './assets/Group 11.png';
import image3 from './assets/Group 12.png';

export default function Section4() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const items = [
        {
            id: 1,
            image: image1,
            title: 'E-Learning',
            description: 'Our e-learning platform provides a wide array of educational resources, empowering students to achieve their academic goals. It features an interactive testing environment where students receive constructive feedback from educators and peers, helping them refine their problem-solving strategies and improve their exam preparation.'
        },
        {
            id: 2,
            image: image2,
            title: 'PeerStudy',
            description: 'We support students in achieving their academic goals through an engaging online learning community. Our platform enables students from diverse academic backgrounds to collaborate in real-time, boosting their motivation and connecting with mentors who provide valuable guidance. Join us to enhance your study experience and connect with peers who share your academic ambitions.'
        },
        {
            id: 3,
            image: image3,
            title: 'Collaborative Learning Hub',
            description: 'We empower students to reach their academic goals through a vibrant online community. Our platform facilitates real-time collaboration among students from various academic backgrounds, enhancing their study motivation and connecting them with mentors who offer expert guidance throughout their academic journey.'
        }
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
            className="p-8 min-h-screen mb-4 text-center"
        >
            <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-4xl font-bold text-center text-gray-800 leading-tight"
            >
                What We Offer
            </motion.h1>
            <motion.p
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-center"
            >
                Tailored Offerings for Optimal Results
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {items.map((item, index) => (
                    <motion.div
                        custom={index}
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        className="flex flex-col items-center text-left"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-[200px] md:h-[300px] object-cover rounded-t-lg"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
}