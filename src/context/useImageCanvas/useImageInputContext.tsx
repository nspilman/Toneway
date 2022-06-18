import React, { createContext, useContext, useState } from "react"
import { DrawFunctions } from "../../data/DrawFunctions";
import { ImageRole } from "../../data/ImageRole";
import { useLocalStorage } from "../../hooks/useLocalStorage/useLocalStorage";


type UploadedImages = {
    [role in ImageRole]?: string
}

interface ImageInputContextValues {
    selectedFunction: DrawFunctions,
    strokeWeight: number
    setStrokeWeight: (strokeWeight: number) => void
    images: UploadedImages;
    refreshHash: string
    setImage: (image: File, role: ImageRole) => void;
}

const defaultStrokeWeight = 5;

export const ImageInputContext = createContext<ImageInputContextValues>({
    selectedFunction: DrawFunctions.Bubbles,
    strokeWeight: defaultStrokeWeight,
    setStrokeWeight: () => { },
    images: {},
    refreshHash: "",
    setImage: (image: File) => { },
})

export const useImageInputContext = () => useContext(ImageInputContext)

export const ImageInputProvider = ({ children }: { children: React.ReactNode }) => {
    const { getImage, setImage: saveToLocalStorage } = useLocalStorage()
    const fileFromLocalstorage = getImage("primary")
    const primaryFromStorage = fileFromLocalstorage && JSON.parse(fileFromLocalstorage);
    const [strokeWeight, setStrokeWeight] = useState(defaultStrokeWeight)
    const [images, setImages] = useState<UploadedImages>({
        primary: primaryFromStorage || undefined
    });

    const setImage = (image: File, role: ImageRole) => {
        saveToLocalStorage(image, role)
        setImages({ ...images, [role]: URL.createObjectURL(image) });
    }


    const refreshHash = JSON.stringify({ strokeWeight, setStrokeWeight, images })
    const selectedFunction = DrawFunctions.Bubbles

    return (<ImageInputContext.Provider value={{ strokeWeight, setStrokeWeight, images, selectedFunction, refreshHash, setImage }}>
        {children}
    </ImageInputContext.Provider>)
}