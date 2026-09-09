/// <reference types="vite/client" />

declare module "vanta/src/vanta.halo" {
  type ThreeNamespace = typeof import("three");

  type VantaEffect = {
    destroy: () => void;
    resize?: () => void;
    setOptions?: (options: Record<string, unknown>) => void;
  };

  type VantaHaloOptions = {
    el: HTMLElement | string;
    THREE: ThreeNamespace;
    backgroundColor?: number;
    baseColor?: number;
    color2?: number;
    size?: number;
    amplitudeFactor?: number;
    ringFactor?: number;
    rotationFactor?: number;
    xOffset?: number;
    yOffset?: number;
    speed?: number;
    mouseControls?: boolean;
    touchControls?: boolean;
    gyroControls?: boolean;
    scale?: number;
    scaleMobile?: number;
    minHeight?: number;
    minWidth?: number;
  };

  export default function HALO(options: VantaHaloOptions): VantaEffect;
}
