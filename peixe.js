var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,

    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

var peixinho;

function preload() {
    this.load.image ('mar', 'assents/bg_azul-escuro.png');
    this.load.image ('logo', 'assents/logo-inteli_branco.png');
    this.load.image ('peixe', 'assents/peixes/tartaruga.png');
    this.load.image ('concha', 'assents/peixes/concha.png');
    this.load.image ('crustaceo', 'assents/peixes/crustaceo.png');
    this.load.image ('amarelo', 'assents/peixes/peixe_amarelo.png');
    this.load.image ('serio', 'assents/peixes/peixe_serio.png');
    this.load.image ('azul', 'assents/peixes/peixinho_azul.png');
}

function create () {
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(750,100, 'concha').setOrigin(0.5,0.5);
    this.add.image(250,400, 'crustaceo').setOrigin(0.5,0.5);
    this.add.image(100, 150, 'amarelo').setOrigin(0.5,0.5);
    this.add.image(650,500, 'serio').setOrigin(0.5,0.5);
    this.add.image(480,200, 'azul').setOrigin(0.5,0.5);


    // Guardar peixinho em uma variável
    peixinho = this.add.image(400, 300, 'peixe');

    // Transformando em variável
    peixinho.setFlip(true, false);
}

function update() {            
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
                          }

