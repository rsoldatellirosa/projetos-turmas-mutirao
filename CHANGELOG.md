# Mudanças recentes

Registro das últimas mudanças no site dos projetos. O endereço de cada app é fixo; republicar um app no mesmo endereço atualiza o que o QR Code dos alunos mostra, sem precisar gerar QR novo.

## 2026-11-27

- **GameData (gamedata/):** publicada a v0.3 com tela de introdução, oito jogos novos, busca e filtros. [Commit da v0.3](https://github.com/rsoldatellirosa/projetos-turmas-mutirao/commit/299cbb46bc86052fb8b105d656c1d8f2cd0f6d8f)

## 2026-11-18

- **GameData (`gamedata/`):** publicada a v0.2, a pedido do grupo, com animações, paleta escura e espaços reservados para fotos. Como as imagens ainda não foram incluídas, os espaços mostram “foto em breve”. O kit PWA foi executado novamente junto com a publicação.

## 2026-11-15

- **PWA:** GameData, Perfumaria, Compras para seu mercado e CineMax agora podem ser instalados no celular (Android pelo Chrome, iPhone pelo Safari) e abrem sem internet depois da primeira visita. Cada app ganhou `manifest.webmanifest`, `sw.js` e ícones na própria pasta; o `index.html` continua abrindo por duplo clique.
- **Alerta de Alagamento (`alerta-alagamento/`):** publicado o app do 7º ano (Turma 72), já instalável, no mesmo padrão do kit (manifesto, `sw.js` com prefixo próprio de cache e ícones na pasta). Mostra a previsão, as leituras do pluviômetro, os alertas e o plano de resposta. Os dados vêm ao vivo do Open-Meteo e de uma planilha pública que não tem o nome dos alunos.
- **README e página inicial:** Alerta de Alagamento entrou na lista, com a exceção da regra "funciona sem internet" explicada.

## 2026-11-12

- **CineMax (`cinemax/`):** publicada a versão v0.2 — 24 títulos com gênero, plataforma marcada como "(a definir)" onde falta, busca por nome, filtro por gênero e uma tela de carregamento. Antes estava no ar uma versão sem essa tela.
- **README:** CineMax entrou na lista de apps.
- **README:** Perfumaria entrou na lista de apps, e a árvore de pastas passou a mostrar os quatro apps da lista.

## 2026-11-11

- **Compras para seu mercado (`compras-no-seu-mercado/`):** publicada a versão v0.2 — mais produtos e preços de exemplo, cobrindo as seis partes do mercado em três mercados, e a tela "Qual é a sua cidade?" mais clara, com aviso de que o app não guarda nada de quem usa.

## Preparação para PWA

- Um só caminho para as duas turmas: um kit converte cada app na hora de publicar no site (manifesto, service worker e ícones). Testado em cópias dos apps: cumpriu os requisitos para instalar e abriu sem internet. Aplicado em 15/11. A cada nova versão publicada, o kit roda de novo para o app continuar instalável.
- O comando `/pwa` dos grupos do 8º ano foi desativado, para nenhum app ser convertido duas vezes. As pastas dos grupos continuam só com o `index.html`.
- Guia `COMO-PUBLICAR.md` com o passo a passo de publicação e o mapa grupo → endereço.

## Conteúdo em revisão

- **Fertility (`fertility/`):** instalável no celular desde 15/11. Por decisão do professor, segue publicado fora da lista da página inicial. O conteúdo de saúde continua marcado como “a conferir” e aguarda revisão em fonte oficial.
