import React, { useCallback } from "react";
import Sketch from "react-p5";
import p5Types, { Image } from "p5"; //Import this for typechecking and intellisense
import localImage from "../../assets/Bicoastal2.jpg"
import localSong from "../../assets/Beat.wav"
import { useDrawImage, useSetupImage } from "../../hooks";
import "p5/lib/addons/p5.sound";

interface Props {
    largestStroke: number
    shrinkRate: number
    playAudio: boolean
}

let img: Image;
let song: SoundFile;

export const ImageCanvas = (props: Props): React.ReactElement => {
    const { largestStroke, shrinkRate, playAudio } = props;
    const key = JSON.stringify(props)
    const preload = (p5: p5Types) => {
        img = p5.loadImage(localImage)

        p5.soundFormats("wav", "mp3")
        song = p5.loadSound(localSong)
    }

    const { drawImage } = useDrawImage()
    const { setupImage } = useSetupImage()
    const setup = (p5: p5Types, canvasParentRef: Element) => {
        setupImage(p5, img, canvasParentRef, { shrinkRate })
    };

    const getPixelationRate = () => {
        const rate = Math.floor(Math.random() * largestStroke);
        return rate
    }

    const draw = (p5: p5Types) => {
        const getPixelValue = (col: number, row: number) => {
            const originalPixel = img.get(col, row);
            return [originalPixel[0], originalPixel[1], originalPixel[2], originalPixel[3]]; // r,g,b,a
        }

        if (playAudio && !song.isPlaying()) {
            song.play()
        }
        else if (!playAudio) {
            song.stop()
        }

        drawImage(p5, img, {
            getPixelationRate,
            getPixelValue
        })
    }

    return (
        <Sketch key={key} preload={preload} setup={setup} draw={draw} />
    )
};
