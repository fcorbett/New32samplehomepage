/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  const createjs: {
    LoadQueue: new (useXHR?: boolean) => {
      addEventListener: (type: string, fn: (evt: any) => void) => void;
      loadManifest: (manifest: unknown[]) => void;
    };
    Stage: new (canvas: HTMLCanvasElement) => {
      addChild: (child: unknown) => void;
      update: () => void;
      enableMouseOver: () => void;
      removeAllChildren: () => void;
      scaleX: number;
      scaleY: number;
    };
    Ticker: {
      setFPS: (fps: number) => void;
      addEventListener: (type: string, listener: unknown) => void;
      removeEventListener: (type: string, listener: unknown) => void;
    };
  };

  const lib: {
    properties: {
      fps: number;
      manifest: Array<{ src: string; id: string }>;
    };
    indexcanvas: new () => unknown;
  };

  let images: Record<string, HTMLImageElement | HTMLCanvasElement>;
}

export {};
