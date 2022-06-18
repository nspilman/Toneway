export enum DrawFunctions { Bubbles = "Bubbles" }
import p5Types from "p5";

export interface DrawFunctionReturn {
    draw: (p5: p5Types) => void;
    setup: (p5: p5Types, canvasParentRef: Element) => void;
    preload: (p5: p5Types) => void;
}
