'use client';

import { useEffect, useRef } from 'react';
import styles from './ProjectScreens.module.css';

/**
 * Makes the thumbnail strip inside each project card switch the big screen.
 *
 * Every card holds one large screenshot plus three thumbnails of the same
 * project. In the original the big screen shows whichever thumbnail is
 * selected; a static capture freezes it on the first, which is why the strip
 * looked inert.
 *
 * This wraps the generated section and works by delegation rather than by
 * editing the section markup, so regenerating the sections cannot undo it.
 * Selecting a thumbnail swaps the two images, so the strip always shows the
 * three screens that are not currently large.
 */
export default function ProjectScreens({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    /** The card is the nearest ancestor that also holds a much bigger image. */
    const findCard = (thumb: HTMLImageElement) => {
      let node: HTMLElement | null = thumb.parentElement;
      const thumbW = thumb.getBoundingClientRect().width;
      for (let i = 0; i < 8 && node; i += 1) {
        const imgs = [...node.querySelectorAll('img')];
        if (imgs.some((i2) => i2.getBoundingClientRect().width > thumbW * 1.8)) return node;
        node = node.parentElement;
      }
      return null;
    };

    const swap = (thumb: HTMLImageElement) => {
      const card = findCard(thumb);
      if (!card) return;
      const imgs = [...card.querySelectorAll('img')];
      const main = imgs.reduce((a, b) =>
        b.getBoundingClientRect().width > a.getBoundingClientRect().width ? b : a);
      if (!main || main === thumb) return;

      const mSrc = main.src;
      const mSet = main.srcset;
      if (thumb.src === mSrc) return;

      main.classList.add(styles.swapping);
      window.setTimeout(() => {
        main.src = thumb.src;
        main.srcset = thumb.srcset;
        thumb.src = mSrc;
        thumb.srcset = mSet;
        main.classList.remove(styles.swapping);
      }, 140);
    };

    /**
     * Framer nests each image inside a background-image wrapper, so the event
     * target is usually a div rather than the <img>. Resolve the image the
     * pointer is actually over, then accept it only if it is small relative to
     * the largest image in the same card — that is what makes it a thumbnail.
     */
    const resolveThumb = (t: EventTarget | null): HTMLImageElement | null => {
      if (!(t instanceof Element)) return null;
      let img: HTMLImageElement | null =
        t instanceof HTMLImageElement ? t : t.querySelector('img');
      if (!img) {
        const host = t.closest('div');
        img = host ? host.querySelector('img') : null;
      }
      if (!img) return null;

      const card = findCard(img);
      if (!card) return null;
      const widths = [...card.querySelectorAll('img')].map(
        (i) => i.getBoundingClientRect().width);
      const biggest = Math.max(...widths);
      const w = img.getBoundingClientRect().width;
      return w > 24 && w < biggest * 0.7 ? img : null;
    };

    const onClick = (e: Event) => {
      const t = resolveThumb(e.target);
      if (t) swap(t);
    };
    const onOver = (e: Event) => {
      const t = resolveThumb(e.target);
      if (t) swap(t);
    };

    el.addEventListener('click', onClick);
    el.addEventListener('mouseover', onOver);
    return () => {
      el.removeEventListener('click', onClick);
      el.removeEventListener('mouseover', onOver);
    };
  }, []);

  return (
    <div ref={root} className={styles.root}>
      {children}
    </div>
  );
}
