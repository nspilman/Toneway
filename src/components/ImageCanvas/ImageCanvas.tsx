import React from "react";
import Sketch from "react-p5";
import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense
import localImage from "../../assets/Bicoastal2.jpg"
import { useDrawImage, useSetupImage } from "../../hooks";

let img: Image;

export const ImageCanvas = (): React.ReactElement => {
    const preload = (p5: p5Types) => {
        img = p5.loadImage(localImage)
    }

    const { drawImage } = useDrawImage()
    const { setupImage } = useSetupImage()
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        setupImage(p5, img, canvasParentRef, { shrinkRate: 9 })
    };

    const draw = (p5: p5Types) => {
        const getPixelValue = (col: number, row: number) => {
            const originalPixel = img.get(col, row);
            return [originalPixel[0] + 60, originalPixel[1], originalPixel[2]]
        }

        const largestStroke = 4;

        const getPixelationRate = () => {
            return Math.floor(Math.random() * largestStroke)
        }

        drawImage(p5, img, {
            getPixelationRate,
            getPixelValue
        })
    };

    return (
        <Sketch preload={preload} setup={setup} draw={draw} />
    )
};
