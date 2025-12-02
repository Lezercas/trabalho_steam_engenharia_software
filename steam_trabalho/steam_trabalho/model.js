export class Steam {
  #usuarios;
  #jogos;

  constructor() {
    this.#usuarios = [];
    this.#jogos = [];
  }

  get Usuario() {
    return this.#usuarios;
  }

  get Jogo() {
    return this.#jogos;
  }

  addUsuario(usuario) {
    this.#usuarios.push(usuario);
  }

  addJogo(jogo) {
    this.#jogos.push(jogo);
  }
}

export class Usuario {
  #nome;
  #login;
  #senha;
  #email;
  #nacionalidade;
  #sobre;

  constructor(nome, login, senha, email, nacionalidade, sobre) {
    this.#nome = nome;
    this.#login = login;
    this.#senha = senha;
    this.#email = email;
    this.#nacionalidade = nacionalidade;
    this.#sobre = sobre;
  }

  get nome() {
    return this.#nome;
  }

  get login() {
    return this.#login;
  }

  get senha() {
    return this.#senha;
  }

  get email() {
    return this.#email;
  }

  get nacionalidade() {
    return this.#nacionalidade;
  }

  get sobre_mim() {
    return this.#sobre;
  }
}

export class Jogo {
  #titulo;
  #dev;
  #descricao;
  #genero;
  #valor;
  #ano;

  constructor(titulo, dev, descricao, genero, valor, ano) {
    this.#titulo = titulo;
    this.#dev = dev;
    this.#descricao = descricao;
    this.#genero = genero;
    this.#valor = valor;
    this.#ano = ano;
  }

  get titulo() {
    return this.#titulo;
  }

  get desenvolvedor() {
    return this.#dev;
  }

  get descricao() {
    return this.#descricao;
  }

  get genero() {
    return this.#genero;
  }

  get preco() {
    return this.#valor;
  }

  get data_lancamento() {
    return this.#ano;
  }
}
