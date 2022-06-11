import React from "react";
import Sketch from "react-p5";
import p5Types, { Image } from "p5";
import { useDrawImage, useSetupImage } from "../../hooks";
import { useImageInputContext } from "../../context/useImageCanvas";

interface Props {
    shrinkRate: number
}

let img: Image;

export const ImageCanvas = (props: Props): React.ReactElement => {
    const { shrinkRate } = props;
    const { strokeWeight, images } = useImageInputContext()
    const key = JSON.stringify({ ...props, strokeWeight, images })
    const primaryImage = images.primary ? images.primary : undefined

    const preload = (p5: p5Types) => {
        if (primaryImage?.length) img = p5.loadImage(primaryImage);
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
        primaryImage ? <Sketch key={key} preload={preload} setup={setup} draw={draw} /> : <div> Upload an Image</div>
    )
};
