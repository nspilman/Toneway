import React, { createContext, useContext, useState } from "react"


type ImageRole = "primary" | "secondary" | "stencil"

type UploadedImages = {
    [role in ImageRole]?: string
}

interface ImageInputContextValues {
    strokeWeight: number
    setStrokeWeight: (strokeWeight: number) => void
    setImage: (image: string, role: ImageRole) => void;
    images: UploadedImages
}

const defaultStrokeWeight = 5;

export const ImageInputContext = createContext<ImageInputContextValues>({
    strokeWeight: defaultStrokeWeight,
    setStrokeWeight: () => { },
    setImage: (image: string) => { },
    images: {}
})

export const useImageInputContext = () => useContext(ImageInputContext)

export const ImageInputProvider = ({ children }: { children: React.ReactNode }) => {
    const [strokeWeight, setStrokeWeight] = useState(defaultStrokeWeight)
    const [images, setImages] = useState<UploadedImages>({});

    const setImage = (image: string, role: ImageRole) => {
        setImages({ ...images, [role]: image })
    }

    return (<ImageInputContext.Provider value={{ strokeWeight, setStrokeWeight, setImage, images }}>
        {children}
    </ImageInputContext.Provider>)
}