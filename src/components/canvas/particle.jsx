export class Particle {
        constructor(x, y) {
            this.x = x;
            this.y = y;
            this.size = 3;
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 8) + 1;
            this.distance = 20;
        }
        draw(canvasRef, radius) {
            const context = canvasRef.current.getContext('2d');
            context.fillStyle = 'rgba(255, 255, 255, 0.8)';
            context.strokeStyle = 'rgba(165, 42, 42, 1)';
            context.beginPath();

            if( this.distance < radius - 5) {
                this.size = 10;
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.stroke();
                context.closePath();
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            } else if( this.distance <= radius) {
                this.size = 7;
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.stroke();
                context.closePath();
                context.beginPath();
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            } else {
                this.size = 5;
                context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                context.stroke();
                context.closePath();
                context.beginPath();
                context.arc(this.x - 1, this.y - 1, this.size/3, 0, Math.PI * 2);
            }
            context.closePath();
            context.fill();
        }
        update(x, y, radius) {
            let dx = x - this.x;
            let dy = y - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy); 
            this.distance = distance;
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
                    let dy = this.y - this.baseY;
                    this.y -= dy/100;
                }
            }
        }
    }