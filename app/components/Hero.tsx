import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import { HiDownload, HiOutlineViewGrid } from 'react-icons/hi'

const Hero = () => {

    //Icons array
    const icons = [
        "/assets/icon-2.svg",
        "/assets/icon-6.svg",
        "/assets/icon-7.svg",
        "/assets/icon-8.svg",
    ];

    //Animation variants
    const container:Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },

    };
    const item:Variants = {
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
    }

    return (
        <section>
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className='max-w-2xl mx-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-0 pb-8 overflow-hidden'>
                {/* Profile Image */}
                <motion.div variants={item}>
                    <Image
                        src="/assets/profile.jpeg"
                        width={150}
                        height={150}
                        className='rounded-full mb-4'
                        priority
                        alt='Profile Image'
                    />
                </motion.div>
                {/* Name */}
                <motion.h3 
                variants={item} 
                className='text-lg md:text-xl font-semibold flex items-center justify-center gap-2'>
                    I'm T.M. Nafshan <span className='inline-block'>👋</span>
                </motion.h3>
                {/* Title */}
                <motion.h1 
                variants={item} 
                className='text-3xl md:text-5xl font-semibold mt-2 leading-thight'>
                   Software Engineer <br className='md:hidden' />
                </motion.h1>
                {/* Icons Swipe */}
                <motion.div
                variants={item} 
                className='relative my-6 md:my-8 w-full mask-r-from-50% mask-1-from-50% overflow-hidden'>
                    <motion.div className='flex gap-4 w-max'
                        animate={{ x: ["0%", "-66.66%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 15,
                            ease: "linear"
                        }}>
                        {/* Icons Loop */}
                        {icons.concat(icons).concat(icons).map((icon, index) => (
                            <Image
                                src={icon}
                                key={index}
                                width={40}
                                height={40}
                                alt={`icon ${index + 1}`}
                                className='md:w-[50px] md:h-[50px]'
                            />
                        ))}
                    </motion.div>
                </motion.div>
                {/* Button */}
                <motion.div 
                variants={item} 
                className='flex flex-col md:flex-row items-center justify-center gap-4 w-full md:w-auth'>
                    <a className='custom-gradient w-full md:w-auto py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity duration-300' href="#portfolio">
                        My Work <HiOutlineViewGrid className='text-lg' />
                    </a>
                    <a className='w-full md:w-auto py-3 px-8 rounded-full font-semibold border border-content/20 hover:border-content/40 hover:shadow-sm transition-colors duration-300 flex items-center justify-center gap-2' href="/assets/tm-nafshan-resume.pdf" download>
                        My Resume <HiDownload className='text-lg' />
                    </a>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
