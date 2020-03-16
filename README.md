# Primeiro projeto com ReactJS

## Aula 01 - Criando projeto do zero

Como vimos na [parte-1](https://github.com/peguimasid/React-Introduction) de ReactJS, nos configuramos inumeras coisas como ***Babel-config***, ***Webpack-config*** e sera que temos que repetir esse processo toda vez que formos iniciar um novo projeto? A resposta é nāo, o ***React*** tem uma ***CLI*** para facilitar esse processo para a gente:

Com o ***[yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable)*** instalado, vá ao terminal e rode o seguinte comando:

`yarn create react-app <nome do projeto>`

***EX:*** `yarn create react-app projeto05`

O processo talvez demore um pouco mas ao finalizar você vera uma pasta com o nome escolhido com todas as configurações base já prontas.

Depois de configurado vamos no `package.json` que ja esta criado e retiramos as configracoes de ***ESLint*** pois vamos configura-lo do zero, so retirar la a sessao `eslintConfig`.

Para rodar o servidor é bem simples, vamos no terminal e rodamos `yarn start` e ele iria abrir automaticament o `localhost:3000` com a logo do ***React*** rodando e funcionando, podendo ser alterado por nos em `src > App.js`.

Agora vamos tirar alguns arquivos feitos por ele que nao iremos usar na nossa aplicaçāo, para comecar podemos tirar os arquivos: `src > App.css`, `src > App.test.css`, `src > index.css`, `src > logo.svg`, `src > serviceWorker.js`, `src > setupTests.js` / `logo192.png`, `logo512.png`, `robots.txt`.
Se o seu nao tiver algum desses nao tem problema, delete oq você achar.

Depois que você fizer isso vai dar um erro, entao voce acessa `src > index.js` e remove toda essa parte:

```
import './index.css';

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
Depois em `src > App.js` removemos essa parte: 

```
import logo from './logo.svg';
import './App.css';

<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
```

e adicionamos no lugar do `<header>` um `<h1>Hello World</h1>` e se deu tudo certo ele sera exibido.