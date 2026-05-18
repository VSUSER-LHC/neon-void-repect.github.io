export class Enemy {
  constructor(scene, x, y, data) {
    this.scene = scene;
    this.hp = data.hp;
    this.fireRate = data.fireRate;
    this.lastShot = 0;

    this.sprite = scene.physics.add.sprite(x, y, null);
    this.sprite.setDisplaySize(28, 28);
    this.sprite.setTint(0xff0000);
  }

  update(player, enemyBullets, time) {
    if (player) {
      const dx = player.sprite.x - this.sprite.x;
      this.sprite.setVelocityX(dx * 0.01);
    }

    if (time > this.lastShot) {
      this.shoot(enemyBullets);
      this.lastShot = time + this.fireRate;
    }
  }

  shoot(group) {
    const b = this.scene.physics.add.sprite(
      this.sprite.x,
      this.sprite.y + 20,
      null
    );

    b.setDisplaySize(5, 10);
    b.setTint(0xff8800);
    b.body.setVelocityY(200);

    group.add(b);
  }
}
