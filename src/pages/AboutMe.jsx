import { Popover, Transition } from "@headlessui/react";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { GoTriangleDown } from "@react-icons/all-files/go/GoTriangleDown";
import { HiChevronRight } from "@react-icons/all-files/hi/HiChevronRight";
import { RiFolder3Fill } from "@react-icons/all-files/ri/RiFolder3Fill";
import { SiMarkdown } from "@react-icons/all-files/si/SiMarkdown";
import { VscCollapseAll } from "@react-icons/all-files/vsc/VscCollapseAll";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { IoLogoPython } from "@react-icons/all-files/io5/IoLogoPython";

export default function AboutMe() {
  const [render, setRender] = useState("my-bio");

  function Render(value) {
    if (value === "/") {
      return <Root />;
    } else if (value === "my-bio") {
      return <MyBio closeBio={setRender} />;
    } else if (value === "work") {
      return <Work closeWork={setRender} />;
    } else if (value === "gear") {
      return <Gear closeGear={setRender} />;
    }
  }

  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
    >
      <div className="lg:grid grid-cols-12 h-full flex flex-col ">
        <div className="col-span-2 grid lg:grid-cols-6">
          <div className="col-span-6 lg:border-r lg:border-b-0 border-b border-[#101419] text-white gap-2.5 relative overflow-hidden">
            <PersonalInfo setRender={setRender} render={render} />
          </div>
        </div>
        <AnimatePresence initial={false}>{Render(render)}</AnimatePresence>
      </div>
    </motion.div>
  );
}

function Root() {
  return (
    <motion.div
      className="w-full h-full flex items-center justify-center text-white col-span-10"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      Nothing here, click something
    </motion.div>
  );
}

function MyBio({ closeBio }) {
  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#101419]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12  text-white py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeBio("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">personal.py</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Personal Information</p>
          <p className="text-gray-400">Content will be added here</p>
        </div>
      </div>
    </motion.div>
  );
}

function Work({ closeWork }) {
  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#101419]">
          <div className="lg:col-span-2 md:col-span-6 col-span-12 text-white border-r border-[#101419] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => {
                closeWork("/");
              }}
            >
              <AiOutlineClose />
            </button>
            <p className="pr-5 truncate">work.py</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Work Experience</p>
          <p className="text-gray-400">Content will be added here</p>
        </div>
      </div>
    </motion.div>
  );
}

function Gear({ closeGear }) {

  return (
    <motion.div
      className="col-span-10 h-full flex  justify-center overflow-hidden flex-col"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 50, opacity: 0 }}
    >
      <div className="w-full">
        <div className="grid grid-cols-12 border-b border-[#101419]">
          <div className="lg:col-span-3 md:col-span-6 col-span-12 text-white border-r border-[#101419] py-2.5 relative px-4">
            <button
              className="absolute top-1/2 -translate-y-1/2 right-4"
              onClick={() => closeGear("/")}
            >
              <AiOutlineClose />
            </button>
            <p>gear.md (preview)</p>
          </div>
        </div>
      </div>
      <div className="overflow-y-auto scrollbar-thin h-full flex items-center justify-center">
        <div className="text-white text-center">
          <p className="text-xl mb-4">Equipment & Gear</p>
          <p className="text-gray-400">Content will be added here</p>
        </div>
      </div>
    </motion.div>
  );
}

function PersonalInfo({ setRender, render }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenBio, setIsOpenBio] = useState(true);

  function openPopover() {
    setIsOpen(!isOpen);
  }

  function CollapseAll() {
    setIsOpenBio(false);
  }

  function openPopoverBio() {
    setIsOpenBio(!isOpenBio);
  }

  return (
    <Popover>
      <>
        <div className="relative">
          <Popover.Button
            className={`
                ${isOpen ? "text-white" : "text-white/50"}
               flex items-center gap-2.5 border-b border-[#101419] py-2.5 px-4 w-full`}
            onClick={openPopover}
          >
            <GoTriangleDown
              className={`${isOpen ? "" : "-rotate-90"} transition-all`}
            />
            <span className="text-left pr-5 truncate">personal info</span>
          </Popover.Button>
          <button
            onClick={CollapseAll}
            className="absolute top-1/2 -translate-y-1/2 right-2"
          >
            <VscCollapseAll />
          </button>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-in duration-200"
          enterFrom="opacity-0 -translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-out duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-1"
        >
          <Popover.Panel className=" px-4 text-white py-4">
            <Popover.Group className={`flex flex-col gap-1.5`}>
              <Popover>
                <>
                  <Popover.Button
                    className={`
                ${isOpenBio ? "text-white" : "text-white/50"}
               flex items-center gap-2.5  w-full transition-colors`}
                    onClick={openPopoverBio}
                  >
                    <HiChevronRight
                      className={`${isOpenBio ? "rotate-90" : ""
                        } transition-all`}
                    />
                    <RiFolder3Fill
                      className={`${isOpenBio ? "text-[#E99287]" : "text-[#b36d64]"
                        } transition-colors`}
                    />
                    <span className="pr-5 truncate">bio</span>
                  </Popover.Button>

                  <Transition
                    show={isOpenBio}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 -translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-linear duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-1"
                    className="flex flex-col"
                  >
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "my-bio" ? "text-white" : "text-[#607B96]"
                        }`}
                      as="button"
                      onClick={() => setRender("my-bio")}
                    >
                      <IoLogoPython />
                      <span className="truncate">personal.py</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "work" ? "text-white" : "text-[#607B96]"
                        }`}
                      as="button"
                      onClick={() => setRender("work")}
                    >
                      <IoLogoPython />
                      <span className="truncate">work.py</span>
                    </Popover.Panel>
                    <Popover.Panel
                      className={`px-4 my-1 ml-2.5 inline-flex items-center gap-2.5 transition-colors ${render === "gear" ? "text-white" : "text-[#607B96]"
                        }`}
                      as="button"
                      onClick={() => setRender("gear")}
                    >
                      <SiMarkdown />
                      <span className="truncate">gear.md</span>
                    </Popover.Panel>
                  </Transition>
                </>
              </Popover>
            </Popover.Group>
          </Popover.Panel>
        </Transition>
      </>
    </Popover>
  );
}
