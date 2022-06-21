export class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 1;
        }
        draw(canvasRef) {
            const context = canvasRef.current.getContext('2d');
            context.fillStyle = 'white';
            context.beginPath();
            context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            context.closePath();
            context.fill();
        }
        update(x, y, radius) {
            let dx = x - this.x;
            let dy = y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy); 
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let maxDistance = radius;
            let force = (maxDistance - distance) / maxDistance;
            let directionX = forceDirectionX * force * this.density;
            let directionY = forceDirectionY * force * this.density;
 
            if( distance < radius ) {
                this.x -= directionX;
                this.y -= directionY; 
            } else {
                if ( this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx/100;
                }
                if ( this.y !== this.baseY) {
                    let dy = this.x - this.baseY;
                    this.y -= dy/100;
                }
                // this.x += this.baseX;
                // this.y += this.baseY;
            }
        }
    }