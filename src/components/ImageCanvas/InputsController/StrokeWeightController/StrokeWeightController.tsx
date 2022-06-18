import { useImageInputContext } from "../../../../context/useImageCanvas"

export const StrokeWeightController = () => {
    const { strokeWeight, setStrokeWeight } = useImageInputContext()
    return <input type="range" value={strokeWeight} min={1} max={20} onChange={(e) => setStrokeWeight(JSON.parse(e.currentTarget.value))} />
}