import { Player } from "./player.js";
import { Enemy } from "./enemy.js";
import { STAGES } from "./stage.js";
import { SHIPS, ENEMIES } from "./data.js";

let player;
let enemies = [];

let cursors;
let bullets;
let enemyBullets;

const config = {
  type: Phaser.AUTO,
  width: 960,
  height: 540,
  backgroundColor: "#000000",

  physics: {
    default: "arcade",
    arcade: {
      debug: false
    }
  },

  scene: {
    preload,
    create,
    update
  }
};

new Phaser.Game(config);

function preload() {
  // プレイヤー
  let g = this.add.graphics();
  g.fillStyle(0x00ff00, 1);
  g.fillRect(0, 0, 30, 30);
  g.generateTexture("player", 30, 30);
  g.destroy();

  // 敵
  g = this.add.graphics();
  g.fillStyle(0xff0000, 1);
  g.fillRect(0, 0, 28, 28);
  g.generateTexture("enemy", 28, 28);
  g.destroy();

  // 弾
  g = this.add.graphics();
  g.fillStyle(0xffffff, 1);
  g.fillRect(0, 0, 6, 12);
  g.generateTexture("bullet", 6, 12);
  g.destroy();

  // 敵弾
  g = this.add.graphics();
  g.fillStyle(0xff8800, 1);
  g.fillRect(0, 0, 6, 12);
  g.generateTexture("ebullet", 6, 12);
  g.destroy();
}

function create() {
  cursors = this.input.keyboard.createCursorKeys();

  bullets = this.physics.add.group();
  enemyBullets = this.physics.add.group();

  player = new Player(this, 480, 450, SHIPS.fighter, bullets);

  loadStage(this, 1);
}

function update(time) {
  player.update(cursors, time);

  enemies.forEach(e => {
    e.update(player, enemyBullets, time);
  });
}

function loadStage(scene, stageNumber) {
  enemies = [];

  const stage = STAGES[stageNumber];

  stage.enemies.forEach(data => {
    const enemyData = ENEMIES[data.type];

    const enemy = new Enemy(
      scene,
      data.x,
      data.y,
      enemyData
    );

    enemies.push(enemy);
  });
}
