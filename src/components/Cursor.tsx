import { useEffect, useRef } from "react";
import "./styles/Cursor.css";
import gsap from "gsap";

const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Disable custom cursor on touch/mobile devices
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    let hover = false;
    const mousePos = { x: 0, y: 0 };
    const cursorPos = { x: 0, y: 0 };
    let animId: number;

    const onMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };

    const xSetter = gsap.quickSetter(cursor, "x", "px");
    const ySetter = gsap.quickSetter(cursor, "y", "px");

    const loop = () => {
      if (!hover) {
        const delay = 6;
        cursorPos.x += (mousePos.x - cursorPos.x) / delay;
        cursorPos.y += (mousePos.y - cursorPos.y) / delay;
        xSetter(cursorPos.x);
        ySetter(cursorPos.y);
      }
      animId = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    animId = requestAnimationFrame(loop);

    // Event delegation for [data-cursor] elements
    const onMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (!target) return;

      const cursorType = target.dataset.cursor;
      const rect = target.getBoundingClientRect();

      if (cursorType === "icons") {
        cursor.classList.add("cursor-icons");
        gsap.to(cursor, { x: rect.left, y: rect.top, duration: 0.1 });
        cursor.style.setProperty("--cursorH", `${rect.height}px`);
        hover = true;
      } else if (cursorType === "disable") {
        cursor.classList.add("cursor-disable");
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      if (!target) return;

      cursor.classList.remove("cursor-disable", "cursor-icons");
      hover = false;
    };

    document.addEventListener("mouseover", onMouseOver, { passive: true });
    document.addEventListener("mouseout", onMouseOut, { passive: true });

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
    };
  }, []);

  return <div className="cursor-main" ref={cursorRef}></div>;
};

export default Cursor;
