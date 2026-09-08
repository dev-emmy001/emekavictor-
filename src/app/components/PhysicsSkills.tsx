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
  type LucideIcon,
} from "lucide-react";

type Skill = {
  label: string;
  className: string;
  icon?: LucideIcon;
};

const SKILLS: Skill[] = [
  {
    label: "Next.js",
    className:
      "bg-gradient-to-b from-white via-gray-50 to-gray-300 text-black shadow-[0_6px_0_#a8a8a8,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.95)]",
    icon: Zap,
  },
  {
    label: "React Native",
    className:
      "bg-gradient-to-b from-sky-300 via-sky-400 to-sky-600 text-white shadow-[0_6px_0_#0369a1,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.35)]",
    icon: Smartphone,
  },
  {
    label: "Expo",
    className:
      "bg-gradient-to-b from-violet-400 via-violet-500 to-violet-700 text-white shadow-[0_6px_0_#5b21b6,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3)]",
    icon: Rocket,
  },
  {
    label: "Tailwind CSS",
    className:
      "bg-gradient-to-b from-cyan-200 via-cyan-300 to-cyan-500 text-cyan-950 shadow-[0_6px_0_#0891b2,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.55)]",
    icon: Wind,
  },
  {
    label: "TypeScript",
    className:
      "bg-gradient-to-b from-blue-400 via-blue-600 to-blue-800 text-white shadow-[0_6px_0_#1e3a8a,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.3)]",
    icon: Code,
  },
  {
    label: "Supabase",
    className:
      "bg-gradient-to-b from-emerald-300 via-emerald-400 to-emerald-600 text-emerald-950 shadow-[0_6px_0_#047857,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Database,
  },
  {
    label: "Payload CMS",
    className:
      "bg-gradient-to-b from-orange-300 via-orange-400 to-orange-600 text-orange-950 shadow-[0_6px_0_#c2410c,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Layers,
  },
  {
    label: "Resend",
    className:
      "bg-gradient-to-b from-pink-300 via-pink-400 to-pink-600 text-pink-950 shadow-[0_6px_0_#be185d,0_8px_16px_rgba(0,0,0,0.4),inset_0_2px_0_rgba(255,255,255,0.45)]",
    icon: Mail,
  },
];

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
    Bodies.rectangle(
      -WALL_THICKNESS / 2,
      height / 2,
      WALL_THICKNESS,
      height * 3,
      { isStatic: true, label: "left" }
    ),
    Bodies.rectangle(
      width + WALL_THICKNESS / 2,
      height / 2,
      WALL_THICKNESS,
      height * 3,
      { isStatic: true, label: "right" }
    ),
  ];
}

export default function PhysicsSkills() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLDivElement | null)[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const { Engine, World, Bodies, Body, Composite, Mouse, MouseConstraint } =
      Matter;

    const engine = Engine.create({ 
      gravity: { x: 0, y: 1.4 },
      enableSleeping: true 
    });
    const world = engine.world;

    const getBounds = () => ({
      width: container.clientWidth,
      height: container.clientHeight,
    });

    let { width, height } = getBounds();
    let walls = createWalls(width, height);
    World.add(world, walls);

    const bodies: (Matter.Body | null)[] = new Array(SKILLS.length).fill(null);
    const pillSizes: ({ width: number; height: number } | null)[] = new Array(
      SKILLS.length
    ).fill(null);
    const spawnTimeouts: ReturnType<typeof setTimeout>[] = [];

    pillRefs.current.forEach((el, index) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      pillSizes[index] = { width: rect.width, height: rect.height };
    });

    const spawnPill = (index: number) => {
      const size = pillSizes[index];
      if (!size || bodies[index]) return;

      const { width: pillWidth, height: pillHeight } = size;
      const margin = pillWidth / 2 + 12;
      const x =
        margin +
        Math.random() * Math.max(width - margin * 2, pillWidth);
      // Spawn far enough above so they fall from the top of the screen
      const y = -(pillHeight / 2 + 200 + Math.random() * 280);

      const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
        chamfer: { radius: pillHeight / 2 },
        restitution: 0.42,
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

    SKILLS.forEach((_, index) => {
      const delay = index * SPAWN_STAGGER_MS + Math.random() * 220;
      spawnTimeouts.push(setTimeout(() => spawnPill(index), delay));
    });

    const mouse = Mouse.create(container);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.28,
        render: { visible: false },
      },
    });

    World.add(world, mouseConstraint);

    const matterMouse = mouse as Matter.Mouse & {
      mousewheel?: EventListener;
      mousemove?: EventListener;
      mouseup?: EventListener;
    };

    if (matterMouse.mousewheel) {
      mouse.element.removeEventListener("mousewheel", matterMouse.mousewheel);
      mouse.element.removeEventListener(
        "DOMMouseScroll",
        matterMouse.mousewheel
      );
    }

    // Fix fast dragging on desktop when pointer leaves the capsule
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

    const lastTransforms: string[] = new Array(SKILLS.length).fill("");

    const syncDom = () => {
      pillRefs.current.forEach((el, index) => {
        const body = bodies[index];
        const size = pillSizes[index];
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
        
        // Cache DOM updates to prevent layout thrashing
        if (lastTransforms[index] !== transform) {
          el.style.transform = transform;
          lastTransforms[index] = transform;
        }
      });
    };

    const loop = () => {
      // Use fixed time step (60fps). Variable delta destroys constraint stability (causes jittery drag)
      Engine.update(engine, 1000 / 60);
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
      className="absolute inset-0 z-0 pointer-events-none"
      aria-hidden
    >
      {SKILLS.map((skill, index) => {
        const Icon = skill.icon;

        return (
          <div
            key={skill.label}
            ref={(el) => {
              pillRefs.current[index] = el;
            }}
            className={`absolute left-0 top-0 flex items-center gap-2 whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold select-none will-change-transform pointer-events-auto ${skill.className}`}
            style={{
              transformOrigin: "center center",
              opacity: 0,
            }}
          >
            {Icon && <Icon size={16} strokeWidth={2.5} />}
            {skill.label}
          </div>
        );
      })}
    </div>
  );
}
