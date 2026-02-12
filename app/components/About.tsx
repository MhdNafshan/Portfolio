import { PiStarFourFill } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";
import React from 'react'
import { motion, Variants } from 'framer-motion';

const About = () => {
    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } },
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };
    return (
        <section className='mt-12 pb-8' id='about'>
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-center font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg' />
                    About Me
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Turning coplex problems <br />
                    into simple solutions
                </h2>
            </motion.div>
            {/* About data */}

            
            







            {/* Content text */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className='grid grid-cols-1 lg:grid-cols-3 gap-12 items-start'>
                <div className='lg:col-span-2 space-y-6'>
                    <motion.p
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>
                        To improve my programming and problem-solving skills by working on real software development tasks, gaining hands-on experience and learning industry best practices from a professional team.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        viewport={{ once: true }}
                        className='text-gray-600 text-lg leading-relaxed'>
                        I am a passionate Software Engineer with expertise in developing responsive web applications using HTML5, CSS3, and JavaScript. I have developed multiple projects including interactive games, task management applications, and form validation systems. I'm currently pursuing my BSc in Computing and Information Systems and eager to contribute to innovative projects.
                    </motion.p>
                    {/* Download button */}
                    <motion.a
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        viewport={{ once: true }}
                        href="/assets/tm-nafshan-resume.pdf"
                        className='custom-gradient py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 w-max hover:opacity duration-300' download>
                        Download CV
                        <HiDownload className="text-lg" />
                    </motion.a>
                </div>
                {/* Right side content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className='lg:col-span-1 space-y-4'>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>Name</p>
                        <p className='text-gray-800 text-xl font-semibold'>T.M. Nafshan </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>Phone</p>
                        <p className='text-gray-800 text-xl font-semibold'>+94718848484</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>Email</p>
                        <p className='text-gray-800 text-xl font-semibold'>tmnafshan@gmail.com</p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <p className='text-gray-500 text-sm font-medium mb-1'>Location</p>
                        <p className='text-gray-800 text-xl font-semibold'>Mannar, Sri Lanka</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About
