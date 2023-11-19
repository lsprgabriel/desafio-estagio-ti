# Documentação da API

Bem-vindo à documentação da API **desafio-estagio-ti**. Esta API fornece endpoints para realizar operações CRUD (CREATE, READ, UPDATE, DELETE) relacionadas a usuários.

## Como começar

Esta documentação guiará você através dos diferentes endpoints disponíveis na API.

### Cadastro de Usuário

- **Descrição**: Este endpoint permite cadastrar um novo usuário.
- **Método**: POST
- **URL**: `http://localhost:3000/api/signup`
- **Corpo da Requisição**:

```json
{
  "name": "Gabruiel",
  "age": 19,
  "email": "gabriel@gabriel.com",
  "password": "gabriel123",
  "isAdmin": false
}
```

### Login

- **Descrição**: Este endpoint permite autenticar um usuário.
- **Método**: POST
- **URL**: http://localhost:3000/api/login
- **Corpo da Requisição**:

```json
{
  "email": "ogabrielpereira@pm.me",
  "password": "UT925250"
}
```
### Ler todos os usuários

- **Descrição**: Este endpoint retorna todos os usuários cadastrados.
- **Método**: GET
- **URL**: http://localhost:3000/api/users
- **Autenticação**: JWT Token necessário
- **Resposta Esperada**: Status 200

### Ler usuário específico

- **Descrição**: Este endpoint retorna informações de um usuário específico.
- **Método**: GET
- **URL**: http://localhost:3000/api/user/:id
- **Parâmetros de Rota**: id (ID do usuário)
- **Autenticação**: JWT Token necessário
- **Resposta Esperada**: Status 200

### Editar usuário

- **Descrição**: Este endpoint permite editar informações de um usuário existente.
- **Método**: PUT
- **UR**: http://localhost:3000/api/user/:id
- **Parâmetros de Rota**: id (ID do usuário)
- **Corpo da Requisição**:

```json
{
  "name": "GabrielAdmin",
  "age": 19,
  "email": "ogabrielpereiraadmin@pm.me",
  "password": "UT925250",
  "isAdmin": true
}
```
- **Autenticação**: JWT Token necessário
- **Resposta Esperada**: Status 200, 201 ou 204

### Deletar usuário

- **Descrição:** Este endpoint permite excluir um usuário existente.
- **Método**: DELETE
- **URL**: http://localhost:3000/api/user/:id
- **Parâmetros de Rota**: id (ID do usuário)
- **Autenticação**: JWT Token necessário
- **Resposta Esperada**: Status 200, 202 ou 204

### Observações

- Certifique-se de incluir o token JWT válido nas requisições autenticadas.
- Consulte a [documentação do Postman](https://learning.postman.com/docs/introduction/overview/) para mais informações sobre como usar variáveis, autorizações e testes.