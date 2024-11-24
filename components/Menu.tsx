"use client"
import { motion } from 'motion/react';
export default function Menu() {
    return (
        <motion.div
            className="w-full px-20 flex justify-between fixed p-2 border items-center backdrop-blur-md z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="top-0">
                <span
                    className="text-xl font-bold"
                >SolvePYQ</span>
            </div>
            <div>
                <button
                    className="bg-gradient-to-r from-slate-600 to-slate-300 px-6 py-2 rounded-xl"
                // onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                >Login</button>
            </div>
        </motion.div>
    )
}