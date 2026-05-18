export class Enemy {
    constructor(x, y, type = "normal") {
        this.x = x;
        this.y = y;
        this.type = type;

        this.size = 20;
        this.hp = 100;

        // 種類別ステータス
        if (type === "tank") {
            this.hp = 300;
            this.speed = 0.5;
        } else if (type === "fast") {
            this.hp = 60;
            this.speed = 2.5;
        } else if (type === "fixed") {
            this.hp = 9999;
            this.speed = 0;
            this.isFixed = true;
        } else {
            this.speed = 1.2;
        }

        this.marked = false; // 救助対象マーク
        this.rescueProgress = 0;
        this.isBeingRescued = false;
    }

    update(player) {
        if (this.isFixed) return;

        const dx = player.x - this.x;
        const dy = player.y - this.y;
        const dist = Math.hypot(dx, dy);

        if (dist > 0) {
            this.x += (dx / dist) * this.speed;
            this.y += (dy / dist) * this.speed;
        }

        // 救助処理（近くにいると進行）
        if (this.marked && dist < 40) {
            this.isBeingRescued = true;
            this.rescueProgress += 1;
            if (this.rescueProgress > 120) {
                this.hp = 0; // 救助完了扱い
            }
        } else {
            this.isBeingRescued = false;
            this.rescueProgress = Math.max(0, this.rescueProgress - 2);
        }
    }

    draw(ctx) {
        ctx.fillStyle =
            this.type === "tank" ? "purple" :
            this.type === "fast" ? "orange" :
            this.type === "fixed" ? "gray" : "red";

        ctx.fillRect(this.x, this.y, this.size, this.size);

        // マーク表示
        if (this.marked) {
            ctx.strokeStyle = "cyan";
            ctx.strokeRect(this.x - 3, this.y - 3, this.size + 6, this.size + 6);
        }

        // 救助バー
        if (this.isBeingRescued) {
            ctx.fillStyle = "lime";
            ctx.fillRect(this.x, this.y - 6, (this.rescueProgress / 120) * this.size, 4);
        }
    }
}
