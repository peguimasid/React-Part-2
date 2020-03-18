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

## Aula 04 - Styled Components

Vamos adicionar um biblioteca que trazer algumas vantagens na estilizaçāo dos nossos componentes.

### Configurando:

1. Rodar `yarn add styled-components`
2. Instalar a extensāo ***vscode-styled-components***
3. Dentro de `src > pages > Main` criamos um arquivo chamado `styles.js`

`styles.js`:

```
import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 24px;
  color: #7159c1;
  font-family: Arial, Helvetica, sans-serif;
`;

```
4. Agora no `index.js` da pasta `Main`:

`import { Title } from './styles';`

e onde era `<h1>` substituimos por `<Title>`:

```
export default function Main() {
  return <Title>Main</Title>;
}
```

e agora podemos ver nosso `<h1>` com a cor roxa.

Podemos passar assim tambem:

`color: ${props => (props.error ? 'red' : '#7159c1')};`

O que significa que se la na ***Tag*** `<Title>` tiver uma propriedade chamada ***error***(`<Title error>`) ele vai mudar a cor pra vermelho caso contrario ficara roxo.

## Aula 05 - Estilos globais

Estilos compartilhado entre todos os componentes da aplicacao, como por exemplo o ***Body***, ***font-family*** e etc.

### Configurando:

1. Dentro de `src` criamos uma pasta chamada `styles` e dentro dela um arquivo `global.js`

***`global.js`***:

```
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #7159c1;
    -webkit-font-smoothing: antialiased !important;
  }
`;

```

2. Depois vamos em `src > App.js` e adicionamos la:

`import GlobalStyle from './styles/global';`

E a nossa `function app()` que estava assim:

```
function App() {
  return <Routes />;
}
```

vai ficar assim:

```
function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}
```

Agora se salvarmos e iniciarmos o servidor veremos nossos estilos globais aplicados em toda a aplicaçāo.

Agora sabemos como adicionar estilos locais e globais à nossa aplicaçāo!

## Aula 06 - Estilizando página Main

Vamos estilizar a pagina Main, mas primeiro temos que entender o que vamos fazer. Nós iremos fazer uma ***API REST*** com a API do ***GitHub*** que vai listar Repositórios do ***GitHub*** e vamos salvar eles na nossa aplicaçāo. Formulario de adicionar repositorios e listar repositórios.

### Configurando:

1. Rodar `yarn add react-icons`
2. ***`src > pages > Main > index.js`***:

```
import React from 'react';

import { FaGithubAlt, FaPlus } from 'react-icons/fa';

import { Container, Form, SubmitButton } from './styles';

export default function Main() {
  return (
    <Container>
      <h1>
        <FaGithubAlt />
        Repositórios
      </h1>

      <Form onSubmit={() => {}}>
        <input type="text" placeholder="Adicionar Repositório" />

        <SubmitButton disabled>
          <FaPlus color="#FFF" size={14} />
        </SubmitButton>
      </Form>
    </Container>
  );
}

```

3. ***`src > pages > Main > styles.js`***:

```
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin: 0 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
  background: #202020;
  border: 0;
  padding: 0 7px;
  margin-left: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  opacity: 0.8;
  transition: 0.15s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }
`;
```

E assim nossa aplicaçao estara estilizada utilizando os conceitos aprendidos nas aulas


## Aula 07 - Adicionando repositórios

O que vamos fazer nessa aula é, quando usuario adicionar um repositorio no input ***EX: Facebook/react*** nossa aplicacao vai na API do ***GitHub***, busca as informações desse repositório e adiciona no estado(***`state`***) da nossa aplicacao, irei deixar o codigo todo abaixo e os numeros pra ver quais passos segui.

1. Rodar `yarn add axios`(gerenciador de API'S)
2. Dentro de `src` criamos uma pasta `services` e dentro dela um arquivo `api.js`.
3. ***`api.js`***:

```
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;

