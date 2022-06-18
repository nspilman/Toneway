import { ImageRole } from "../../data/ImageRole";

export const useLocalStorage = () => {
    const getStorageKey = (role: ImageRole) => {
        return `${role}-image`;
    };

    const getImage = (role: ImageRole) =>
        localStorage.getItem(getStorageKey(role));
    const setImage = (image: File, role: ImageRole) => {
        const fileReader = new FileReader();
        fileReader.onload = handleFileRead;
        fileReader.readAsDataURL(image);

        function handleFileRead(event: ProgressEvent<FileReader>) {
            const result = event.target?.result as string;
            try {
                window.localStorage.setItem(
                    getStorageKey(role),
                    JSON.stringify(result),
                );
            } catch (e) {
                alert(
                    "Image to big to store in localStorage. \n it will be rendered but it won't be cached on page reload",
                );
            }
        }
    };
    return { getImage, setImage };
};
