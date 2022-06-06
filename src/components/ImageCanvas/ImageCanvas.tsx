import React, { useCallback } from "react";
import Sketch from "react-p5";
import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense
import localImage from "../../assets/Bicoastal2.jpg"
import { useDrawImage, useSetupImage } from "../../hooks";
import { useImageInputContext } from "../../context/useImageCanvas";

interface Props {
    shrinkRate: number
}

let img: Image;

export const ImageCanvas = (props: Props): React.ReactElement => {
    const { shrinkRate } = props;
    const { strokeWeight } = useImageInputContext()
    const key = JSON.stringify({ ...props, strokeWeight })

    const preload = (p5: p5Types) => {
        img = p5.loadImage(localImage)
    }

    const { drawImage } = useDrawImage()
    const { setupImage } = useSetupImage()
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        setupImage(p5, img, canvasParentRef, { shrinkRate })
    };

    const draw = (p5: p5Types) => {
        const getPixelValue = (col: number, row: number) => {
            const originalPixel = img.get(col, row);
            return [originalPixel[0], originalPixel[1], originalPixel[2], originalPixel[3]]; // r,g,b,a
        }

        drawImage(p5, img, {
            getPixelationRate: () => strokeWeight,
            getPixelValue
        })
    }

    return (
        <Sketch key={key} preload={preload} setup={setup} draw={draw} />
    )
};
