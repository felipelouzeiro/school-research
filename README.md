# Buscar escolar

Esse projeto é uma página de busca.

### Construção

#### _Ferramentas_

- React com Typescript;
- Styled Components;
- Axios
- Cypress

### _Sobre_

É possível pesquisar por artigos e marcar artigos como favoritos. A exibição dos resultados é feita de forma paginada no nível da API. Os dados da aplicação são provenientes da [ API CORE](https://core.ac.uk/docs/#!/all/search). O design foi inspirado de forma modesta no layout do Google Acadêmico.

#### _Aprendizados_

O projeto foi útil para treinar typescript com react, principalmente sobre paginação de requisições vinculadas as rotas do cliente.

### Para rodar a aplicação

#### _Tenha:_

    - Node instalado em sua máquina

#### _Passos:_

    1. Clone a aplicação.

    2. Entre no diretório do projeto e instale as dependências com o comando ex: `npm install` ou com o comando similar do seu gerenciador de pacotes.

    3. Altere o nome do arquivo `.env.example` para `.env.local` e insira a sua chave do banco no campo `REACT_APP_APIKEY=`

    4. Execute o script start para iniciar a aplicação: ex: `npm start` ou com o comando similar do seu gerenciador de pacotes.

### Testes _Cypres_

#### _Tenha:_

    - Certifique-se de que a aplicação está rodando em seu navegador.

#### Para testar a aplicação:

    1. Execute o script de test com `npm run test`, ou com o comando similar do seu gerenciador de pacotes.

Confira o deploy da aplicação [ aqui ](https://school-research.vercel.app/).

Feito com :heart:.
