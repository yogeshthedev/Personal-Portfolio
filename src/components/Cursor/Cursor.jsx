"use client";

import { useEffect, useRef, useState } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);
  const [hoverLink, setHoverLink] = useState(null);
  const [isInteractive, setIsInteractive] = useState(false);
  

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let currentX = targetX;
    let currentY = targetY;
    let frameId;

    const smoothFactor = prefersReducedMotion ? 1 : 0.18;

    const animateCursor = () => {
      currentX += (targetX - currentX) * smoothFactor;
      currentY += (targetY - currentY) * smoothFactor;

      cursor.style.left = `${currentX}px`;
      cursor.style.top = `${currentY}px`;

      frameId = requestAnimationFrame(animateCursor);
    };

    const moveCursor = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      cursor.style.opacity = "1";
    };

    const hideCursor = () => {
      cursor.style.opacity = "0";
    };

    const showCursor = () => {
      cursor.style.opacity = "1";
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseleave", hideCursor);
    window.addEventListener("mouseenter", showCursor);
    frameId = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseleave", hideCursor);
      window.removeEventListener("mouseenter", showCursor);
      cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    const interactiveElements = document.querySelectorAll(
      "a, button, .project-image, [role='button'], input, textarea, select, label"
    );

    const handleInteractiveEnter = () => {
      setIsInteractive(true);
    };

    const handleInteractiveLeave = () => {
      setIsInteractive(false);
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
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
      className={`custom-cursor ${isInteractive ? "cursor-link" : ""} ${hoverLink ? "cursor-project" : ""}`}
    >
      {hoverLink && <span className="cursor-text">View Project</span>}
    </div>
  );
};

export default Cursor;