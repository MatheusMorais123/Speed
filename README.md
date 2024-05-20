# Gerador de Corridas

Este é um projeto de exemplo para criar uma aplicação que gera corridas para usuários seguindo uma série de regras predefinidas.

## Requisitos

- Node.js
- SQLite3

## Instalação

1. Clone o repositório:

## Executar as tabelas 
npx knex migrate:latest


2. Acesse as rotas da API utilizando um cliente HTTP, como Postman.
## Rotas da API

- `GET /speed`: Retorna todas as corridas.
- `POST /speed`: Cria uma nova corrida.
- `POST /cancell/:corrida_id`: Cancela uma corrida existente.

## Testando as Rotas

Uma coleção do Postman está incluída na raiz do projeto para facilitar o teste das rotas da API. Importe esta coleção para o seu cliente do Postman e você poderá testar as rotas facilmente.

- Acesse a coleção do Postman: `REST API  Speed.postman_collection.json`

Certifique-se de ter o Postman instalado para importar e usar a coleção.


## Contribuindo

Contribuições são bem-vindas! Abra uma issue para discutir as mudanças que você gostaria de fazer.

## Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

## Tecnologias Utilizadas

- Node.js
- SQLite3
- Knex (para construção de queries SQL)
