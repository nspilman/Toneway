export enum DrawFunctions { Bubbles = "Bubbles" }
import p5Types from "p5";
import { InputOptionNames } from "./InputOptions";

export interface DrawFunctionReturn {
    inputs: InputOptionNames[];
    draw: (p5: p5Types) => void;
    setup: (p5: p5Types, canvasParentRef: Element) => void;
    preload: (p5: p5Types) => void;
}
