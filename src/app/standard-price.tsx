"use client";

import { useLayoutEffect, useRef } from "react";
import styles from "./standard-price.module.css";

export function StandardPrice({ price }: { price: string }) {
  const labelRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const label = labelRef.current;
    const text = textRef.current;
    if (!label || !text) return;
    let active = true;
    const fit = () => {
      if (!active) return;
      text.style.fontSize = "";
      const size = parseFloat(getComputedStyle(text).fontSize);
      const width = text.getBoundingClientRect().width;
      if (width > label.clientWidth && label.clientWidth > 0) {
        text.style.fontSize = `${size * label.clientWidth / width * 0.995}px`;
      }
    };
    const observer = new ResizeObserver(fit);
    observer.observe(label);
    document.fonts.addEventListener("loadingdone", fit);
    void document.fonts.ready.then(fit);
    fit();
    return () => {
      active = false;
      observer.disconnect();
      document.fonts.removeEventListener("loadingdone", fit);
    };
  }, [price]);

  return <p ref={labelRef} className={`kicker ${styles.label}`}><span ref={textRef} className={styles.text}>STANDARD PRICE · {price}</span></p>;
}
