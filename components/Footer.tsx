export default function Footer() {
    return (
        <div
            className="w-full grid place-content-center text-center bg-slate-600 text-white py-40"
        >
            <span
                className="text-[4em] font-bold"
            >SolvePYQ</span>
            <p
                className="text-2xl"
            >An open and free platform for students to practice and prepare for their exams</p>
            <p
                className="text-lg"
            >An Initiative by <a className="text-blue-400 cursor-pointer underline underline-offset-2" target="_blank" href="https://www.vaishnav.info/">@vaishnav</a>.</p>
        </div>
    )
}