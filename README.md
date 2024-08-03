# API de Controle de Cartão de Crédito

Esta API foi desenvolvida em Node.js e oferece funcionalidades para gerenciamento de cartões de crédito. A API utiliza autenticação JWT para garantir a segurança das operações.

## Funcionalidades

### Autenticação de Usuários
- **Criar Usuário**: `POST /user`
- **Autenticar Usuário**: `POST /session`
- **Detalhes do Usuário**: `GET /userinfo` (Requer autenticação)

### Gerenciamento de Cartões de Crédito
- **Criar Cartão**: `POST /card` (Requer autenticação)
- **Validar Cartão**: `POST /card/validate` (Requer autenticação)
- **Listar Cartões do Usuário**: `GET /user/cards` (Requer autenticação)

## Rotas da API

### Usuários
- `POST /user`: Cria um novo usuário.
- `POST /session`: Autentica um usuário.
- `GET /userinfo`: Obtém detalhes do usuário autenticado.

### Cartões de Crédito
- `POST /card`: Cria um novo cartão de crédito.
- `POST /card/validate`: Valida um cartão de crédito.
- `GET /user/cards`: Lista todos os cartões de crédito associados ao usuário autenticado.

## Autenticação

A API utiliza JWT (JSON Web Token) para autenticação. Para acessar as rotas protegidas, é necessário incluir um token válido no cabeçalho da requisição.
