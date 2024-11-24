"use client"
import { useRef } from "react";
import { useInView, motion } from 'motion/react';

export default function Banner() {
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <div
            className="p-20 h-screen bg-red-200"
        >
            {isInView &&
                <>
                    <div
                        className="grid border rounded-xl p-20 bg-gradient-to-tr from-slate-700 to-slate-300 text-center place-content-center"
                        ref={ref}
                    >
                        <div >
                            {"Become Part of the Open Community".split(" ").map((el, index) => (
                                <motion.span
                                    className="text-[3em] font-bold"
                                    key={index}
                                    initial={{
                                        y: 100,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                    }}
                                    transition={{
                                        delay: 0.2 * index,
                                    }}
                                >{el}{" "}</motion.span>
                            ))}
                        </div>
                        <span
                            className="text-2xl"
                        >Let{"'"}s grow together</span>
                        <button
                            className="border bg-orange-500 rounded-md w-fit px-6 py-2 justify-self-center mt-10 text-white"
                        >Join Now</button>
                    </div>
                </>
            }
        </div >
    )
}
