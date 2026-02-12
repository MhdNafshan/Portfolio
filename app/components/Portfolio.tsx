import { div } from 'framer-motion/client';
import React from 'react'
import { PiStarFourFill } from "react-icons/pi";
import { HiArrowUpRight } from "react-icons/hi2";
import { motion, Variants } from 'framer-motion';

const Portfolio = () => {
    //Projects arrays
    const projects = [
        {
            id: 1,
            title: "Quiz Application",
            image: "/assets/portfolio2.jpeg",
            tags: ["HTML", "CSS", "JavaScript"],
            href:"https://quiz-app-vert-psi-21.vercel.app/",
        },
        {
            id: 2,
            title: "Rock Paper Scissors Game",
            image: "/assets/portfolio5.jpeg",
            tags: ["HTML", "CSS", "JavaScript"],
            href:"https://rock-paper-scissor-2-five.vercel.app/",
        },
        {
            id: 3,
            title: "To-Do List Application",
            image: "/assets/portfolio1.jpeg",
            tags: ["HTML", "CSS", "JavaScript"],
            href:"https://todo-app-one-tau-70.vercel.app/",
        },
        {
            id: 4,
            title: "Color Flipper Web App",
            image: "/assets/portfolio3.jpeg",
            tags: ["HTML", "CSS", "JavaScript"],
            href:"https://color-flipper-02.vercel.app/",
        },
          
    ];

    //Animation variants
    const container:Variants ={
        hidden:{},
        show:{
            transition:{
                staggerChildren:0.25,
            },
        },
    };
    //Card
    const card:Variants = {
        hidden: {opacity:0, y:60, rotateX: -10},
        show:{
            opacity:1,
            y:0,
            rotateX:0,
            transition: {duration:0.6, ease:"easeOut"},
        },
    };
    return (
        <section className='my-8' id="portfolio">
            {/* Heading */}
            <motion.div 
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0 }}
            transition={{duration:0.6}}
            viewport={{once:true}}
            className='text-center'>
                <p className='text-center font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                <PiStarFourFill className='text-lg' />
                Portfolio
            </p>
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                Check out my featured <br/>
                projects
            </h2>
        </motion.div>
        {/* Project Grid */}
        <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{once:true, amount:0.2}} 
        className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {projects.map((project) => (
                <a 
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                key={project.id}
                className='block'>
                <motion.div 
                variants={card}
                whileHover={{scale:1.03, rotateY:3}}
                transition={{type:"spring",stiffness:120, damping:12}}
                className='group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer'>
                    <motion.div 
                    whileHover={{scale:1.05}}
                    transition={{duration:0.4}}
                    className='relative overflow-hidden'>
                        <img
                        src={project.image}
                        alt={project.title}
                        className='w-full h-64 md:h-[450px] object-cover'/>
                    </motion.div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black-60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    </div>
                    {/* Project Info */}
                    <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show" 
                    className='absolute bottom-4 left-4 right-4 p-3 md:p-6 rounded-2xl bg-black/20 backdrop-blur-md border-t border-white/10 '>
                        <div className='flex flex-wrap gap-2 mb-3'>
                            {project.tags.map((tagText, index) =>(
                                <span 
                                key={tagText || index} 
                                className='px-3 py-1 bg-white/10 text-white/80 text-sm rounded-full border border-white/20' > 
                                {tagText}
                                </span>
                            ))}
                        </div>
                    
                    <div className='flex items-center justify-between'>
                        <h3 className='text-xl font-bold text-white transition-colors duration-300'>{project.title}</h3>
                        {/* button */}
                        <div className='flex items-center justify-center w-10 h-10 bg-white/10 backdrop:blur-sm border border-white/20 rounded-full text-white group-hover:bg-white/20 transition-colors duration-300 pointer-events-none'>
                            <HiArrowUpRight className='text-lg' />
                        </div>
                        
                    </div>  
                    </motion.div>
                    {/* Hover glow effect */}
                    <div>
                        <motion.div 
                        initial={{opacity:0}}
                        whileHover={{opacity:1}}
                        transition={{duration:0.4}}
                        className='absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/10 to-pink-500/10'>   
                        </motion.div>
                    </div>
                </motion.div>
                </a>
            ))}
        </motion.div>
    </section>
  )
}

export default Portfolio
