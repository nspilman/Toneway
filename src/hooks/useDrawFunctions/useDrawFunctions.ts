import { useDrawImage } from "..";
import { useImageInputContext } from "../../context/useImageCanvas";
import { DrawFunctions } from "../../data/DrawFunctions";

export const useDrawFunctions = () => {
    const { drawBubblePixels } = useDrawImage();
    const { selectedFunction } = useImageInputContext();
    const allDrawFunctions: {
        [name in DrawFunctions]: typeof drawBubblePixels;
    } = {
        [DrawFunctions.Bubbles]: drawBubblePixels,
    };

    const getDrawFunction = () => allDrawFunctions[selectedFunction];
    return { getDrawFunction };
};
