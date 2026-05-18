export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.size = 20;
        this.speed = 3;
    }

    update(input) {
        if (input.left) this.x -= this.speed;
        if (input.right) this.x += this.speed;
        if (input.up) this.y -= this.speed;
        if (input.down) this.y += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = "cyan";
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}
