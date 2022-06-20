import p5Types, { Image } from "p5";
import { useImageInputContext } from "../../../context/useImageCanvas";

export const useBubbles = () => {
    const inputs = ["strokeWeight", "imagePrimary"] as const

    let img: Image;

    const setup = (
        p5: p5Types,
        canvasParentRef: Element,
    ) => {
        const shrinkRate = 2;
        const { width, height } = {
            width: img?.width || 10 / shrinkRate,
            height: img?.height || 0 / shrinkRate,
        };

        p5.noLoop();
        if (shrinkRate > 1) {
            img?.resize(width, height);
        }
        p5.createCanvas(width, height)?.parent(canvasParentRef);
    };
    const { images: { primary: image }, strokeWeight } = useImageInputContext();

    const preload = (p5: p5Types) => {
        if (image?.length) img = p5.loadImage(image);
    }
    const draw = (p5: p5Types) => {
        if (!img) {
            throw new Error("cannot render bubbles without image")
        }
        const { width, height } = img;

        const getPixelValue = (col: number, row: number) => {
            const originalPixel = img.get(col, row);
            return [
                originalPixel[0],
                originalPixel[1],
                originalPixel[2],
                originalPixel[3],
            ]; /// r,g,b,a
        };

        for (let col = 0; col < width; col += strokeWeight) {
            for (let row = 0; row < height; row += strokeWeight) {
                const pixelValue = getPixelValue(col, row);
                p5.strokeWeight((strokeWeight * 1.7) * (Math.floor(Math.random() * 4)));
                p5.stroke(p5.color(pixelValue));
                p5.point(col, row);
            }
        }
    };;
    return { draw, setup, preload, inputs }

}