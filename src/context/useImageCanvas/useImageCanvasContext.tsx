import React, { createContext, useContext, useState } from "react"

interface ImageInputContextValues {
    strokeWeight: number
    setStrokeWeight: (strokeWeight: number) => void
}

const defaultStrokeWeight = 5;

export const ImageInputContext = createContext<ImageInputContextValues>({
    strokeWeight: defaultStrokeWeight,
    setStrokeWeight: () => { }
})

export const useImageInputContext = () => useContext(ImageInputContext)

export const ImageInputProvider = ({ children }: { children: React.ReactNode }) => {
    const [strokeWeight, setStrokeWeight] = useState(defaultStrokeWeight)
    return (<ImageInputContext.Provider value={{ strokeWeight, setStrokeWeight }}>
        {children}
    </ImageInputContext.Provider>)
}