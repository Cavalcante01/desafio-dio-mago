
class Heroi {

  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    if (this.tipo === 'mago') {
      console.log(`O ${this.tipo} ${this.nome} atacou usando magia.`);
    } else if (this.tipo === 'guerreiro') {
      console.log(`O ${this.tipo} ${this.nome} atacou usando sua espada.`);
    } else if (this.tipo === 'monge') {
      console.log(`O ${this.tipo} ${this.nome} usou artes marciais`);
    } else {
      console.log(` ninja : ${this.tipo} usou shuriken.`);
    }
  }
}

const mago = new Heroi('', 100, 'mago');
const guerreiro = new Heroi('', 100, 'guerreiro');
const monge = new Heroi('', 100, 'monge');
const ninja = new Heroi('', 100, 'ninja');

mago.atacar();


// guerreiro.atacar();
// monge.atacar();
// ninja.atacar();
