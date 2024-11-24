import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
export default function AnimateText({
    text,
    duration,
    className,
}: {
    text: string;
    className?: string;
    duration?: number;
}) {
    return (
        <div
            className={cn("font-bold", className)}
        >
            {text.split(" ").map((el, idx) => (
                <motion.span
                    key={idx}
                    initial={{
                        opacity: 0.001,
                        filter: "blur(10xp)"
                    }}
                    animate={{
                        opacity: 1,
                        filter: "blur(0px)",
                    }}
                    transition={{
                        delay: 0.2 * idx,
                        duration: duration ? duration : 2,
                    }}
                >
                    {el}{" "}
                </motion.span>
            ))}
        </div>
    )
}