```
4. Em ***`src > pages > Main > index.js`***:

```
import React, { Component } from 'react';
import { FaGithub, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api'; // 4

import { Container, Form, SubmitButton } from './styles';

export default class Main extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    newRepo: '',
    repositories: [], // 5
    loading: false, // 6
  }; // 1

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value });
  }; // 3

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true }); // 6.1

    const { newRepo, repositories } = this.state;

    const reponse = await api.get(`/repos/${newRepo}`); // 4.1

    const data = {
      name: reponse.data.full_name, // 4.2
    };

    this.setState({
      repositories: [...repositories, data], // 5.1
      newRepo: '',
      loading: false, // 6.2
    });
  };

  render() {
    const { newRepo, loading } = this.state; // 2.1

    return (
      <Container>
        <h1>
          <FaGithub />
          Repositórios
        </h1>

        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Adicionar Repositório"
            value={newRepo} // 2
            onChange={this.handleInputChange} // 3.1
          />

          <SubmitButton
            loading={loading} // 6.3 (6.4 `styles.js`)
          >
            {loading ? (
              <FaSpinner color="#fff" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </SubmitButton>
        </Form>
      </Container>
    );
  }
}
```

Config ***`src > pages > Main > styles.js`***:

```
import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    margin: 0 10px;
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-top-left-radius: 12px;
    border-bottom-left-radius: 12px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading /* 6.5 */,
}))`
  background: #202020;
  border: 1px solid #404040;
  padding: 0 7px;
  margin-left: none;
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;
  opacity: 0.8;
  transition: 0.1s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    opacity: 0.9;
  }

  /* 6.4 */
  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;
```

## Aula 08 - Listando repositórios

Vamos listar todo os repositórios que temos no nosso ***state***.

### Configurando

Em ***`src > pages > Main > index.js`***:

`const { newRepo, ***repositories***, loading } = this.state;`

```
<List>
   {repositories.map(repository => (
     <li key={repository.name}>
       <span>{repository.name}</span>
       <a href="#">Detalhes</a>
     </li>
   ))}
</List>
```

Se fizermos comente isso nao ira funcionar, para isso temos que importar ele de `styles.js`:

`import { Container, Form, SubmitButton, ***List*** } from './styles';`

E la em `styles.js` adicionamos um estilo como por exmplo:

```
export const List = styled.ul`
  list-style: none;
  max-width: 100%;
  background: #fff;
  border-radius: 4px;
  margin-top: 30px;

  li {
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    padding: 12px;
    margin: 15px auto;
  }

  span {
    font-weight: bold;
  }

  a {
    text-decoration: none;
    color: rgb(79, 96, 199);
    opacity: 0.8;
  }
`;
```
Fazendo isso, ao adicionar um repositorio ele sera listado embaixo do input, mas o botao detalhes ainda nao estará funcionando.


## Aula 09 - Utlizando LocalStorage

O que vamos fazer agora é utlizar o banco de dados local do navegador.

### Configurando

La dentro do nosso `class components` em `src > pages > Main > index.js` embaixo do `state` colocamos dois novos metodos, `componentDidMount()` e `componentDidUpdate()`

***`index.js`***:

```
// careegar os dados do LocalStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do LocalStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }
```

com isso os dados agora nao sao mais apagados toda vez que recarregamos a pagina ou fechamos a aplicaçāo.

## Aula 10 - Navegaçāo de rotas

O que vamos fazer agora é, quando usuario clicar nos 3 pontinhos (detalhes) ele sera direcionado pra outra rota (`/repository`) que criamos no inicio do projeto.

### Configurando

Nos nao podemos simplesmente passar dentro de um componente uma tag `<a href="">` pois ela nao funciona dentro do componente, e para fazer esse papel nos temos o componente `<Link to=""/>` do `react-router-dom`, para usa-lo vamos em ***`src > pages > Main > index.js`***:

```
...
import { Link } from 'react-router-dom';
...
```

E dentro do nosso componente `<List />` onde esta o `<a>` colocamos assim:

```
<List>
  {repositories.map(repository => (
        <li key={repository.name}>
         <span>{repository.name}</span>
   *     <Link to={`repository/${encodeURIComponent(repository.name)}`}>
         <FaEllipsisH color="#303030" size={20} />
      </Link>
   </li>
  ))}
</List>
```

passamos a tag `<Link />` assim:

```
<Link to={`repository/${encodeURIComponent(repository.name)}`}>
```
o `to` referencia para onde ela vai, e o `encodeURIComponent` faz um encode na `/` e transforma ela para `%2F` para nao chamar uma nova rota com a `/`

Depois disso vamos em ***`routes.js`*** e nossa rota que estava assim:

```
<Route path="/repository" component={Repository} />
```

vai ficar assim:

```
<Route path="/repository/:repository" component={Repository} />
```

pois agora ela recebe um parametro sobre qual repositorio carregar.

Depois vamos em ***`src > pages > Repository > index.js`*** e colocamos assim nossa `function Repository()`:

```
export default function Repository({ match }) {
  return <h1>Repository: {decodeURIComponent(match.params.repository)}</h1>;
}
```
E agora nossa rota `/repository` esta recebendo os repositorios que a gente clica como parametro.


