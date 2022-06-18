import React from "react";
import Sketch from "react-p5";
import { useImageInputContext } from "../../context/useImageCanvas";
import { useDrawFunctions } from "../../hooks/useDrawFunctions";

export const ImageCanvas = (): React.ReactElement => {
    const { getDrawFunction } = useDrawFunctions();
    const { draw, setup, preload } = getDrawFunction()
    const { refreshHash, images: { primary: primaryImage } } = useImageInputContext()

    return (
        primaryImage ? <Sketch key={refreshHash} preload={preload} setup={setup} draw={draw} /> : <div> Upload an Image</div>
    )
};
