import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Footer() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.3,
    });

    const sectionVariants = {
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.5, ease: "easeOut" },
        }),
        hidden: { opacity: 0, y: 20, transition: { duration: 0.5, ease: "easeIn" } },
    };

    return (
        <motion.footer
            ref={ref}
            animate={inView ? "visible" : "hidden"}
            variants={{
                visible: { opacity: 1, transition: { duration: 0.6 } },
                hidden: { opacity: 0, transition: { duration: 0.6 } },
            }}
            className="bg-[#8B1E5C] text-white py-8"
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-30">
                {/* Newsletter Section */}
                <motion.div
                    custom={0}
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariants}
                    className="flex flex-col gap-4"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">TOPICAL</span>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-1">
                        <input
                            type="email"
                            placeholder="ENTER YOUR EMAIL"
                            className="bg-[#A63A76] text-white placeholder-white border-none rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ED28AE] w-full sm:w-auto"
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#ED28AE] px-3 py-1 rounded hover:bg-[#7a1a75] transition-colors"
                        >
                            SUBSCRIBE NOW
                        </motion.button>
                    </div>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Mi vulputate amet, lobortis mi placerat aliquam, adipiscing tempus morbi necque.
                    </p>
                    <div className="flex gap-4 mt-4">
                        <motion.a href="#" aria-label="Facebook" whileHover={{ scale: 1.1 }}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-2.596 0-4.192 1.583-4.192 4.615v3.385z" />
                            </svg>
                        </motion.a>
                        <motion.a href="#" aria-label="Twitter" whileHover={{ scale: 1.1 }}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.141-5.144-.424.722-.666 1.561-.666 2.457 0 1.696.864 3.192 2.179 4.069-.803-.025-1.557-.246-2.215-.616v.062c0 2.367 1.684 4.344 3.919 4.789-.41.111-.843.171-1.291.171-.314 0-.621-.03-.921-.086.621 1.937 2.419 3.342 4.557 3.385-1.669 1.307-3.772 2.084-6.057 2.084-.394 0-.787-.022-1.172-.065 2.179 1.396 4.768 2.212 7.548 2.212 9.057 0 14.01-7.496 14.01-13.986 0-.213-.005-.426-.014-.637.961-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </motion.a>
                        <motion.a href="#" aria-label="Instagram" whileHover={{ scale: 1.1 }}>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.24 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.24-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.24-2.242-1.301-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.24 3.608-1.301 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.405.062-2.813.344-3.966 1.497-1.153 1.153-1.435 2.561-1.497 3.966-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.062 1.405.344 2.813 1.497 3.966 1.153 1.153 2.561 1.435 3.966 1.497 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.405-.062 2.813-.344 3.966-1.497 1.153-1.153 1.435-2.561 1.497-3.966.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.062-1.405-.344-2.813-1.497-3.966-1.153-1.153-2.561-1.435-3.966-1.497-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 9.834c-2.073 0-3.834-1.761-3.834-3.834s1.761-3.834 3.834-3.834 3.834 1.761 3.834 3.834-1.761 3.834-3.834 3.834zm6.139-9.834c-.777 0-1.406-.629-1.406-1.406s.629-1.406 1.406-1.406 1.406.629 1.406 1.406-.629 1.406-1.406 1.406z" />
                            </svg>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Website Links */}
                <motion.div
                    custom={1}
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariants}
                >
                    <h3 className="text-lg font-semibold mb-4">Website Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">About us</a></li>
                        <li><a href="#" className="hover:underline">Offerings</a></li>
                        <li><a href="#" className="hover:underline">Subjects</a></li>
                        <li><a href="#" className="hover:underline">Testimonials</a></li>
                    </ul>
                </motion.div>

                {/* Services */}
                <motion.div
                    custom={2}
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariants}
                >
                    <h3 className="text-lg font-semibold mb-4">Services</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:underline">Lorem ipsum</a></li>
                        <li><a href="#" className="hover:underline">Lorem ipsum</a></li>
                        <li><a href="#" className="hover:underline">Lorem ipsum</a></li>
                    </ul>
                </motion.div>

                {/* Contacts */}
                <motion.div
                    custom={3}
                    animate={inView ? "visible" : "hidden"}
                    variants={sectionVariants}
                >
                    <h3 className="text-lg font-semibold mb-4">Contacts</h3>
                    <ul className="text-sm space-y-2">
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            +2348039227704
                        </li>
                        <li className="flex items-center gap-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            topicaltesting@gmail.com
                        </li>
                    </ul>
                </motion.div>
            </div>
            <motion.div
                animate={inView ? "visible" : "hidden"}
                variants={{
                    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.8 } },
                    hidden: { opacity: 0, y: 20, transition: { duration: 0.5 } },
                }}
                className="max-w-7xl mx-auto px-4 md:px-8 pt-6 border-t border-[#A63A76] text-center text-sm"
            >
                <p>© TOPICAL</p>
            </motion.div>
        </motion.footer>
    );
}