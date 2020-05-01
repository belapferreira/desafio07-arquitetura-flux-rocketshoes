<h1 align="center">
<img src="https://user-images.githubusercontent.com/59603768/75156287-8fa02b80-56f0-11ea-84a3-a6bacc2fcdd1.png">
</h1>

<h2 align="center">
  <p>Desafio 7: Arquitetura Flux - Rocketshoes</p>
  <p align="center">
    <img src="mobile/src/assets/Rocketshoes.GIF" width="30%" height="30%" max-width:100% >
    <img src="frontend/src/assets/images/rocketshoes.PNG" width="70%" height="70%" max-width:100% >
  </p>
</h2>

<h3 align="center">
  O projeto desenvolvido no módulo foi um e-commerce criado na web e o desafio proposto foi a criação da interface mobile do mesmo.
</h3>

  Funcionalidades:

  - API rest fictícia criada utilizando json server;
  - Utilização de Redux Saga para coordenação de actions e side effects;
  - Header configurado para navegação entre as telas utilizando a logomarca da "Rocketshoes" e o ícone da cestinha de compras;
  - Inclusão de produtos no carrinho com verificação de estoque e alerta se quantidade não estiver disponível;
  - Adição e subtração de itens já inclusos no carrinho;
  - Exclusão do produto do carrinho;
  - Cálculo de subtotais e total de acordo com as quantidades e preços dos produtos que estão no carrinho.

<blockquote align="center">“Acredite em você a cada passo”</blockquote>

### :heavy_check_mark: Configurações necessárias

-  [Git](https://git-scm.com)
-  [Node](https://nodejs.org/)
-  [Yarn](https://yarnpkg.com/)
-  Ambiente para desenvolvimento mobile configurado conforme sistema operacional utilizado

### :arrow_down_small: Clonando o repositório
Pelo terminal, acesse o diretório em que deseja ter o repositório clonado e execute o comando a seguir.
```bash
# clonando o repositório
git clone https://github.com/belapferreira/desafio07-arquitetura-flux-rocketshoes
```
### :computer: Iniciando o frontend
Pelo terminal, acesse o diretório fronted do repositório clonado e execute os seguintes comandos separadamente.
```bash
# instalando as dependências
yarn install

# iniciando a API (os últimos 4 números, no exemplo abaixo '3333', é a porta utilizada para o servidor da API fictícia)
npx json-server server.json -p 3333

# iniciando a aplicação
yarn start
```
### :iphone: Iniciando o mobile
Inicialize o emulador ou conecte o dispositivo físico e verifique a disponibilidade em uma janela do terminal.
```bash
# verificando dispositivos disponíveis
adb devices
```
Pelo terminal, acesse o diretório mobile do repositório clonado e execute os comandos abaixo separadamente.
```bash
# instalando as dependências
yarn install

# iniciando a API (os últimos 4 números, no exemplo abaixo '3333', é a porta utilizada para o servidor da API fictícia)
npx json-server server.json -p 3333

# redirecionando porta (em outra janela do terminal, necessário quando estiver emulando pelo Android Studio)
adb reverse tcp:3333 tcp:3333
```
Abra uma nova janela do terminal, acesse o diretório mobile do repositório clonado e faça a instalação e inicialização da aplicação seguindo os próximos comandos. A aplicação foi desenvolvida utilizando recursos direcionados para Android e pode necessitar de ajustes para dispositivos iOS.
```bash
# instalando a aplicação no dispositivo
react-native run-android

# iniciando a aplicação
react-native start

# carregando a aplicação
digite r no terminal || cmd + r e reload || ctrl + m e reload
```

### :wrench: Tecnologias | Ferramentas | Recursos

-  [ReactJS](https://pt-br.reactjs.org/)
-  [React App](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
-  [ReactDOM](https://pt-br.reactjs.org/docs/react-dom.html)
-  [React Router DOM](https://www.npmjs.com/package/react-router-dom)
-  [React](https://pt-br.reactjs.org/)
-  [React Native](https://reactnative.dev/)
-  [React Toastify](https://github.com/fkhadra/react-toastify)
-  [ESlint](https://eslint.org/)
-  [Prettier](https://prettier.io/)
-  [Babel ESlint](https://github.com/babel/babel-eslint)
-  [Styled Components](https://styled-components.com/)
-  [Polished](https://polished.js.org/)
-  [Json Server](https://github.com/typicode/json-server)
-  [Axios](https://github.com/axios/axios)
-  [React Redux](https://react-redux.js.org/)
-  [Redux](https://redux.js.org/)
-  [Redux Saga](https://redux-saga.js.org/)
-  [Reactotron](https://infinite.red/reactotron)
-  [Reactotron React Native](https://github.com/infinitered/reactotron/blob/master/docs/quick-start-react-native.md)
-  [Reactotron Redux](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux.md)
-  [Reactotron Redux Saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
-  [Reactotron Redux Saga](https://github.com/infinitered/reactotron/blob/master/docs/plugin-redux-saga.md)
-  [Immer](https://github.com/immerjs/immer)
-  [History](https://github.com/ReactTraining/history/tree/3f69f9e07b0a739419704cffc3b3563133281548)

### :memo: License
Esse projeto está sob MIT license. Veja [LICENSE](https://github.com/belapferreira/desafio07-arquitetura-flux-rocketshoes/blob/master/LICENSE) para mais informações.

---

Feito por Bela Ferreira :blue_heart: Contato: https://www.linkedin.com/in/belapferreira :blush:
