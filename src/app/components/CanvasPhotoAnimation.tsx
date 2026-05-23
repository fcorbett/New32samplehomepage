import { useEffect, useRef } from "react";

const CREATEJS_SCRIPTS = [
  "https://code.createjs.com/easeljs-0.7.1.min.js",
  "https://code.createjs.com/tweenjs-0.5.1.min.js",
  "https://code.createjs.com/movieclip-0.7.1.min.js",
  "https://code.createjs.com/preloadjs-0.4.1.min.js",
] as const;

const getAnimationScriptUrl = () =>
  `${import.meta.env.BASE_URL}canvas-animation/canvas-animation.js`;

function prefixPublicPath(path: string): string {
  if (path.startsWith("/")) {
    return `${import.meta.env.BASE_URL}${path.slice(1)}`;
  }
  return path;
}

function prefixManifestPaths(
  manifest: { src: string; id: string }[],
): { src: string; id: string }[] {
  return manifest.map((item) => ({
    ...item,
    src: prefixPublicPath(item.src),
  }));
}

function loadScript(src: string): Promise<void> {
  const existing = document.querySelector(`script[src="${src}"]`);
  if (existing) {
    return Promise.resolve();
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Failed to load script: ${src}`));
    document.head.appendChild(script);
  });
}

async function loadCreateJs(): Promise<void> {
  for (const src of CREATEJS_SCRIPTS) {
    await loadScript(src);
  }
  await loadScript(getAnimationScriptUrl());
}

const DESIGN_SIZE = 444;

function applyCanvasSize(
  canvas: HTMLCanvasElement,
  stage: InstanceType<typeof createjs.Stage>,
  displaySize: number,
) {
  const size = Math.max(1, Math.min(DESIGN_SIZE, Math.round(displaySize)));
  const scale = size / DESIGN_SIZE;

  canvas.width = size;
  canvas.height = size;
  canvas.style.width = `${size}px`;
  canvas.style.height = `${size}px`;
  stage.scaleX = scale;
  stage.scaleY = scale;
  stage.update();
}

export function CanvasPhotoAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stageRef = useRef<InstanceType<typeof createjs.Stage> | null>(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const measureAndApply = () => {
      const stage = stageRef.current;
      const targetCanvas = canvasRef.current;
      const targetContainer = containerRef.current;
      if (!stage || !targetCanvas || !targetContainer) return;

      const width = targetContainer.getBoundingClientRect().width;
      if (width > 0) {
        applyCanvasSize(targetCanvas, stage, width);
      }
    };

    const initAnimation = async () => {
      try {
        await loadCreateJs();
        if (cancelled || !mountedRef.current || !canvasRef.current) return;

        const manifest = prefixManifestPaths(lib.properties.manifest);

        const targetCanvas = canvasRef.current;
        images = images || {};

        const loader = new createjs.LoadQueue(false);
        loader.addEventListener("fileload", (evt: { item: { type: string; id: string }; result: unknown }) => {
          if (evt.item.type === "image") {
            images[evt.item.id] = evt.result as HTMLImageElement;
          }
        });
        loader.addEventListener("complete", () => {
          if (cancelled || !mountedRef.current || !canvasRef.current) return;

          const exportRoot = new lib.indexcanvas();
          const stage = new createjs.Stage(targetCanvas);
          stage.addChild(exportRoot);
          stage.update();
          stage.enableMouseOver();
          stageRef.current = stage;

          createjs.Ticker.setFPS(lib.properties.fps);
          createjs.Ticker.addEventListener("tick", stage);

          measureAndApply();

          resizeObserver = new ResizeObserver(() => {
            measureAndApply();
          });
          resizeObserver.observe(container);
        });
        loader.loadManifest(manifest);
      } catch (err) {
        console.error("Canvas animation failed to load:", err);
      }
    };

    void initAnimation();

    return () => {
      cancelled = true;
      mountedRef.current = false;
      resizeObserver?.disconnect();

      const stage = stageRef.current;
      if (stage) {
        createjs.Ticker.removeEventListener("tick", stage);
        stage.removeAllChildren();
        stageRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="size-full flex items-center justify-center"
    >
      <canvas
        ref={canvasRef}
        id="canvas"
        width={DESIGN_SIZE}
        height={DESIGN_SIZE}
        className="block"
        style={{ backgroundColor: "#FFFFFF" }}
        aria-label="new32 office photo animation"
      />
    </div>
  );
}
