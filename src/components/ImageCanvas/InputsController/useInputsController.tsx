import { InputOptionNames } from "../../../data/InputOptions"
import { ImageInputController } from "./ImageInputController"
import { StrokeWeightController } from "./StrokeWeightController"

export const inputOptions: {
    [key in InputOptionNames]: React.ReactElement
} = {
    strokeWeight: <StrokeWeightController />,
    imagePrimary: <ImageInputController role="primary" />
}

export const useInputsController = () => {
    const getInputElements = (inputNames: InputOptionNames[]) => inputNames.map(name => inputOptions[name])
    return { getInputElements }
}