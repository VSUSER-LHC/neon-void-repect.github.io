export class Enemy {
  constructor(scene, x, y, data) {
    this.scene = scene;
    this.hp = data.hp;
    this.fireRate = data.fireRate;
    this.lastShot = 0;

    this.sprite = scene.physics.add.sprite(x, y, "enemy");
  }

  update(player, enemyBullets, time) {
    // プレイヤー追尾（簡易）
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
    const b = this.scene.physics.add.sprite(
      this.sprite.x,
      this.sprite.y + 20,
      "ebullet"
    );

    b.setVelocityY(200);

    group.add(b);
  }
}
