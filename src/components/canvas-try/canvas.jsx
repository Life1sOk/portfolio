import React, { useRef, useEffect } from "react";
import { Particle } from "./particle";
import { src } from './image-src';

import './canvas.style.scss';

const Canvas = () => {
    const canvasRef = useRef(null);
    
    useEffect(() => {
        const particles = [];
        const numberOfParticles = 10000;

        const myImage = new Image();
        myImage.src = src;

        myImage.addEventListener('load', function() {
            const mappedImage = [];
            const canvas = canvasRef.current;
            const context = canvas.getContext('2d');
            context.drawImage(myImage, 0, 0, canvas.width, canvas.height);
            const pixels = context.getImageData(0,0, canvas.width, canvas.height);
            // context.clearRect(0,0, canvas.width, canvas.height);

            for( let y = 0; y < canvas.height; y++) {
                let row = [];
                for( let x = 0; x < canvas.width; x++) {
                    const red = pixels.data[(y * 4 * pixels.width) + (x * 4)];
                    const green = pixels.data[(y * 4 * pixels.width) + (x * 4 + 1)];
                    const blue  = pixels.data[(y * 4 * pixels.width) + (x * 4 + 2)];
                    const brightness = calculateRelativeBrightness(red, green, blue);
                    const cell = [brightness];

                    row.push(cell);
                }
                mappedImage.push(row);
            }

            function calculateRelativeBrightness(red, green, blue) {
                return Math.sqrt((red * red) * 0.299 + (green * green) + 0.587 + (blue * blue) * 0.114)/100;
            }

            const init = () => {
                for( let i = 0; i < numberOfParticles; i++) {
                    particles.push(new Particle(canvas));
                }
            }
            init()

            const animate = () => {
                // context.drawImage(myImage, 0, 0, canvas.width, canvas.height);
                context.globalAlpha = 0.05;
                context.fillStyle = 'rgb(233,213,161)';
                context.fillRect(0, 0, canvas.width, canvas.height);
                context.globalAlpha = 0.2;

                for( let i = 0; i < particles.length; i++) {
                    particles[i].update(canvas, mappedImage);
                    context.globalAlpha = particles[i].speed * 0.2;
                    particles[i].draw(context);
                }
                requestAnimationFrame(animate)
            }
            animate();
        })
        
    }, [])

    return(
        <canvas id="canvas1" ref={canvasRef}></canvas>
    );
}

export default Canvas;