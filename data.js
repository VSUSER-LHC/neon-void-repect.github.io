export const SHIPS = {

    fighter: {

        hp: 100,

        speed: 300,

        fireRate: 250,

        color: 0x00aaff
    },

    medic: {

        hp: 80,

        speed: 340,

        fireRate: 400,

        rescueSpeed: 2.0,

        color: 0x00ff88
    }
};

export const ENEMIES = {

    basic: {

        hp: 30,

        speed: 1,

        fireRate: 1200,

        size: 35,

        color: 0xff4444
    },

    fast: {

        hp: 20,

        speed: 3,

        fireRate: 1600,

        size: 25,

        color: 0xffff44
    },

    turret: {

        hp: 100,

        speed: 0,

        fireRate: 300,

        size: 50,

        color: 0xff00ff
    }
};
