import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import resumePdf from '../assets/DataScientistResume.pdf';

function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" }
        },
    };

    return (
        <motion.section
            id="hero"
            className="hero container"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.p className="small-heading" variants={itemVariants}>
                Hey there! I'm
            </motion.p>
            <motion.h1 className="big-heading" variants={itemVariants}>
                Deekshith N
            </motion.h1>
            <motion.div variants={itemVariants}>
                <h2 className="sub-heading">
                    <TypeAnimation
                        sequence={[
                            'Data Scientist',
                            2000,
                            'ML Enthusiast',
                            2000,
                            'AI Developer',
                            2000,
                            'Software Developer',
                            2000,
                        ]}
                        wrapper="span"
                        speed={50}
                        className="highlight"
                        repeat={Infinity}
                    />
                </h2>
            </motion.div>
            <motion.p className="description" variants={itemVariants}>
                Highly motivated and results-driven B.Tech Artificial Intelligence and Machine Learning undergraduate at M. S. Ramaiah University of Applied Sciences (2022–2026). Proficient in Python, Java, DSA, SQL, and machine learning, with a passion for applying Data Science, Deep learning, and NLP to solve real-world problems. Seeking internships and entry-level opportunities in data science and AI.
            </motion.p>
            <motion.div variants={itemVariants}>
                <button
                    className="cta-button"
                    onClick={() => {
                        window.open(resumePdf, '_blank');
                    }}
                    data-cursor-tooltip="Download CV"
                >
                    View My Resume
                </button>
            </motion.div>
        </motion.section>
    );
}

export default Hero;