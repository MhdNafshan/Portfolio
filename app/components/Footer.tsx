import React from 'react'
import {motion, Variants} from "framer-motion"
import {
    FaGithub,
    FaLinkedin,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt

} from "react-icons/fa";

const Footer = () => {
    //Social Media Links Array
    const socialIcons = [
        { icon: FaGithub, href: "https://github.com/MhdNafshan" },
        { icon: FaLinkedin, href: "https://www.linkedin.com/in/nafshan/" },
        { icon: FaEnvelope, href: "mailto:tmrafshan@gmail.com" },
        { icon: FaPhone, href: "tel:+94718984484" },

    ];

     //Animation Variants
    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: 0.2 } }
    }

    const item: Variants = {
        hidden: { opacity: 0, y: 30 },
        show: {
            opacity: 1, y: 0, transition: { duration: 0.6 },
        },
    };
    return (
        <footer className='py-12 px-4 text-center'>
            <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            className='flex justify-center gap-2 md:gap-6 mb-8'>
                {socialIcons.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                        <motion.a
                        variants={item}
                        whileHover={{scale:1.02, rotate:5}}
                        whileTap={{scale:0.9}}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={index} className='p-4 rounded-2xl border border-outer hover:bg-primary/10 transition-all'>
                            <IconComponent className='text-xl md:text-2xl text-primary' />
                        </motion.a>
                    )
                })}
            </motion.div>
            <motion.p
            initial={{opacity:0, y:30}}
            whileInView={{opacity:1, y:0 }}
            transition={{duration:0.6, delay:0.2}}
            viewport={{once:true}}
            className='text-xl md:text-2xl font-semibold text-gradient max-w-3xl mx-auto mb-8'>
                Want to know more about me, tell me about your project or just to say hello? Drop me a line and I'll get back as soon as possible.
            </motion.p>
            <motion.hr 
            initial={{scaleX:0}}
            whileInView={{scaleX:1 }}
            transition={{duration:0.8, delay:0.4}}
            viewport={{once:true}}
            className='border-outer mb-8' />
            <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            className='grid grid-cols-1 md:grid-cols-3 gap-6 text-md text-content'>
                <motion.div variants={item}>
                    <p className='font-semibold'>Location</p>
                    <p>Mannar, Sri Lanka</p>
                </motion.div>
                <motion.div variants={item}>
                    <p className='font-semibold'>Phone</p>
                    <p>+94718848484</p>
                </motion.div>
                <motion.div variants={item}>
                    <p className='font-semibold'>Email</p>
                    <p>tmnafshan@gmail.com</p>
                </motion.div>
            </motion.div>

        </footer>

    )
}

export default Footer
