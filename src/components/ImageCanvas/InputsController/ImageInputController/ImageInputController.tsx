import { useImageInputContext } from "../../../../context/useImageCanvas"
import { ImageRole } from "../../../../data/ImageRole"

interface Props {
    role: ImageRole
}

export const ImageInputController = ({ role }: Props) => {
    const { setImage } = useImageInputContext()
    const parseImageUpload = (files: FileList | null) => {
        if (!files) return
        setImage(files[0], role)
    }
    return <input type="file" onChange={(e) => parseImageUpload(e.target.files)} />
}