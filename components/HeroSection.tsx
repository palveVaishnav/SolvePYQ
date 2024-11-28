"use client"
// import Image from "next/image";
import { motion } from 'motion/react';
import AnimateText from './Animate/TextAppear';

export default function Herosection() {
    return (
        <div
            className=" w-full grid place-content-center p-40"
        >
            <div
                className="max-w-screen-md text-center grid"
            >
                <span className='text-black bg-blue-400 p-2 rounded-xl w-fit justify-self-center font-bold'>Project is Under-Development, Launching Soon !!</span>
                <AnimateText text="PRACTICE PREVIOUS YEAR QUESTION PAPER FOR FREE" className='text-[4em]' />
                <span
                    className="text-xl"
                >
                    {"If you are preparing for a computer based test ( CBT ),We are here to help !!".split(" ").map((el, idx) => (
                        <motion.span
                            key={idx}
                            className='font-semibold'
                            initial={{
                                y: 24,
                                opacity: 0,
                                // filter: "blur(10px)",
                            }}
                            animate={{
                                y: 0,
                                type: 'spring',
                                opacity: 1,
                                // filter: "blur(0px)"
                            }}
                            transition={{
                                delay: 0.1 * idx,
                                duration: 2,
                            }}
                        >
                            {el}{" "}
                        </motion.span>
                    ))}
                </span>
                <motion.button
                    className="uppercase border px-6 py-2 rounded-xl w-fit justify-self-center mt-10 bg-gradient-to-r from-slate-600 to-slate-300"
                    initial={{
                        y: 20,
                        opacity: 0.1,
                        filter: "blur(10px)"
                    }}
                    animate={{
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{
                        duration: 2,
                    }}
                >Start Now</motion.button>
            </div>
        </div >
    )
}

/**
 * 
    <motion.div
        initial={{
            opacity: 0.5,
            y: -30,
            scale: 0.5,
        }}
        animate={{
            opacity: 1,
            y: 0,
            scale: 1,
        }}
        transition={{
            duration: .5,
            type: "spring"
        }}
        className="grid place-content-center absolute"
    >
        <Image
            alt="Jee Main"
            src={'/books.png'}
            width={300}
            height={300}
            className="-translate-x-60"
        /> 
        <Image
            alt="Jee Main"
            src={'/aplus.png'}
            width={250}
            height={250}
            className="translate-x-96"
        />
        <Image
            alt="Jee Main"
            src={'teacher.svg'}
            width={250}
            height={250}
            className="translate-x-96"
        />
    </motion.div >
 */