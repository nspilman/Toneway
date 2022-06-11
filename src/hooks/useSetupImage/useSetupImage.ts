import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense

export const useSetupImage = () => {
	const setupImage = (
		p5: p5Types,
		img: Image,
		canvasParentRef: Element,
		config: { shrinkRate?: number; loop?: boolean },
	) => {
		const shrinkRate = config.shrinkRate || 1;
		const { width, height } = {
			width: img.width / shrinkRate,
			height: img.height / shrinkRate,
		};

		if (!config.loop) {
			p5.noLoop();
		}
		if (shrinkRate > 1) {
			img.resize(width, height);
		}
		return p5.createCanvas(width, height).parent(canvasParentRef);
	};
	return { setupImage };
};
