# 🌧️ Alerta de Alagamento · 7º ano (Turma 72)

App do Projeto Alerta de Alagamento. Junta num lugar só tudo o que a turma produz:
previsão de chuva, leituras do pluviômetro, alertas enviados e plano de resposta.
Pode ser instalado no celular (PWA).

## De onde vêm os dados

| O que aparece | De onde vem |
|---|---|
| Previsão dos próximos 7 dias | Open-Meteo, ao vivo |
| Histórico de chuva (tabela do limite, dias mais chuvosos) | Open-Meteo, busca 1 vez por dia |
| Leituras do pluviômetro | Planilha pública, aba **Leituras** |
| Limite, mensagem, link do formulário, recado | Planilha pública, aba **Config** |
| Plano de resposta | Planilha pública, aba **Plano** |
| Alertas enviados | Planilha pública, aba **Alertas** (o alerta automático escreve aqui) |

Planilha pública: **Alerta de Alagamento - dados do app (público)**, no Drive do professor.
O professor muda o limite, a mensagem e o plano direto nela; o app atualiza sozinho, sem republicar.

## Privacidade

- A aba **Leituras** puxa do formulário só **data, choveu e mm**. Os nomes de quem leu não saem da planilha do formulário.
- O app não tem login e não guarda nada de quem usa. Ele só salva no próprio celular os últimos dados, para abrir sem internet.

## A regra do alerta

- **Alerta:** a chuva prevista **passa** do limite.
- **Fique de olho:** a chuva prevista chega a 60% do limite.
- **Tudo certo:** abaixo disso.

O app olha hoje e amanhã e mostra o pior dos dois, que é o mesmo que o alerta automático confere de manhã.

## Exceção às regras do Estúdio

Os outros apps do site funcionam sem internet e têm os dados dentro do arquivo.
Este é diferente de propósito: um alerta precisa de dados ao vivo. Sem internet, ele abre e mostra os últimos dados salvos.

## Arquivos

```
alerta-alagamento/
├── index.html             o app inteiro (DADOS / LÓGICA / TELAS)
├── manifest.webmanifest   nome, cores e ícones para instalar
├── sw.js                  guarda as telas para abrir sem internet
└── icone-*.png            ícones do app
```

Ao publicar uma versão nova, troque a data/hora do `CACHE` no `sw.js`. O service worker só apaga caches com o prefixo `alerta-alagamento-`, para não mexer nos outros apps do site.
