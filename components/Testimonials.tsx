"use client"
import Image from "next/image";
import { motion, useInView } from 'motion/react';
import { useRef } from "react";

export function Testimonials() {
    const reviews = [
        {
            name: "Rohit S., JEE Aspirant",
            review: "SolvePYQ is a game-changer! The extensive question bank for JEE Mains helped me practice and improve my weak areas. I highly recommend it to every aspirant!",
            image: "/profile1.png",
        },
        {
            name: "Ayesha K., CET Candidate",
            review: "I couldn’t believe I could prepare for competitive exams for free! SolvePYQ offers everything I need without any hidden charges. It's truly amazing.",
            image: "/profile8.png",
        },
        {
            name: "Nikhil T., GATE Topper",
            review: "The mock tests on SolvePYQ felt just like the real exam. The timer and layout helped me get comfortable with CBTs, and I nailed my GATE exam!",
            image: "/profile3.png",
        },
        {
            name: "Priya M., Engineering Student",
            review: "The progress tracking feature is brilliant! I could see how I improved over time and focus on subjects that needed extra effort. It's so motivating!",
            image: "/profile6.png",
        },
        {
            name: "Ankit R., Medical Entrance Aspirant",
            review: "SolvePYQ works seamlessly on my phone. I could practice on the go, even during short breaks, which made a huge difference in my prep.",
            image: "/profile5.png",
        },
        {
            name: "Sneha D., Competitive Exam Candidate",
            review: "I’ve tried several platforms, but SolvePYQ stands out. It’s user-friendly, resourceful, and truly designed for students aiming to succeed in exams.",
            image: "/profile6.png",
        },
    ]
    const ref = useRef(null);
    const isInView = useInView(ref);
    return (
        <div className="p-20  h-screen">
            <div>
                <span className="text-3xl ml-20">Testimonials</span>
                <div className="flex flex-wrap gap-10 mt-10 justify-center"
                    ref={ref}
                >
                    {isInView && reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            className="grid border w-96 px-10 py-4 border-black relative m-2 bg-gradient-to-br from-[#ededed] to-white "
                            style={{
                                borderRadius: '10px 2em 2em 2em'
                            }}
                            initial={{
                                y: 100,
                                opacity: 0,
                            }}
                            animate={{
                                y: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: index * 0.2,
                            }}
                        >
                            <p className="">{review.review}</p>
                            <span
                                className="text-xl font-bold text-right mr-10"
                            >{review.name}</span>
                            <Image
                                alt="Avatar"
                                src={review.image}
                                width={100}
                                height={120}
                                className="border rounded-full absolute -right-10 -bottom-6 backdrop-blur-md border-black drop-shadow-xl"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}