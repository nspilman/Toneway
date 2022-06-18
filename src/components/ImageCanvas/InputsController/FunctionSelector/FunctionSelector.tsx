import React from "react"
import { DrawFunctions } from "../../../../data/DrawFunctions"

export const FunctionSelector = () => {
    return (
        <select>
            {Object.keys(DrawFunctions).map(drawFunction => <option>{drawFunction} </option>)}
        </select>
    )
}