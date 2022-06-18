import React from "react"
import { FunctionSelector } from "./FunctionSelector";
import { useInputsController } from "./useInputsController"
export const InputsController = () => {
    const { getInputElements } = useInputsController();
    return (
        <div>
            <FunctionSelector />
            {getInputElements(["strokeWeight", "imagePrimary"])}
        </div>
    )
}