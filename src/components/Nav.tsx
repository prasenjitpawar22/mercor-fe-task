import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

import { eye, hero } from "../svg";

const link = [
  { name: "sign in" },
  { name: "legal" },
  { name: "licenses" },
  { name: "security" },
  { name: "careers" },
  { name: "press" },
  { name: "support" },
  { name: "status" },
  { name: "codeblog" },
];

export default function Nav() {
  const { scrollY } = useScroll();
  const [navbarfixed, setNavBarFixed] = useState(false); // check set nav-fixed

  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {});

  useEffect(() => {
    console.log(navbarfixed);
  }, [navbarfixed]);

  const variants = {
    /** this is the "visible" key and it's respective style object **/
    visible: { opacity: 1, y: 0 },
    /** this is the "hidden" key and it's respective style object **/
    hidden: { opacity: 0, y: -25 },
  };

  return (
    <>
      <motion.div
        variants={variants}
        animate={{}}
        transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
        className={`backdrop-blur absolute xs:justify-end ${
          open ? "hidden" : "flex"
        }  z-50 font-Agrandir text-white transition-all duration-700 items-center xl:justify-between h-2 p-10 w-full left-0`}
      >
        <span className="xs:hidden xl:block text-2xl font-semibold">
          <img src={hero} alt="cash-app" />
        </span>
        <div className="xs:hidden xl:flex items-center tracking-[0.5px] leading-[18px] text-[12px] gap-[20px]  justify-between">
          {link.map((_, i) => (
            <span key={i} className="uppercase">
              {_.name}
            </span>
          ))}
        </div>
        <span className="xs:hidden xl:block">
          <img src={eye} alt="eye" />
        </span>
        <svg
          onClick={() => setOpen(true)}
          className="fill-white w-12 cursor-pointer transition duration-200 hover:fill-[#00D54B] xl:hidden xs:relative"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 24 24"
        >
          <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z"></path>
        </svg>
      </motion.div>
      <div
        className={` ${
          open ? "h-screen" : "h-0"
        }  w-full fixed font-Agrandir overflow-hidden transition-all duration-700 text-white bg-[#00D54B] backdrop-blur-sm z-[999]`}
      >
        <div className="flex relative w-full tracking-[0.5px] leading-[18px] text-[22px] h-[100%] items-center flex-col justify-between py-12 ">
          <svg
            onClick={() => setOpen(false)}
            className="absolute right-12 top-0 fill-white w-12 cursor-pointer transition-all duration-700 hover:fill-black"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"></path>
          </svg>
          {link.map((_, i) => (
            <span key={i} className="uppercase ">
              {_.name}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
