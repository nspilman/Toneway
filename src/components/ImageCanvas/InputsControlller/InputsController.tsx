import React from "react"
import { useImageInputContext } from "../../../context/useImageCanvas/useImageInputContext"
export const InputsController = () => {
    const { strokeWeight, setStrokeWeight, setImage } = useImageInputContext()
    const parseImageUpload = (files: FileList | null) => {
        if (!files) return
        setImage(files[0], "primary")
    }
    return (
        <div>
            <input type="file" onChange={(e) => parseImageUpload(e.target.files)} />
            <input type="range" value={strokeWeight} min={1} max={20} onChange={(e) => setStrokeWeight(JSON.parse(e.currentTarget.value))} />
        </div>
    )
}