# JS Consultoria Imigratória

Landing page de apresentação da JS Consultoria Imigratória, criada e desenvolvida pela [Webluma](https://www.webluma.dev/).

Uma única página, com identidade em castanho, creme e dourado, tipografia clássica, fotografia do Porto e layout adaptado a desktop, tablet e celular.

## Funcionalidades

- Hero fotográfico e apresentação institucional.
- Catálogo expansível de imigração e residência, documentação e cidadania, vida fiscal e atividade.
- Avaliações ilustrativas identificadas como fictícias.
- SAC com perguntas e respostas expansíveis.
- Contato com ação principal, e-mail secundário e prévia demonstrativa de atendimento.
- Menu mobile com suporte a teclado, fechamento por Escape e navegação por âncoras.
- Rodapé com Instagram genérico e crédito da Webluma.

## Executar localmente

Requer Node.js 22 ou superior. Não há dependências externas para instalar.

```sh
npm run dev
```

Por padrão, o servidor responde em `http://localhost:3000`. Para usar a porta da prévia:

```sh
PORT=3001 npm run dev
```

Abra `http://localhost:3001`. O servidor escuta somente em `127.0.0.1`.

## Estrutura

```text
dist/
  index.html       Conteúdo da landing page
  style.css        Identidade visual e responsividade
  site.js          Menu mobile e prévia de atendimento
  porto.jpg        Fotografia do hero
  fonts/           Fontes locais e respectivas licenças
server.mjs         Servidor HTTP de desenvolvimento
.openai/hosting.json  Configuração de diretório estático
```

Os arquivos de `dist/` são os próprios arquivos-fonte editáveis. Não há etapa de build. A configuração de diretório estático não publica o site automaticamente.

## Estado da apresentação

Esta versão é uma demonstração para apresentação à cliente, marcada como `noindex, nofollow`.

- WhatsApp: `+000 000000000` (ilustrativo).
- E-mail: `contato@example.com` (ilustrativo).
- O botão de atendimento abre uma janela explicativa, sem enviar mensagens.
- O Instagram aponta para `https://www.instagram.com/`, sem perfil específico.
- Os dois depoimentos são fictícios e estão explicitamente identificados.
- O monograma JS é provisório. Logo original, retrato, nome e qualificações confirmadas da profissional, contatos reais e depoimentos autorizados continuam pendentes.

Antes de publicar para clientes finais, confirmar o conteúdo com a responsável, substituir os dados ilustrativos e conectar o canal real de atendimento.

## Créditos de recursos

- Fotografia: **Ponte D. Luís, Porto**, Joseolgon, domínio público. [Arquivo original no Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Ponte_D._Luis_-_Porto.JPG).
- Fontes: **Libre Caslon Display** e **DM Sans**, servidas localmente. Licenças OFL incluídas em `dist/fonts/`.

## Verificação

A revisão visual foi conferida no navegador em larguras de 320, 390, 768 e 1280 px. Foram verificados menu mobile, SAC, catálogo expansível, navegação até o contato e fechamento da janela demonstrativa por botão e Escape, com retorno de foco. A validação usa viewports de navegador, não aparelhos físicos.

Verificação de sintaxe:

```sh
node --check server.mjs
node --check dist/site.js
```

## Desenvolvimento

[Criado e desenvolvido por Webluma](https://www.webluma.dev/).
