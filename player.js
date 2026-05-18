export class Player {
  constructor(scene, x, y, shipData, bulletsGroup) {
    this.scene = scene;
    this.speed = shipData.speed;

    this.sprite = scene.physics.add.sprite(x, y, "player");
    this.sprite.setCollideWorldBounds(true);

    this.bullets = bulletsGroup;
    this.lastShot = 0;
    this.fireRate = shipData.fireRate;
  }

  update(cursors, time) {
    const spd = this.speed;

    this.sprite.setVelocity(0);

    if (cursors.left.isDown) this.sprite.setVelocityX(-spd);
    if (cursors.right.isDown) this.sprite.setVelocityX(spd);
    if (cursors.up.isDown) this.sprite.setVelocityY(-spd);
    if (cursors.down.isDown) this.sprite.setVelocityY(spd);

    if (cursors.space.isDown && time > this.lastShot) {
      this.shoot();
      this.lastShot = time + this.fireRate;
    }
  }

  shoot() {
    const b = this.scene.physics.add.sprite(
      this.sprite.x,
      this.sprite.y - 20,
      "bullet"
    );

    b.setVelocityY(-400);

    this.bullets.add(b);
  }
}
