import React, { useRef, useEffect, useState } from "react";
import './canvas.style.scss';


const mouse = {
    x: undefined,
    y: undefined,
    radius: 100,
}

const Canvas = () => {
    const [ particles, setParticles ] = useState(mouse);
    const [ arrayParticles, setArrayParticles ] = useState([]);
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = 'white';
        ctx.font = '30px Verdana';
        ctx.fillText('A', 0, 30);
        const data = ctx.getImageData(0,0,100,100);
        console.log(data, 'data');
        animation()
        // console.log(arrayParticles)
    }, [])

    const hoverHandler = (e) => {
        e.preventDefault();
        setParticles({...particles,
            x: Number(e.nativeEvent.offsetX),
            y: Number(e.nativeEvent.offsetY)
            })
        init()
    }

    const init = () => {
        const newArray = arrayParticles;
        // for ( let i=0; i < 100; i++) {
            let x = Math.random() * 620;
            let y = Math.random() * 620;
        //     newArray.push(new Particle(x, y))
        // }
        newArray.push(new Particle(particles.x, particles.y))
        setArrayParticles(newArray)
        console.log(arrayParticles, 'initial array')
        console.log(particles.x)
    }

    class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }
        draw() {
            const context = canvasRef.current.getContext('2d');
            context.fillStyle = 'white';
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            context.closePath();
            context.fill();
        }
        update() {
            let dx = particles.x - this.x;
            let dy = particles.y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;

            if( distance < 100 ) {
                this.x += forceDirectionX * 10;
                this.y += forceDirectionY * 10;
            } else {
                this.size = 3
            }
        }
    }

    const animation = () => {
        const context = canvasRef.current.getContext('2d');
        context.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        for (let i=0; i < arrayParticles.length; i++) {
            arrayParticles[i].draw();
            arrayParticles[i].update();
        }
        requestAnimationFrame(animation);
    }

    return(
        <div className="canvas-container">
            <canvas ref={canvasRef} width='640' height='640' 
            onMouseMove={(e) => hoverHandler(e)}
            // onClick={init}
            />
        </div>
    )
}

export default Canvas;
