import { useImageInputContext } from "../../context/useImageCanvas";
import { DrawFunctions } from "../../data/DrawFunctions";
import { useBubbles } from "./bubbles/useBubbles";

export const useDrawFunctions = () => {
    const bubbles = useBubbles();
    const { selectedFunction } = useImageInputContext();
    const allDrawFunctions: {
        [name in DrawFunctions]: typeof bubbles;
    } = {
        [DrawFunctions.Bubbles]: bubbles,
    };

    const getDrawFunction = () => allDrawFunctions[selectedFunction];
    return { getDrawFunction };
};
