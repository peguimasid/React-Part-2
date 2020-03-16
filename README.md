# Primeiro projeto com ReactJS

## Aula 01 - Criando projeto do zero

Como vimos na [parte-1](https://github.com/peguimasid/React-Introduction) de ReactJS, nos configuramos inumeras coisas como ***Babel-config***, ***Webpack-config*** e sera que temos que repetir esse processo toda vez que formos iniciar um novo projeto? A resposta é nāo, o ***React*** tem uma ***CLI*** para facilitar esse processo para a gente:

Com o ***[yarn](https://classic.yarnpkg.com/pt-BR/docs/install/#mac-stable)*** instalado, vá ao terminal e rode o seguinte comando:

1. `yarn create react-app <nome do projeto>`

***EX:*** `yarn create react-app projeto05`

O processo talvez demore um pouco mas ao finalizar você vera uma pasta com o nome escolhido com todas as configurações base já prontas.

2. Depois de configurado vamos no `package.json` que ja esta criado e retiramos as configracoes de ***ESLint*** pois vamos configura-lo do zero, so retirar la a sessao `eslintConfig`.

3. Para rodar o servidor é bem simples, vamos no terminal e rodamos `yarn start` e ele iria abrir automaticament o `localhost:3000` com a logo do ***React*** rodando e funcionando, podendo ser alterado por nos em `src > App.js`.

4. Agora vamos tirar alguns arquivos feitos por ele que nao iremos usar na nossa aplicaçāo, para comecar podemos tirar os arquivos: `src > App.css`, `src > App.test.css`, `src > index.css`, `src > logo.svg`, `src > serviceWorker.js`, `src > setupTests.js` / `public > logo192.png`, `public > logo512.png`, `public > robots.txt`.
Se o seu nao tiver algum desses nao tem problema, delete oq você achar.

5. Depois que você fizer isso vai dar um erro, entao voce acessa `src > index.js` e remove toda essa parte:

```
import './index.css';

import * as serviceWorker from './serviceWorker';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
```
6. Depois em `src > App.js` removemos essa parte:

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

## Aula 02 - ESLint, Prettier, EditorConfig

Nessa aula vamos instalar os padronizadores de codigo para deixar nosso codigo mais facil de entender e padronizado, com isso ele acaba ficando mais bonito tambem o que facilita no processo de novas features e debug.

### EditorConfig

Primeiro instalamos a extensāo ***EditorConfig for VS Code*** e depois na aba onde temos os arquivos e pastas clicamos com o botao direito(ou dois dedos) e clicamos em `Generate .editorconfig` e ele vai criar um arquivo na raiz com esse nome, e a configuracao dele ficará assim:

```
root = true

[*]
end_of_line = lf
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Com isso o codigo ja estara padronizado para outros Devs que entrarem no time.

### ESLint

1. `yarn add eslint -D`
2. `yarn eslint --init`
3. Configs: `To check syntax, find problems, and enforce code style ` > `JavaScript modules (import/export)` > `React` > `N` > `Browser` > `Use a popular style guide ` > `Airbnb: https://github.com/airbnb/javascript` > `JavaScript` > `Y`
4. removemos o arquivo `package-lock.json` gerado
5. rodar `yarn`

## Prettier

1. `yarn add prettier eslint-config-prettier eslint-plugin-prettier babel-eslint@10.0.3 -D`
2. Vamos em `.eslint.js` e ele vai ficar assim:

```
module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parser: 'babel-eslint',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', 'js'] }
    ],
    'import/prefer-default-export': 'off'
  },
};
```
3. Agora na raiz do projeto criamos um arquivo chamado `.prettierrc`

`.prettierrc`:

```
{
  "singleQuote": true,
  "trailingComma": "es5"
}
```

Agora nosso codigo esta todo padronizado.


## Aula 03 - Roteamento no React

Vamos agora fazer a navegaçāo entre paginas com os botões na nossa aplicaçāo, se voce lembrar no inicio do primeiro modulo do ***React*** ele tem um conceito que se chama ***SPA(Single page Application)*** que ele nao recarrega as paginas completamente, ele so exibe ou esconde componentes. E para isso vamos comecar a configurar para podemos comecar a usar essa feature.

1. Rodamos `yarn add react-router-dom`
2. Em `src` criamos um arquivo `routes.js`
3. Dentro de `src` criamos uma pasta `pages` e dentro dela duas pastas `Main` e `Repository`,
e dentro dessas duas pastas criamos um arquivo `index.js` dentro de cada uma.

`pages > Main > index.js`:

```
import React from 'react';

// import { Container } from './styles';

export default function Main() {
  return <h1>Main</h1>;
}
```

`pages > Repository > index.js`:

```
import React from 'react';

// import { Container } from './styles';

export default function Repository() {
  return <h1>Repository</h1>;
}

```

`src > routes.js`:

```
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/repository" component={Repository} />
      </Switch>
    </BrowserRouter>
  );
}

```

`src > App.js`:

```
import React from 'react';

import Routes from './routes';

function App() {
  return <Routes />;
}

export default App;
```

Se formos agora no ***Browser*** e colocarmos `/repository` ou `/` vamos acessar as duas diferentes rotas.
