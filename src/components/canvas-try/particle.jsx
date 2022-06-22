export class Particle {
        constructor(canvas) {
            this.x = Math.random() * canvas.width;
            this.y = 0;
            this.speed = 0;
            this.velocity = Math.random() * 0.5;
            this.size = Math.random() * 0.5 + 1; 
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
        }
        draw(ctx) {
            ctx.beginPath();
            ctx.fillStyle = 'white';
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
            ctx.fill();
        }
        update(canvas, mapped) {
            this.position1 = Math.floor(this.y);
            this.position2 = Math.floor(this.x);
            this.speed = mapped[this.position1][this.position2][0];
            let movement = (2.5 - this.speed) + this.velocity;

            this.y += movement;
            if (this.y >= canvas.height) {
                this.y = 0;
                this.x = Math.random() * canvas.width; 
            }
        }
    }