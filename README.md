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
  "name": "Gabriel",
  "age": 19,
  "email": "gabriel@gabriel.com",
  "password": "gabriel123",
  "isAdmin": false
}
```

### Login

- **Descrição**: Este endpoint permite autenticar um usuário.
- **Método**: POST
- **URL**: `http://localhost:3000/api/login`
- **Corpo da Requisição**:

```json
{
  "email": "gabriel@gabriel.com",
  "password": "gabriel123"
}
```
### Ler todos os usuários

- **Descrição**: Este endpoint retorna todos os usuários cadastrados.
- **Método**: GET
- **URL**: `http://localhost:3000/api/users`
- **Autenticação**: JWT Token de um Admin necessário.
- **Exemplo de Resposta Esperada**: 

```json
{
    "message": "Usuários encontrados com sucesso!",
    "data": [
        {
            "id": "6559af60b1404cc9cb2cb786",
            "name": "Gabriel",
            "age": 19,
            "email": "gabriel@gabriel.com",
            "password": "$2b$10$m82Q78LZxFyV8Ct4aiLiyOKwlZwNRpd16B0uI./UdpF87MQ.SpU2W",
            "isAdmin": false
        },
        {
            "id": "6559b1952629f63665cd4948",
            "name": "Admin",
            "age": 42,
            "email": "adminadmin",
            "password": "$2b$10$9zuQ34Y4NBnclSrEj90ay.WQJW.vV53pB23Q9RLqpYTWrB8kcZjY.",
            "isAdmin": true
        }
    ]
}
```

### Ler usuário específico

- **Descrição**: Este endpoint retorna informações de um usuário específico.
- **Método**: GET
- **URL**: `http://localhost:3000/api/user/:id`
- **Parâmetros de Rota**: id (ID do usuário)
- **Autenticação**: JWT Token de um Admin necessário.
- **Exemplo de Resposta Esperada**: 
  
```json
{
    "message": "Usuário encontrado com sucesso!",
    "data": {
            "id": "6559af60b1404cc9cb2cb786",
            "name": "Gabriel",
            "age": 19,
            "email": "gabriel@gabriel.com",
            "password": "$2b$10$m82Q78LZxFyV8Ct4aiLiyOKwlZwNRpd16B0uI./UdpF87MQ.SpU2W",
            "isAdmin": false
        },
}
```

### Editar usuário

- **Descrição**: Este endpoint permite editar informações de um usuário existente.
- **Método**: PUT
- **UR**: `http://localhost:3000/api/user/:id`
- **Parâmetros de Rota**: id (ID do usuário)
- **Corpo da Requisição**:

```json
{
  "name": "Gabriel",
  "age": 19,
  "email": "ogabrielpereira@pm.me",
  "isAdmin": true
}
```
- **Autenticação**: JWT Token de um Admin necessário.
- **Exemplo de Resposta Esperada**:

```json
{
    "message": "Usuário atualizado com sucesso!",
    "data": {
        "id": "6559af60b1404cc9cb2cb786",
        "name": "Gabriel",
        "age": 19,
        "email": "ogabrielpereira@pm.me",
        "password": "$2b$10$m82Q78LZxFyV8Ct4aiLiyOKwlZwNRpd16B0uI./UdpF87MQ.SpU2W",
        "isAdmin": true
    }
}
```

### Deletar usuário

- **Descrição:** Este endpoint permite excluir um usuário existente.
- **Método**: DELETE
- **URL**: `http://localhost:3000/api/user/:id`
- **Parâmetros de Rota**: id (ID do usuário)
- **Autenticação**: JWT Token de um Admin necessário.
- **Exemplo de Resposta Esperada**: 

```json
{
    "message": "Usuário deletado com sucesso!",
    "data": {
        "id": "6559af60b1404cc9cb2cb786",
        "name": "Gabriel",
        "age": 19,
        "email": "ogabrielpereira@pm.me",
        "password": "$2b$10$m82Q78LZxFyV8Ct4aiLiyOKwlZwNRpd16B0uI./UdpF87MQ.SpU2W",
        "isAdmin": true
    }
}
```

### Observações

- Certifique-se de incluir o token JWT válido nas requisições autenticadas.
- Consulte a [documentação do Postman](https://learning.postman.com/docs/introduction/overview/) para mais informações sobre como usar variáveis, autorizações e testes.