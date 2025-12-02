import { Steam, Usuario, Jogo } from "./model.js";

const steam = new Steam();

const jogador = new Usuario(
  "Eliézer",
  "eliezer_western",
  "arthur1899",
  "eliezer.rdr2@gmail.com",
  "Brasil",
  "Explorador das vastas terras do Velho Oeste digital."
);

const redDead = new Jogo(
  "Red Dead Redemption 2",
  "Rockstar Games",
  "Um épico de ação e aventura ambientado no fim do Velho Oeste americano, acompanhando Arthur Morgan e a gangue Van der Linde em sua luta por sobrevivência.",
  "Ação e Aventura",
  "R$ 299,90",
  2018
);

steam.addUsuario(jogador);
steam.addJogo(redDead);

console.log("\n=== CATÁLOGO DE JOGOS ===");
steam.Jogo.forEach((game, index) => {
  console.log(`\n[${index + 1}] ${game.titulo}`);
  console.log(`Desenvolvido por: ${game.desenvolvedor}`);
  console.log(`Gênero: ${game.genero}`);
  console.log(`Descrição: ${game.descricao}`);
  console.log(`Preço: ${game.preco}`);
  console.log(`Ano de lançamento: ${game.data_lancamento}`);
});

console.log("\n=== PERFIS DE USUÁRIOS ===");
for (const user of steam.Usuario) {
  console.log(`\nNome: ${user.nome}`);
  console.log(`Login: ${user.login}`);
  console.log(`Email: ${user.email}`);
  console.log(`Localização: ${user.nacionalidade}`);
  console.log(`Sobre: ${user.sobre_mim}`);
}
