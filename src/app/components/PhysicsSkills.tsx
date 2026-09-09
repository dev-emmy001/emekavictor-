"use client";

import { useEffect, useRef } from "react";
import Matter from "matter-js";
import {
  Zap,
  Smartphone,
  Rocket,
  Wind,
  Code,
  Database,
  Layers,
  Mail,
  Github,
  Figma,
  GitBranch,
  Server,
  Cloud,
  Palette,
  type LucideIcon,
} from "lucide-react";

type Shape = "pill" | "circle";

type Item = {
  label: string;
  className: string;
  icon?: LucideIcon;
  shape: Shape;
  showOnMobile: boolean;
};

const PILLS: Item[] = [
  {
    label: "Next.js",
    className:
      "bg-gradient-to-b from-white via-gray-50 to-gray-300 text-black shadow-[0_6px_0_#a8a8a8,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.95)]",
    icon: Zap,
    shape: "pill",
    showOnMobile: true,
  },
  {
    label: "React Native",
    className:
      "bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 text-white shadow-[0_6px_0_#0369a1,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.35)]",
    icon: Smartphone,
    shape: "pill",
    showOnMobile: true,
  },
  {
    label: "Expo",
    className:
      "bg-gradient-to-b from-violet-400 via-violet-500 to-violet-700 text-white shadow-[0_6px_0_#5b21b6,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3)]",
    icon: Rocket,
    shape: "pill",
    showOnMobile: true,
  },
  {
    label: "Tailwind CSS",
    className:
      "bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 text-cyan-950 shadow-[0_6px_0_#0891b2,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.55)]",
    icon: Wind,
    shape: "pill",
    showOnMobile: true,
  },
  {
    label: "TypeScript",
    className:
      "bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 text-white shadow-[0_6px_0_#1e3a8a,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3)]",
    icon: Code,
    shape: "pill",
    showOnMobile: true,
  },
  {
    label: "Supabase",
    className:
      "bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600 text-emerald-950 shadow-[0_6px_0_#047857,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Database,
    shape: "pill",
    showOnMobile: false,
  },
  {
    label: "Payload CMS",
    className:
      "bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 text-orange-950 shadow-[0_6px_0_#c2410c,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Layers,
    shape: "pill",
    showOnMobile: false,
  },
  {
    label: "Resend",
    className:
      "bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 text-pink-950 shadow-[0_6px_0_#be185d,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Mail,
    shape: "pill",
    showOnMobile: false,
  },
];

const CIRCLES: Item[] = [
  {
    label: "GitHub",
    className:
      "bg-gradient-to-b from-gray-700 via-gray-800 to-gray-950 text-white shadow-[0_6px_0_#111827,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.2)]",
    icon: Github,
    shape: "circle",
    showOnMobile: true,
  },
  {
    label: "Figma",
    className:
      "bg-gradient-to-b from-purple-300 via-purple-400 to-purple-600 text-purple-950 shadow-[0_6px_0_#7e22ce,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4)]",
    icon: Figma,
    shape: "circle",
    showOnMobile: true,
  },
  {
    label: "Git",
    className:
      "bg-gradient-to-b from-red-300 via-red-400 to-red-600 text-red-950 shadow-[0_6px_0_#b91c1c,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4)]",
    icon: GitBranch,
    shape: "circle",
    showOnMobile: true,
  },
  {
    label: "Server",
    className:
      "bg-gradient-to-b from-slate-300 via-slate-400 to-slate-600 text-slate-950 shadow-[0_6px_0_#475569,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4)]",
    icon: Server,
    shape: "circle",
    showOnMobile: false,
  },
  {
    label: "Cloud",
    className:
      "bg-gradient-to-b from-indigo-300 via-indigo-400 to-indigo-600 text-indigo-950 shadow-[0_6px_0_#4338ca,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4)]",
    icon: Cloud,
    shape: "circle",
    showOnMobile: false,
  },
  {
    label: "Design",
    className:
      "bg-gradient-to-b from-amber-300 via-amber-400 to-amber-600 text-amber-950 shadow-[0_6px_0_#b45309,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.4)]",
    icon: Palette,
    shape: "circle",
    showOnMobile: false,
  },
];

const ITEMS: Item[] = [...PILLS, ...CIRCLES];

const WALL_THICKNESS = 80;
const SPAWN_STAGGER_MS = 180;

function createWalls(width: number, height: number) {
  const { Bodies } = Matter;

  return [
    Bodies.rectangle(
      width / 2,
      height + WALL_THICKNESS / 2,
      width + WALL_THICKNESS * 2,
      WALL_THICKNESS,
      { isStatic: true, label: "floor" }
    ),
    Bodies.rectangle(-WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height * 3, {
      isStatic: true,
      label: "left",
    }),
    Bodies.rectangle(width + WALL_THICKNESS / 2, height / 2, WALL_THICKNESS, height * 3, {
      isStatic: true,
      label: "right",
    }),
  ];
}

