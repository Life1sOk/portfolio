import React, { useRef, useEffect, useState } from "react";
import './canvas.style.scss';
import { Particle } from "./particle";


const mouse = {
    x: undefined,
    y: undefined,
    radius: 150,
}

const Canvas = () => {
    const [ arrayParticles, setArrayParticles ] = useState([]);
    const [ dataScan, setDataScan ] = useState({})
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'white';
        ctx.font = '30px Verdana';
        ctx.fillText('A', 0, 30);
        const data = ctx.getImageData(0,0,100,100);
        setDataScan(data)

        init()
        animation()
    }, [])

    const hoverHandler = (e) => {
        e.preventDefault();
        mouse.x = e.nativeEvent.offsetX;
        mouse.y = e.nativeEvent.offsetY;
    }

    console.log(dataScan)

    const init = () => {
        const newArray = arrayParticles;

        for (let y = 0, y2 = dataScan.height; y < y2; y++) {
            for (let x = 0, x2 = dataScan.width; x < x2; x++) {
                if(dataScan.data[(y * 4 * dataScan.width) + (x * 4) + 3] > 128) {
                    let positionX = x;
                    let positionY = y;
                    newArray.push(new Particle(positionX * 5, positionY * 6))
                }
            }
        }
        setArrayParticles(newArray)
    }

    const animation = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for (let i=0; i < arrayParticles.length; i++) {
            arrayParticles[i].draw(canvasRef);
            arrayParticles[i].update(mouse.x, mouse.y, mouse.radius);
        }

        requestAnimationFrame(animation);
    }

    const check = () => {
        return console.log(arrayParticles)
    }

    return(
        <div className="canvas-container">
            <canvas ref={canvasRef} width='640' height='640' 
            onMouseMove={(e) => hoverHandler(e)}
            onClick={check}
            />
        </div>
    )
}

export default Canvas;
