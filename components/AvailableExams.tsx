"use client"
import Image from "next/image"
import { useInView, motion } from 'motion/react';
import { useRef } from "react"

export default function AvailableExams() {
    const exams = [
        {
            name: "JEE MAINS",
        },
        {
            name: "JEE Advance",
        },
        {
            name: "CET",
        },
        {
            name: "GATE",
        },
        {
            name: "NPTEL",
        },
    ]
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <div
            className="p-20"
        >
            <div
                className=""
            >
                <span
                    className="text-3xl ml-20"
                >Available Exams</span>
                <div
                    className="flex justify-center justify-self-center flex-wrap max-w-screen-md gap-2"
                    ref={ref}
                >
                    {isInView && exams.map((exam, idx) => (
                        <motion.div
                            key={idx}
                            className="text-center rounded-2xl hover:bg-gray-0 hover:shadow-md shadow-gray-600 cursor-pointer p-8 group"
                            initial={{
                                y: 40,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.4 * idx,
                            }}
                        >
                            <Image
                                alt="Paper Set"
                                src={'questionbank.svg'}
                                width={0}
                                height={0}
                                className="w-40 group-hover:-translate-y-10 ease-in-out transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-2xl"
                            />
                            <span
                                className="text-xl font-sans font-bold group-hover:text-2xl ease-in-out transition-all duration-300"
                            >{exam.name}</span>
                        </motion.div>
                    ))}
                </div>
                <div
                    className="w-full flex justify-center"
                >
                    <button
                        className="bg-orange-500 justify-self-center px-4 py-2 mt-10 rounded-md text-white"
                    >Exam Not Present ?</button>
                </div>
            </div>
        </div>
    )
}