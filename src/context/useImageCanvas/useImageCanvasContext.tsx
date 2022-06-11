import React, { createContext, useContext, useState } from "react"


type ImageRole = "primary" | "secondary" | "stencil";

const getStorageKey = (role: ImageRole) => {
    return `${role}-image`;
}

type UploadedImages = {
    [role in ImageRole]?: string

}



interface ImageInputContextValues {
    strokeWeight: number
    setStrokeWeight: (strokeWeight: number) => void
    setImage: (image: File, role: ImageRole) => void;
    images: UploadedImages
}

const defaultStrokeWeight = 5;

export const ImageInputContext = createContext<ImageInputContextValues>({
    strokeWeight: defaultStrokeWeight,
    setStrokeWeight: () => { },
    setImage: (image: File) => { },
    images: {}
})

export const useImageInputContext = () => useContext(ImageInputContext)

export const ImageInputProvider = ({ children }: { children: React.ReactNode }) => {
    const fileFromLocalstorage = localStorage.getItem(getStorageKey("primary"))
    const primaryFromStorage = fileFromLocalstorage && JSON.parse(fileFromLocalstorage);
    const [strokeWeight, setStrokeWeight] = useState(defaultStrokeWeight)
    const [images, setImages] = useState<UploadedImages>({
        primary: primaryFromStorage || undefined
    });

    function handleFileRead(event: ProgressEvent<FileReader>) {
        const result = event.target?.result as string;
        try {
            window.localStorage.setItem(getStorageKey("primary"), JSON.stringify(result));
        }
        catch (e) {
            alert("Image to big to store in localStorage. \n it will be rendered but it won't be cached on page reload")
        }
    }

    const setImage = (image: File, role: ImageRole) => {
        const fileReader = new FileReader()
        fileReader.onload = handleFileRead
        fileReader.readAsDataURL(image)

        // localStorage.setItem(getStorageKey(role), image)
        setImages({ ...images, [role]: URL.createObjectURL(image) })
    }

    return (<ImageInputContext.Provider value={{ strokeWeight, setStrokeWeight, setImage, images }}>
        {children}
    </ImageInputContext.Provider>)
}