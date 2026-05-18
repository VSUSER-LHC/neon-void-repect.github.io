let player;
let enemies = [];
let cursors;

const config = {
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    backgroundColor: "#000",

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

function preload() {}

function create() {
    cursors = this.input.keyboard.createCursorKeys();

    player = new Player(this, 480, 400, SHIPS.fighter);

    loadStage(this, 1);
}

function update() {
    player.update(cursors);

    enemies.forEach(e => {
        e.update(player);
    });
}

function loadStage(scene, id) {
    enemies = [];

    const stage = STAGES[id];

    stage.enemies.forEach(d => {
        const enemyData = ENEMIES[d.type];

        const enemy = new Enemy(
            scene,
            d.x,
            d.y,
            enemyData
        );

        enemies.push(enemy);
    });
}
