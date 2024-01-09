
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
      ataque = 'usou um ataque desconhecido';
    }

      return `O ${this.tipo} ${this.nome} atacou usando ${ataque}`;
    
  }
}

const mago = new Heroi('alex', 38, 'mago');

console.log(mago.atacar());





