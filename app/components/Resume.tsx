import { div } from 'framer-motion/client';
import { title } from 'process';
import React from 'react'
import { PiGraduationCapFill, PiStarFourFill } from "react-icons/pi";
import { GiFarmer } from "react-icons/gi";
import { motion, Variants } from "framer-motion"

const Resume = () => {
    //Education array
    const EducationData = [
        {
            year: "2017/12 - 2024/02",
            title: "BSc (Hons) in Computing and Information Systems",
            institution: "Sabaragamuwa University of Sri Lanka",
            description: "Faculty of Computing. Coursework includes software development, database management, web technologies, and software engineering principles."
        },
        {
            year: "2016",
            title: "Combined Mathematics, Physics, Chemistry",
            institution: "MM/Sithivnayakar Hindu (National) College",
            description: "Advanced Level studies with focus on science and mathematics fundamentals."
        }
    ]

    //Experience array
    const WorkData = [
        {
            year: "2023 - Present",
            title: "Software Engineer Intern",
            company: "TBD - Current Role",
            description: "Working on real software development tasks, gaining hands-on experience in web development, implementing features using HTML5, CSS3, and JavaScript with focus on responsive design and user experience."
        },
        {
            year: "2022 - 2023",
            title: "Junior Web Developer",
            company: "Portfolio Projects",
            description: "Developed multiple web applications including quiz platforms, interactive games, task management systems, and form validation tools with modern web technologies."
        },
        {
            year: "2021 - 2022",
            title: "Web Development Learner",
            company: "Self-Study & Internship",
            description: "Completed comprehensive training in web development fundamentals including HTML5, CSS3, JavaScript, and OOP concepts. Built foundational projects for portfolio."
        }

    ]

    //Animation Variants
    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } }
    }

    const itemMotion: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1, y: 0, transition: { duration: 0.6 },
        },
    };
    return (
        <section className='mt-12 pb-8' id='resume'>
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-center font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg' />
                    Resume
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Education and practical <br />
                    Experience
                </h2>
            </motion.div>

            {/* Timeline Content */}
            <div className=' space-y-12'>
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>
                        My Education
                    </h3>
                    <div className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'>
                        </div>
                        <div>
                            {EducationData.map((item, index) => (
                                <motion.div
                                    variants={itemMotion}
                                    whileHover={{ x: 10 }}

                                    className='relative flex items-start space-x-6 pb-8'
                                    key={index}>
                                    <div className='relative flex-shrink-0'>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center  '>
                                            <PiGraduationCapFill className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex item-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>{item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                        <p className='text-gray-600 mb-2'>{item.institution}</p>
                                        <p className='text-gray-700 text-sm'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
                {/* Experience */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}>
                    <h3 className='text-xl md:text-2xl font-bold text-content mb-8'>
                        Work Experience
                    </h3>
                    <div
                        className='relative'>
                        <div className='absolute left-4 top-0 bottom-0 w-0.5 custom-gradient opacity-60'>
                        </div>
                        <div>
                            {WorkData.map((item, index) => (
                                <motion.div
                                    variants={itemMotion}
                                    whileHover={{ x: 10 }}
                                    className='relative flex items-start space-x-6 pb-8'
                                    key={index}>
                                    <div className='relative flex-shrink-0'>
                                        <div className='w-8 h-8 custom-gradient rounded-full flex items-center justify-center  '>
                                            <GiFarmer className='w-4 h-4 text-white' />
                                        </div>
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <div className='flex item-center space-x-2 mb-2'>
                                            <span className='text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded'>{item.year}</span>
                                        </div>
                                        <h4 className='text-lg font-semibold text-content'>{item.title}</h4>
                                        <p className='text-gray-600 mb-2'>{item.company}</p>
                                        <p className='text-gray-700 text-sm'>{item.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    )
}

export default Resume
