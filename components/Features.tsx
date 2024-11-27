'use client'
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from "react";

export default function Features() {
    const features = [
        {
            name: "Comprehensive Question Bank",
            desc: "Access hundreds of previous years' questions for JEE, GATE, and CET exams.",
            svg: "docs.svg",
            color: "#D3F1DF"
        },
        {
            name: "Free to Use",
            desc: "No subscriptions, no hidden charges. Practice for free!",
            svg: "money.svg",
            color: "#85A98F"
        },
        {
            name: "Exam Simulation",
            desc: "Experience a real computer-based test (CBT) environment.",
            svg: "screens.svg",
            color: "#5A6C57"
        },
        {
            name: "Progress Tracking",
            desc: "Track your scores and improve with every test.",
            svg: "progress.svg",
            color: "#525B44"
        },
        {
            name: "Mobile-Friendly",
            desc: "Practice on the go, anytime, anywhere.",
            svg: "exam.svg",
            color: "#28E13B"
        },
    ];

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    // Create color interpolation between adjacent feature colors
    const containerColorChanger = useTransform(
        scrollYProgress,
        features.map((_, index) => index / (features.length - 1)),
        features.map(feature => feature.color + '70')
    );

    return (
        <div className="mt-20">
            <motion.div className="grid gap-20 place-content-center" ref={container}
                style={{
                    backgroundColor: containerColorChanger,
                }}
            >
                {features.map((feature, index) => {
                    const howMuch = 1 - ((features.length - index) * 0.05);
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    const scaleDown = useTransform(scrollYProgress, [0, 1], [1, howMuch]);
                    return (
                        <div
                            key={index}
                            className="w-full px-20 h-screen sticky top-40"
                            style={{
                                top: `${index * 25 + 80}px`,
                            }}
                        >
                            <motion.div
                                className={`flex border p-20 rounded-3xl`}
                                style={{
                                    scale: scaleDown,
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
                                        Feature
                                    </span>
                                    <h3 className="text-2xl">{feature.name}</h3>
                                    <p className="text-slate-600">{feature.desc}</p>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}
            </motion.div>
        </div>
    );
}