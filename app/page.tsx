import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function Home() {
  return (
    <BackgroundBeamsWithCollision>
      <h2 className="text-2xl relative z-20 md:text-4xl lg:text-7xl font-bold text-center text-white font-sans tracking-tight grid -mt-60">
        <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
          <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">SolvePYQ</span>
          </div>
          <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
            <span className="">SolvePYQ</span>
          </div>
        </div>
        Helping Students Ace JEE!
        <span
          className="text-xl border mt-10 font-semibold rounded-full p-2 font-mono bg-gradient-to-tr from-purple-500 via-violet-500 to-pink-500 text-black w-fit justify-self-center px-10"
        >Launching Soon !</span>
      </h2>
    </BackgroundBeamsWithCollision>
  )
}