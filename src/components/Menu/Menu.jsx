"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const menuItems = [
  {
    link: "#home",
    text: "Home",
    image: "/hero-img.webp",
  },
  {
    link: "#projects",
    text: "Projects",
    image: "/hero-img.webp",
  },
  {
    link: "#about",
    text: "About",
    image: "/hero-img.webp",
  },
  {
    link: "#contact",
    text: "Contact",
    image: "/hero-img.webp",
  },
];

const Menu = ({ isOpen, setIsOpen }) => {
  const speed = 15;
  const textColor = "#ffffff";
  const marqueeBgColor = "#ffffff";
  const marqueeTextColor = "#060010";
  const borderColor = "#ffffff";

  const handleMenuItemClick = (item, event) => {
    if (!item?.link) {
      setIsOpen(false);
      return;
    }

    if (!item.link.startsWith("#")) {
      setIsOpen(false);
      return;
    }

    event.preventDefault();

    const id = item.link.replace("#", "");
    setIsOpen(false);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 400);
  };

  return (
    <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
      <div className="flowing-menu-wrap">
        <nav className="flowing-menu">
          {menuItems.map((item, idx) => (
            <MenuItem
              key={idx}
              {...item}
              speed={speed}
              textColor={textColor}
              marqueeBgColor={marqueeBgColor}
              marqueeTextColor={marqueeTextColor}
              borderColor={borderColor}
              onItemClick={handleMenuItemClick}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

function MenuItem({
  link,
  text,
  image,
  speed,
  textColor,
  marqueeBgColor,
  marqueeTextColor,
  borderColor,
  onItemClick,
}) {
  const itemRef = useRef(null);
  const marqueeRef = useRef(null);
  const marqueeInnerRef = useRef(null);
  const animationRef = useRef(null);
  const [repetitions, setRepetitions] = useState(4);

  const animationDefaults = { duration: 0.6, ease: "expo.out" };

  const distMetric = (x, y, x2, y2) => {
    const xDiff = x - x2;
    const yDiff = y - y2;
    return xDiff * xDiff + yDiff * yDiff;
  };

  const findClosestEdge = (mouseX, mouseY, width, height) => {
    const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
    const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
    return topEdgeDist < bottomEdgeDist ? "top" : "bottom";
  };

  useEffect(() => {
    const calculateRepetitions = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".flowing-menu__marquee-part"
      );
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (!contentWidth) return;

      const viewportWidth = window.innerWidth;
      const needed = Math.ceil(viewportWidth / contentWidth) + 2;
      setRepetitions(Math.max(4, needed));
    };

    calculateRepetitions();
    window.addEventListener("resize", calculateRepetitions);

    return () => {
      window.removeEventListener("resize", calculateRepetitions);
    };
  }, [text, image]);

  useEffect(() => {
    const setupMarquee = () => {
      if (!marqueeInnerRef.current) return;

      const marqueeContent = marqueeInnerRef.current.querySelector(
        ".flowing-menu__marquee-part"
      );
      if (!marqueeContent) return;

      const contentWidth = marqueeContent.offsetWidth;
      if (!contentWidth) return;

      if (animationRef.current) {
        animationRef.current.kill();
      }

      animationRef.current = gsap.to(marqueeInnerRef.current, {
        x: -contentWidth,
        duration: speed,
        ease: "none",
        repeat: -1,
      });
    };

    const timer = setTimeout(setupMarquee, 50);

    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [text, image, repetitions, speed]);

  const handleMouseEnter = (event) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .set(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .set(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0)
      .to([marqueeRef.current, marqueeInnerRef.current], { y: "0%" }, 0);
  };

  const handleMouseLeave = (event) => {
    if (!itemRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;

    const rect = itemRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const edge = findClosestEdge(x, y, rect.width, rect.height);

    gsap
      .timeline({ defaults: animationDefaults })
      .to(marqueeRef.current, { y: edge === "top" ? "-101%" : "101%" }, 0)
      .to(marqueeInnerRef.current, { y: edge === "top" ? "101%" : "-101%" }, 0);
  };

  const handleClick = (event) => {
    if (typeof onItemClick === "function") {
      onItemClick({ link, text, image }, event);
    }
  };

  return (
    <div className="flowing-menu__item" ref={itemRef} style={{ borderColor }}>
      <a
        className="flowing-menu__item-link"
        href={link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        style={{ color: textColor }}
      >
        {text}
      </a>

      <div
        className="flowing-menu__marquee"
        ref={marqueeRef}
        style={{ backgroundColor: marqueeBgColor }}
      >
        <div className="flowing-menu__marquee-inner-wrap">
          <div
            className="flowing-menu__marquee-inner"
            ref={marqueeInnerRef}
            aria-hidden="true"
          >
            {[...Array(repetitions)].map((_, idx) => (
              <div
                className="flowing-menu__marquee-part"
                key={`${text}-${idx}`}
                style={{ color: marqueeTextColor }}
              >
                <span>{text}</span>
                <div
                  className="flowing-menu__marquee-img"
                  style={{ backgroundImage: `url(${image})` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;