import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import logos from './assets/Frame 1272628945.png';
import image1 from './assets/Frame 28.png';
import image2 from './assets/Frame 28-1.png';
import image3 from './assets/Frame 28-2.png';

export default function Section3() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const items = [
        {
            id: 1,
            image: image1,
            title: 'Test Your Knowledge',
            description: 'Engage in study sessions with peers from around the world. Collaborate, share insights, and get support from a community of learners just like you.'
        },
        {
            id: 2,
            image: image2,
            title: 'Improve Your Skills',
            description: 'Our platform provides corrective feedback from educators, helping you understand your mistakes and improve your question-solving strategies.'
        },
        {
            id: 3,
            image: image3,
            title: 'Track Your Success',
            description: 'Monitor your academic progress with our intuitive tracking tools. Stay motivated by watching your achievements grow over time.'
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
            className="p-8 min-h-screen flex flex-col justify-center text-center"
        >
            <motion.h1
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="text-4xl font-bold text-left text-gray-800 mb-8 leading-tight"
            >
                Unlock Your Potential with Interactive<br />Learning Tools.
            </motion.h1>
            <div className="flex flex-wrap items-center justify-center gap-6">
                {items.map((item, index) => (
                    <motion.div
                        custom={index}
                        animate={inView ? "visible" : "hidden"}
                        variants={cardVariants}
                        className="flex flex-col items-center gap-4 p-6 w-80 text-center"
                        key={item.id}
                    >
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-12 h-12 rounded-full"
                        />
                        <div>
                            <h2 className="text-xl font-semibold text-gray-800">{item.title}</h2>
                            <p className="text-gray-600 mt-2">{item.description}</p>
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
                className="flex items-center justify-center gap-4 mt-8 border-t border-gray-300 pt-4"
            >
                <h3 className="text-sm md:text-sm font-semibold text-gray-700">NEWS AND PRESS:</h3>
                <img src={logos} alt="Logos" className="h-3 md:h-8" />
            </motion.div>
        </motion.section>
    );
}