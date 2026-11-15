# 📱 Estúdio de Apps · Turmas Mutirão

Apps criados pelas turmas do **Colégio Mutirão de São Marcos** na disciplina
**Laboratório de Criação e Inovação**. Em cada projeto, um grupo de alunos é o
time de produto: decide o que o app faz, testa e aprova. Os três pilares da
disciplina são **Criatividade, Tecnologia e Pensamento Crítico**.

> 🌐 **Site dos projetos:** https://rsoldatellirosa.github.io/projetos-turmas-mutirao/

## Os projetos

| App | Turma | O que faz | Abrir |
|---|---|---|---|
| 🎮 **GameData** | 9º ano | Ranking de jogos: ver as melhores notas e abrir um jogo para ver nota e descrição | [abrir](https://rsoldatellirosa.github.io/projetos-turmas-mutirao/gamedata/) |
| 🧴 **Perfumaria** | 9º ano | Conhecer perfumes antes de comprar, com catálogo e busca | [abrir](https://rsoldatellirosa.github.io/projetos-turmas-mutirao/perfumaria/) |
| 🛒 **Compras para seu mercado** | 8º ano · Grupo TPAM | Comparar preços de produtos entre mercados | [abrir](https://rsoldatellirosa.github.io/projetos-turmas-mutirao/compras-no-seu-mercado/) |
| 🎬 **CineMax** | 8º ano · Filmes e Séries | Buscar filmes e séries por nome, com gênero, plataforma e nota do Rotten Tomatoes | [abrir](https://rsoldatellirosa.github.io/projetos-turmas-mutirao/cinemax/) |
| 🌧️ **Alerta de Alagamento** | 7º ano · Turma 72 | Previsão de chuva, leituras do pluviômetro da escola, alertas e plano de resposta. Instala no celular | [abrir](https://rsoldatellirosa.github.io/projetos-turmas-mutirao/alerta-alagamento/) |

## Como os apps funcionam

- Cada app é **um único arquivo `index.html`**, com tudo dentro (HTML, CSS e JavaScript).
- **Funciona sem internet**: abre direto no navegador, por duplo clique ou pen drive.
- **Instalável no celular (PWA)**: aberto pelo site, o app pode ir para a tela inicial e depois abre sem internet.
- **Nada de fora**: sem CDN, bibliotecas ou imagens por link. Dados ficam dentro do próprio arquivo.
- **Não guarda nada de quem usa**: sem cadastro, sem login, sem coletar dados pessoais.
- Código em **português**, pensado para os alunos lerem e entenderem o que a IA fez.

> **Exceção:** o 🌧️ **Alerta de Alagamento** usa dados ao vivo (previsão do tempo e planilha do pluviômetro), porque um alerta precisa disso. Sem internet, ele abre e mostra os últimos dados salvos. Detalhes em [`alerta-alagamento/LEIA-ME.md`](alerta-alagamento/LEIA-ME.md).

## Organização

```
projetos-turmas-mutirao/
├── index.html                 Página inicial com a lista de apps
├── gamedata/                  App do 9º ano
├── perfumaria/                App do 9º ano
├── compras-no-seu-mercado/    App do 8º ano (Grupo TPAM)
├── cinemax/                   App do 8º ano
└── alerta-alagamento/         App do 7º ano (PWA, dados ao vivo)
```

Cada pasta é um app pronto. A página inicial (`index.html`) junta todos em um só lugar.

Mudanças recentes: [CHANGELOG.md](CHANGELOG.md).

---

Protótipos escolares feitos em aula. Os apps não coletam dados de quem os usa.
