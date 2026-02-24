"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [hoverLink, setHoverLink] = useState(null);
  

  useEffect(() => {
    const cursor = cursorRef.current;

    // GSAP smooth setters
    const xTo = gsap.quickTo(cursor, "left", {
      duration: 0.35,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(cursor, "top", {
      duration: 0.35,
      ease: "power3.out",
    });

    const moveCursor = (e) => {
      xTo(e.clientX);
      yTo(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  // Hover logic (unchanged)
  useEffect(() => {
    const handleEnter = (e) => {
      const link = e.currentTarget.getAttribute("data-live-link");
      setHoverLink(link);
    };

    const handleLeave = () => {
      setHoverLink(null);
    };

    const projectImages = document.querySelectorAll(".project-image");

    projectImages.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter);
      el.addEventListener("mouseleave", handleLeave);
    });

    return () => {
      projectImages.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter);
        el.removeEventListener("mouseleave", handleLeave);
      });
    };
  }, []);

  // Click handling (unchanged)
  useEffect(() => {
    const handleClick = () => {
      if (hoverLink) {
        window.open(hoverLink, "_blank");
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [hoverLink]);

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hoverLink ? "cursor-project" : ""}`}
    >
      {hoverLink && <span className="cursor-text">View Project</span>}
    </div>
  );
};

export default Cursor;