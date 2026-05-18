class Enemy {
    constructor(scene, x, y, data) {
        this.scene = scene;

        this.sprite = scene.add.rectangle(x, y, 25, 25, 0xff0000);
        scene.physics.add.existing(this.sprite);

        this.speed = data.speed;
        this.hp = data.hp;
    }

    update(player) {
        this.scene.physics.moveToObject(
            this.sprite,
            player.sprite,
            this.speed * 50
        );
    }
}
