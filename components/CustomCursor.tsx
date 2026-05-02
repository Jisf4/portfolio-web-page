"use client";

import { motion } from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function CustomCursor() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  const [hovering, setHovering] =
    useState(false);

  const [hidden, setHidden] =
    useState(true);

  useEffect(() => {
    const moveCursor = (
      e: MouseEvent
    ) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });

      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    const addHoverEvents = () => {
      const elements =
        document.querySelectorAll(
          "a, button, .cursor-hover"
        );

      elements.forEach((el) => {
        el.addEventListener(
          "mouseenter",
          () => setHovering(true)
        );

        el.addEventListener(
          "mouseleave",
          () => setHovering(false)
        );
      });
    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    document.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    document.addEventListener(
      "mouseenter",
      handleMouseEnter
    );

    addHoverEvents();

    return () => {
      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      document.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );

      document.removeEventListener(
        "mouseenter",
        handleMouseEnter
      );
    };
  }, []);

  return (
    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,

        opacity: hidden
          ? 0
          : 1,
      }}

      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
        mass: 0.5,
      }}

      className="
        fixed
        top-0
        left-0

        z--40

        hidden md:block

        w-32
        h-32

        rounded-full

        pointer-events-none

        bg-cyan-400/12

        blur-3xl
        mix-bend-screen
  

        shadow-[0_0_25px_rgba(34,211,238,0.35)]
      "
    />
  );
}