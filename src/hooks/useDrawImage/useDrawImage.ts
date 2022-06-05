import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense

interface DrawImageConfig {
	getPixelationRate: () => number;
	getPixelValue: (col: number, row: number) => number[];
}
export const useDrawImage = () => {
	const drawImage = (p5: p5Types, image: Image, config: DrawImageConfig) => {
		const { width, height } = image;
		const { getPixelationRate, getPixelValue } = config;
		for (let col = 0; col < width; col += getPixelationRate()) {
			for (let row = 0; row < height; row += getPixelationRate()) {
				const pixelValue = getPixelValue(col, row);
				pixelValue[0] += 60;
				p5.strokeWeight(getPixelationRate() * (2 * (Math.random() * 3.5)));
				p5.stroke(p5.color(pixelValue));
				p5.point(col, row);
			}
		}
	};
	return { drawImage };
};
