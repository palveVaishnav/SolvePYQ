'use client'
import Image from "next/image";
import { motion } from 'motion/react';

export default function Features() {

    const features = [
        {
            name: "Comprehensive Question Bank",
            desc: "Access hundreds of previous years’ questions for JEE, GATE, and CET exams.",
            svg: "docs.svg",
            color: "#dff970"
        },
        {
            name: "Free to Use",
            desc: "No subscriptions, no hidden charges. Practice for free!",
            svg: "money.svg",
            color: "#f97316"
        },
        {
            name: "Exam Simulation",
            desc: "Experience a real computer-based test (CBT) environment.",
            svg: "screens.svg",
            color: "#d591fe"
        },
        {
            name: "Progress Tracking",
            desc: "Track your scores and improve with every test.",
            svg: "progress.svg",
            color: "#b1c55d"
        },
        {
            name: "Mobile-Friendly",
            desc: "Practice on the go, anytime, anywhere.",
            svg: "exam.svg",
            color: "#2bb458"
        },
    ];


    return (
        <div className="mt-20">
            {/* <h2 className="text-3xl ml-20 sticky top-20">Features</h2> */}
            <div className="grid gap-20 place-content-center"
                style={{
                }}
            >
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="w-full px-20 h-screen"
                        style={{
                            position: "sticky",
                            top: index * 25 + 80,
                        }}
                    >
                        <div>
                            <motion.div
                                className={`flex border p-20 rounded-3xl`}
                                style={{
                                    position: "sticky",
                                    top: index * 25 + 80,
                                    backgroundColor: feature.color,
                                }}
                            >
                                <div className="w-1/2 p-10">
                                    <Image
                                        alt={feature.name}
                                        src={feature.svg}
                                        width={300}
                                        height={300}
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col justify-center gap-4 p-10">
                                    <span className="bg-slate-300 px-4 py-1 rounded-md border w-fit">
                                        Tag
                                    </span>
                                    <h3 className="text-2xl">{feature.name}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
