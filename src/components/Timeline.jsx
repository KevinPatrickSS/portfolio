"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.getBoundingClientRect().height);
    }
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">My Work Experience</h2>

      <div ref={ref} className="relative pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            {/* LEFT COLUMN */}
            <div className="sticky top-40 z-40 flex flex-col self-start max-w-xs md:flex-row md:w-full lg:max-w-sm">
              <div className="absolute -left-[15px] flex h-10 w-10 items-center justify-center rounded-full bg-midnight">
                <div className="h-4 w-4 rounded-full border border-neutral-700 bg-neutral-800" />
              </div>

              {/* DESKTOP TEXT */}
              <div className="hidden flex-col gap-2 pl-20 md:flex">
                <h3 className="text-xl text-neutral-400">{item.date}</h3>

                <h3 className="text-3xl font-semibold text-neutral-300">
                  {item.job}
                </h3>

                {/* COMPANY HIGHLIGHT */}
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-sm">
                  {item.company}
                </h3>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="relative w-full pl-20 pr-4 md:pl-4">
              {/* MOBILE TEXT */}
              <div className="mb-4 block md:hidden">
                <h3 className="text-lg text-neutral-400">{item.date}</h3>
                <h3 className="text-xl font-semibold text-neutral-300">
                  {item.job}
                </h3>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  {item.company}
                </h3>
              </div>

              {item.contents.map((content, idx) => (
                <p
                  key={idx}
                  className="mb-3 leading-relaxed text-neutral-400"
                >
                  {content}
                </p>
              ))}
            </div>
          </div>
        ))}

        {/* TIMELINE LINE */}
        <div
          style={{ height: height + "px" }}
          className="absolute left-1 top-0 w-[2px] overflow-hidden bg-gradient-to-b from-transparent via-neutral-700 to-transparent 
          [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-purple-500 via-purple-400/50 to-transparent"
          />
        </div>
      </div>
    </div>
  );
};
