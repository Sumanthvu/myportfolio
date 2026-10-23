import { useEffect, useRef } from "react";

/** A projected particle sculpture, rendered locally without a WebGL dependency. */
export function ParticleField() {
  const canvas = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const element = canvas.current;
    const context = element?.getContext("2d");
    if (!element || !context) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let width = 0,
      height = 0,
      frame = 0,
      visible = true,
      angle = 0,
      last = 0;
    let pointerX = 0,
      pointerY = 0,
      smoothX = 0,
      smoothY = 0;
    const points = Array.from({ length: 620 }, (_, i) => {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / 620);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      return {
        x: Math.sin(phi) * Math.cos(theta),
        y: Math.cos(phi),
        z: Math.sin(phi) * Math.sin(theta),
        phi,
        theta,
      };
    });
    const resize = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(devicePixelRatio, 2);
      element.width = width * dpr;
      element.height = height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (media.matches) draw(0);
    });
    const pointer = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      pointerX = (event.clientX - rect.left) / rect.width - 0.5;
      pointerY = (event.clientY - rect.top) / rect.height - 0.5;
    };
    const reset = () => {
      pointerX = 0;
      pointerY = 0;
    };
    function draw(time: number) {
      if (!element || !context || !width) return;
      const delta = Math.min((time - last) / 1000, 0.04);
      last = time;
      if (!media.matches) angle += delta * 0.11;
      smoothX += (pointerX - smoothX) * 0.035;
      smoothY += (pointerY - smoothY) * 0.035;
      const rect = element.getBoundingClientRect();
      const scroll = media.matches
        ? 0
        : Math.min(1, Math.max(0, -rect.top / height));
      const rotation =
        angle + (media.matches ? 0 : smoothX * 0.45) + scroll * 1.7;
      const tilt = -0.22 + (media.matches ? 0 : smoothY * 0.35);
      const radius = Math.min(width * 0.37, height * 0.39);
      const light = document.documentElement.dataset.theme === "light";
      context.clearRect(0, 0, width, height);
      const projected = points.map((p, i) => {
        const wave = 1 + 0.075 * Math.sin(p.phi * 6 + p.theta * 2 + angle * 3);
        const rx = (p.x * Math.cos(rotation) - p.z * Math.sin(rotation)) * wave;
        const rz = p.x * Math.sin(rotation) + p.z * Math.cos(rotation);
        const ry = p.y * Math.cos(tilt) - rz * Math.sin(tilt);
        const depth = p.y * Math.sin(tilt) + rz * Math.cos(tilt);
        const scale = 2.8 / (2.8 - depth);
        return {
          x:
            width * 0.5 +
            rx * radius * scale +
            Math.cos(i * 2.4) * scroll * radius * 0.4,
          y:
            height * 0.5 +
            ry * radius * scale +
            Math.sin(i * 2.4) * scroll * radius * 0.4,
          depth,
          scale,
        };
      });
      context.strokeStyle = light
        ? "rgba(70,90,155,.12)"
        : "rgba(160,184,255,.12)";
      context.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 2) {
        const a = projected[i],
          b = projected[(i + 13) % projected.length];
        if (
          a.depth > -0.25 &&
          b.depth > -0.25 &&
          Math.hypot(a.x - b.x, a.y - b.y) < radius * 0.24
        ) {
          context.beginPath();
          context.moveTo(a.x, a.y);
          context.lineTo(b.x, b.y);
          context.stroke();
        }
      }
      projected
        .sort((a, b) => a.depth - b.depth)
        .forEach((p) => {
          const opacity = 0.18 + (p.depth + 1) * 0.34;
          context.fillStyle = light
            ? `rgba(66,87,158,${opacity})`
            : `rgba(175,195,255,${opacity})`;
          context.beginPath();
          context.arc(p.x, p.y, Math.max(0.5, p.scale * 1.05), 0, Math.PI * 2);
          context.fill();
        });
    }
    function tick(time: number) {
      if (visible) draw(time);
      if (!media.matches) frame = requestAnimationFrame(tick);
    }
    function start() {
      cancelAnimationFrame(frame);
      last = performance.now();
      if (media.matches) draw(last);
      else frame = requestAnimationFrame(tick);
    }
    const observer = new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      if (visible) last = performance.now();
    });
    const themeObserver = new MutationObserver(() => {
      if (media.matches) draw(performance.now());
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    resize.observe(element);
    observer.observe(element);
    element.addEventListener("pointermove", pointer);
    element.addEventListener("pointerleave", reset);
    media.addEventListener("change", start);
    start();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      observer.disconnect();
      themeObserver.disconnect();
      element.removeEventListener("pointermove", pointer);
      element.removeEventListener("pointerleave", reset);
      media.removeEventListener("change", start);
    };
  }, []);
  return <canvas ref={canvas} className="particle-field" aria-hidden="true" />;
}
