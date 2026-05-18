class Player {
    constructor(scene, x, y, data) {
        this.scene = scene;

        this.sprite = scene.add.rectangle(x, y, 30, 30, 0x00ffff);
        scene.physics.add.existing(this.sprite);

        this.speed = data.speed;
        this.hp = data.hp;
    }

    update(cursors) {
        const body = this.sprite;

        if (cursors.left.isDown) body.x -= this.speed;
        if (cursors.right.isDown) body.x += this.speed;
        if (cursors.up.isDown) body.y -= this.speed;
        if (cursors.down.isDown) body.y += this.speed;
    }
}
