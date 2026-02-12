import React from 'react'
import { FaPaperPlane } from 'react-icons/fa';
import { PiStarFourFill } from "react-icons/pi";
import { motion, Variants } from "framer-motion"

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event: any) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "3317ca9a-8314-4c6d-a380-cb0d38345113");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Message Sent Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

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
        <section className='mt-12 pb-8' id='contact'>
            {/* Heading */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-center'>
                <p className='text-center font-semibold inline-flex items-center gap-1 border-1 border-outer py-1.5 px-3 rounded-2xl mb-4'>
                    <PiStarFourFill className='text-lg' />
                    Contact
                </p>
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-8'>
                    Let's make something <br /> awesome together!
                </h2>
            </motion.div>
            {/* Contact form */}
            <motion.form
            variants={container}
            initial="hidden"
            whileInView="show"
                onSubmit={onSubmit}
                className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4 text-xl font-semibold'>
                {/* Left Side */}
                <div className='flex flex-col space-y-6'>
                    <motion.input
                    variants={item}
                    whileFocus={{scale:1.02}}
                        type="text"
                        name='Name'
                        id=''
                        placeholder='Your Name*'
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3'
                        required />
                    <motion.input
                    variants={item}
                    whileFocus={{scale:1.02}}
                        type='email'
                        name='email'
                        id=''
                        placeholder='Email Address*'
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3'
                        required />
                </div>
                {/* Right Side */}
                <div className='flex flex-col space-y-6'>
                    <motion.input
                    variants={item}
                    whileFocus={{scale:1.02}}
                        type="text"
                        name='Company'
                        id=''
                        placeholder='Company Name'
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3'
                        required />
                    <motion.input
                    variants={item}
                    whileFocus={{scale:1.02}}
                        type='tel'
                        name='Phone'
                        id=''
                        placeholder='Phone Number'
                        className='border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-3'
                        required />
                </div>
                {/* Text Area */}
                <div className='md:col-span-2 '>
                    <motion.textarea
                    variants={item}
                    whileFocus={{scale:1.02}}
                        name='message'
                        id=''
                        placeholder='A Few Words*'
                        className='w-full border-b-2 border-outer bg-transparent focus:outline-none focus:border-primary py-2 h-24 resize-none'
                        required>
                    </motion.textarea>
                </div>
                {/* Button */}
                <div className='md:col-span-2 ' >
                    <motion.button
                    variants={item}
                    whileHover={{scale:1.05}}
                        type='submit'
                        className='mt-6 custom-gradient text-white text-[1rem] font-semibold py-3 px-6 rounded-2xl flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer'>
                        Send Message <FaPaperPlane className='text-lg' />
                    </motion.button>
                </div>
                <span>{result}</span>
            </motion.form>

        </section>
    )
}

export default Contact
