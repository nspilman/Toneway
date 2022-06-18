import { useImageInputContext } from "../../context/useImageCanvas";
import { DrawFunctionReturn, DrawFunctions } from "../../data/DrawFunctions";
import { useBubbles } from "./bubbles/useBubbles";

export const useDrawFunctions = () => {
    const bubbles = useBubbles();
    const { selectedFunction } = useImageInputContext();
    const allDrawFunctions: {
        [name in DrawFunctions]: DrawFunctionReturn;
    } = {
        [DrawFunctions.Bubbles]: bubbles,
    };

    const getDrawFunction = () => allDrawFunctions[selectedFunction];
    return { getDrawFunction };
};
