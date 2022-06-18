import React from "react"
import { useDrawFunctions } from "../../../hooks/useDrawFunctions";
import { FunctionSelector } from "./FunctionSelector";
import { useInputsController } from "./useInputsController"
export const InputsController = () => {
    const { getInputElements } = useInputsController();
    const { getDrawFunction } = useDrawFunctions()
    const { inputs } = getDrawFunction()
    return (
        <div>
            <FunctionSelector />
            {getInputElements(inputs)}
        </div>
    )
}