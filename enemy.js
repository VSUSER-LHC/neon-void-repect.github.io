export class Enemy {
  constructor(scene, x, y, data) {
    this.scene = scene;
    this.hp = data.hp;
    this.fireRate = data.fireRate;
    this.lastShot = 0;

    this.sprite = scene.physics.add.rectangle(x, y, 28, 28, 0xff0000);
  }

  update(player, enemyBullets, time) {
    // ちょい追従
    if (player) {
      const dx = player.sprite.x - this.sprite.x;
      this.sprite.setVelocityX(dx * 0.01);
    }

    // 射撃
    if (time > this.lastShot) {
      this.shoot(enemyBullets);
      this.lastShot = time + this.fireRate;
    }
  }

  shoot(group) {
    const b = this.scene.physics.add.rectangle(
      this.sprite.x,
      this.sprite.y + 20,
      5,
      10,
      0xff8800
    );

    b.body.setVelocityY(200);
    group.add(b);
  }
}
