class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'usou magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'usou espada';
    } else if (this.tipo === 'monge') {
      ataque = 'usou artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'usou shuriken';
    } else {
     
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    
    return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
  }
}

const mago = new Heroi('', 100, 'mago');

// const guerreiro = new Heroi('', 100, 'guerreiro');
// const monge = new Heroi('', 100, 'monge');
// const ninja = new Heroi('', 100, 'ninja');



console.log(mago.atacar());


// console.log(guerreiro.atacar());
// console.log(monge.atacar());
// console.log(ninja.atacar());





