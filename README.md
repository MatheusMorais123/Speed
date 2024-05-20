# Gerador de Corridas

Este é um projeto de exemplo para criar uma aplicação que gera corridas para usuários seguindo uma série de regras predefinidas.

## Requisitos

- Node.js
- SQLite3

## Instalação

1. Clone o repositório:
https://github.com/MatheusMorais123/Speed

## Executando 

docker build -t tg/dockernode .

docker build cria uma imagem a partir do Dockerfile.

-t é o nome/tag da imagem.

tg/dockernode nome que escolhi para imagem

Execute o comando abaixo para criar o container:

docker run -p 3333:3333 -d tg/dockernode




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

## Decisões Técnicas e Arquiteturais

Este projeto foi desenvolvido utilizando Node.js e SQLite, juntamente com o framework Express para criar uma API RESTful. Abaixo estão algumas das decisões técnicas e arquiteturais tomadas durante o desenvolvimento:

- **Node.js**: Escolhemos Node.js devido à sua eficiência e escalabilidade para lidar com operações de entrada/saída não bloqueantes, como o acesso ao banco de dados e operações de rede, o que é adequado para uma aplicação de backend como essa.

- **SQLite**: Optamos por usar o SQLite como nosso banco de dados, pois é uma solução leve, fácil de configurar e não requer um servidor separado para ser executado. Isso torna mais simples a configuração e a implantação da aplicação, além de ser adequado para projetos menores ou em fase inicial.

- **Express.js**: Utilizamos o framework Express para lidar com as rotas da API e a lógica de middleware. O Express fornece uma estrutura simples e flexível para construir aplicativos web e APIs, permitindo o roteamento de solicitações HTTP, o processamento de middleware e a definição de manipuladores de rota de forma clara e concisa.

- **Knex.js**: Utilizamos o Knex.js como um construtor de consultas SQL para interagir com o banco de dados SQLite. O Knex fornece uma API simples e elegante para criar e executar consultas SQL de forma programática, facilitando a manipulação do banco de dados dentro do código JavaScript.

- **Arquitetura MVC (Model-View-Controller)**: Organizamos o código seguindo o padrão de arquitetura MVC para separar as preocupações e facilitar a manutenção e a escalabilidade do projeto. As rotas da API e a lógica de controle estão no diretório `controllers`, enquanto a lógica de acesso ao banco de dados está no diretório `models`.

Essas foram algumas das decisões técnicas e arquiteturais tomadas durante o desenvolvimento do projeto. Elas foram escolhidas com base na simplicidade, eficiência e facilidade de manutenção do código.


## Tecnologias Utilizadas

- Node.js
- SQLite3
- Knex (para construção de queries SQL)
- Docker