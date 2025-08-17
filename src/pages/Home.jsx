/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <motion.div
      className="w-full h-full bg-radial bg-no-repeat bg-right"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="flex items-center justify-center h-full max-w-7xl mx-auto">
        <div className="lg:w-2/3 w-full mx-10 lg:ml-10 flex flex-col justify-between h-[80%] lg:h-auto">
          <div className="mb-20">
            <p className="text-blue-100 text-lg">Hello, i am</p>
            <h1 className="text-white lg:text-5xl md:text-5xl text-5xl whitespace-nowrap">
              Jody Edriano Pangaribuan
            </h1>

            <h2 className=" text-blue-300 lg:text-3xl md:text-2xl text-xl flex items-center gap-3">
              <span className="animate-pulse">&#62;</span>
              <Typewriter
                options={{
                  loop: true,
                  wrapperClassName:
                    " text-blue-300 lg:text-2xl md:text-2xl text-xl gap-3",
                  cursorClassName:
                    " text-blue-300 lg:text-2xl md:text-2xl text-xl gap-3",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`print("Software Engineer")`)
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString(`I'm obsessed with ML tbh`)
                    .pauseFor(500)
                    .deleteAll()
                    .typeString(`AI Researcher`)
                    .start();
                }}
              />
            </h2>
          </div>

          <div className="flex flex-col gap-2.5">
            <p className="text-blue-200">
              # you can also see it on my Github page
            </p>
            <p>
              <span className="text-blue-400">github_link</span>{" "}
              <span className="text-white">:</span>{" "}
              <span className="text-blue-300">str</span>{" "}
              <span className="text-white">=</span>{" "}
              <a
                href="https://github.com/jodypangaribuan"
                className="text-blue-300 hover:text-blue-200 transition-colors"
                target="_blank"
                rel="noreferrer"
              >
                "https://github.com/jodypangaribuan"
              </a>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
