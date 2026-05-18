export class Enemy {

    constructor(scene, x, y, data) {

        this.scene = scene;

        this.data = data;

        this.sprite = scene.add.rectangle(
            x,
            y,
            data.size,
            data.size,
            data.color
        );

        scene.physics.add.existing(this.sprite);

        this.speed = data.speed;
        this.hp = data.hp;

        this.fireRate = data.fireRate;

        this.lastShot = 0;
    }

    update(player, bullets, time) {

        this.sprite.y += this.speed;

        if (time > this.lastShot + this.fireRate) {

            this.lastShot = time;

            const bullet = this.scene.add.rectangle(
                this.sprite.x,
                this.sprite.y,
                6,
                14,
                0xff0000
            );

            this.scene.physics.add.existing(bullet);

            bullet.body.setVelocityY(300);

            bullets.add(bullet);
        }
    }
}
