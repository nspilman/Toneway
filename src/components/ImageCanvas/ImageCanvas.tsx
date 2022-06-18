import React from "react";
import Sketch from "react-p5";
import p5Types, { Image } from "p5";
import { useSetupImage } from "../../hooks";
import { useImageInputContext } from "../../context/useImageCanvas";
import { useDrawFunctions } from "../../hooks/useDrawFunctions";

interface Props {
    shrinkRate: number
}

let img: Image;

export const ImageCanvas = (props: Props): React.ReactElement => {
    const { shrinkRate } = props;
    const { images, refreshHash } = useImageInputContext()
    const primaryImage = images.primary ? images.primary : undefined

    const preload = (p5: p5Types) => {
        if (primaryImage?.length) img = p5.loadImage(primaryImage);
    }

    const { getDrawFunction } = useDrawFunctions()
    const { setupImage } = useSetupImage()
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        setupImage(p5, img, canvasParentRef, { shrinkRate })
    };

    const draw = (p5: p5Types) => {
        const _drawFunction = getDrawFunction()
        _drawFunction(p5, img)
    }

    return (
        primaryImage ? <Sketch key={refreshHash} preload={preload} setup={setup} draw={draw} /> : <div> Upload an Image</div>
    )
};