export default function PhysicsSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, World, Bodies, Body, Composite, Mouse, MouseConstraint } = Matter;

    const engine = Engine.create({
      gravity: { x: 0, y: 1.4 },
      enableSleeping: true,
    });
    const world = engine.world;

    const getBounds = () => ({
      width: container.clientWidth,
      height: container.clientHeight,
    });

    let { width, height } = getBounds();
    let walls = createWalls(width, height);
    World.add(world, walls);

    // On mobile, only spawn the items flagged for it, to keep the hero readable.
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    const activeIndexes = ITEMS.map((item, index) => index).filter(
      (index) => isDesktop || ITEMS[index].showOnMobile
    );

    const bodies: (Matter.Body | null)[] = new Array(ITEMS.length).fill(null);
    const itemSizes: ({ width: number; height: number } | null)[] = new Array(
      ITEMS.length
    ).fill(null);
    const spawnTimeouts: ReturnType<typeof setTimeout>[] = [];

    itemRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      itemSizes[index] = { width: rect.width, height: rect.height };
    });

    const spawnItem = (index: number) => {
      const size = itemSizes[index];
      if (!size || bodies[index]) return;

      const item = ITEMS[index];
      const { width: itemWidth, height: itemHeight } = size;
      const margin = itemWidth / 2 + 12;
      const x = margin + Math.random() * Math.max(width - margin * 2, itemWidth);
      const y = -(itemHeight / 2 + 200 + Math.random() * 280);

      const body =
        item.shape === "circle"
          ? Bodies.circle(x, y, itemWidth / 2, {
              restitution: 0.35,
              friction: 0.12,
              frictionAir: 0.018,
              density: 0.002,
            })
          : Bodies.rectangle(x, y, itemWidth, itemHeight, {
              chamfer: { radius: itemHeight / 2 },
              restitution: 0.35,
              friction: 0.12,
              frictionAir: 0.018,
              density: 0.002,
            });

      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.25);
      Body.setVelocity(body, {
        x: (Math.random() - 0.5) * 4,
        y: Math.random() * 1.5,
      });

      bodies[index] = body;
      World.add(world, body);
    };

    activeIndexes.forEach((index, order) => {
      const delay = order * SPAWN_STAGGER_MS + Math.random() * 220;
      spawnTimeouts.push(setTimeout(() => spawnItem(index), delay));
    });

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.28, render: { visible: false } },
    });

    World.add(world, mouseConstraint);

    const matterMouse = mouse as Matter.Mouse & {
      mousewheel?: EventListener;
      mousemove?: EventListener;
      mouseup?: EventListener;
    };

    if (matterMouse.mousewheel) {
      mouse.element.removeEventListener("mousewheel", matterMouse.mousewheel);
      mouse.element.removeEventListener("DOMMouseScroll", matterMouse.mousewheel);
    }

    // Keeps a drag smooth even after the cursor leaves the shape's own bounds.
    const handleMouseMove = (e: Event) => matterMouse.mousemove?.(e);
    const handleMouseUp = (e: Event) => matterMouse.mouseup?.(e);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });

    const updateWalls = () => {
      const bounds = getBounds();
      if (bounds.width === width && bounds.height === height) return;

      width = bounds.width;
      height = bounds.height;

      World.remove(world, walls);
      walls = createWalls(width, height);
      World.add(world, walls);
    };

    const resizeObserver = new ResizeObserver(updateWalls);
    resizeObserver.observe(container);

    // Hard safety net: never let a shape's edge cross the hero's own bounds,
    // even if a fast drag or a resize outpaces the wall update above.
    const clampToBounds = () => {
      bodies.forEach((body, index) => {
        const size = itemSizes[index];
        if (!body || !size) return;

        const halfW = size.width / 2;
        const halfH = size.height / 2;
        const maxY = height - halfH;
        const minX = halfW;
        const maxX = width - halfW;

        let { x, y } = body.position;
        let outOfBounds = false;

        if (y > maxY) {
          y = maxY;
          outOfBounds = true;
        }
        if (x < minX) {
          x = minX;
          outOfBounds = true;
        }
        if (x > maxX) {
          x = maxX;
          outOfBounds = true;
        }

        if (outOfBounds) {
          Body.setPosition(body, { x, y });
          Body.setVelocity(body, {
            x: body.velocity.x * 0.3,
            y: Math.min(body.velocity.y, 0),
          });
        }
      });
    };

    const lastTransforms: string[] = new Array(ITEMS.length).fill("");

    const syncDom = () => {
      itemRefs.current.forEach((el, index) => {
        const body = bodies[index];
        const size = itemSizes[index];
        if (!el || !size) return;

        if (!body) {
          if (lastTransforms[index] !== "opacity: 0") {
            el.style.opacity = "0";
            lastTransforms[index] = "opacity: 0";
          }
          return;
        }

        if (el.style.opacity === "0") {
          el.style.opacity = "1";
        }

        const { x, y } = body.position;
        const transform = `translate3d(${x - size.width / 2}px, ${y - size.height / 2}px, 0) rotate(${body.angle}rad)`;

        if (lastTransforms[index] !== transform) {
          el.style.transform = transform;
          lastTransforms[index] = transform;
        }
      });
    };

    const loop = () => {
      // Fixed step keeps drag and collision stable across frame-rate changes.
      Engine.update(engine, 1000 / 60);
      clampToBounds();
      syncDom();
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      spawnTimeouts.forEach(clearTimeout);
      cancelAnimationFrame(rafRef.current);
      resizeObserver.disconnect();
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      Composite.clear(world, false, true);
      Engine.clear(engine);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-20 pointer-events-none overflow-hidden"
      aria-hidden
    >
      {ITEMS.map((item, index) => {
        const Icon = item.icon;
        const isCircle = item.shape === "circle";

        return (
          <div
            key={item.label}
            ref={(el) => {
              itemRefs.current[index] = el;
            }}
            className={
              isCircle
                ? `absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full select-none will-change-transform pointer-events-auto md:h-14 md:w-14 ${item.className}`
                : `absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold select-none will-change-transform pointer-events-auto ${item.className}`
            }
            style={{ transformOrigin: "center center", opacity: 0 }}
          >
            {Icon && <Icon size={isCircle ? 20 : 16} strokeWidth={2.5} />}
            {!isCircle && item.label}
          </div>
        );
      })}
    </div>
  );
}