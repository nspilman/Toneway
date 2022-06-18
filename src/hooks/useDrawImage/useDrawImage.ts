import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense
import { useImageInputContext } from "../../context/useImageCanvas";

export const useDrawImage = () => {
	const { strokeWeight } = useImageInputContext();
	const drawBubblePixels = (p5: p5Types, image: Image) => {
		const { width, height } = image;

		const getPixelValue = (col: number, row: number) => {
			const originalPixel = image.get(col, row);
			return [
				originalPixel[0],
				originalPixel[1],
				originalPixel[2],
				originalPixel[3],
			]; /// r,g,b,a
		};

		for (let col = 0; col < width; col += strokeWeight) {
			for (let row = 0; row < height; row += strokeWeight) {
				const pixelValue = getPixelValue(col, row);
				p5.strokeWeight((strokeWeight * 1.7) * (Math.floor(Math.random() * 4)));
				p5.stroke(p5.color(pixelValue));
				p5.point(col, row);
			}
		}
	};
	return { drawBubblePixels };
};
