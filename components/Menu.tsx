"use client"
import { motion } from 'motion/react';
import { signIn, signOut } from "next-auth/react";
export default function Menu() {
    return (
        <motion.div
            className="text-white w-full px-20 flex justify-between fixed p-2 items-center backdrop-blur-md z-50"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="top-0">
                <span
                    className="text-xl font-bold"
                >SolvePYQ</span>
            </div>
            <div className="gap-4 flex text-black">
                <button
			className="bg-gradient-to-r from-slate-600 to-slate-300 px-6 py-2 rounded-xl"
		    onClick={()=>signIn()}
                >SignIn</button>
		<button
			className="bg-gradient-to-r from-slate-600 to-slate-300 px-6 py-2 rounded-xl"
			onClick={()=>signOut()}
		>SignOut</button>
            </div>
        </motion.div>
    )
}
