# NestJS Backend

Este é o backend do projeto Flutter Login App, desenvolvido com NestJS e configurado para rodar em contêineres Docker.

## Requisitos

- Docker e Docker Compose instalados

## Como rodar o projeto

Siga os passos abaixo para rodar o backend NestJS:

### 1. Clone o repositório

Primeiro, clone o repositório do projeto e navegue até o diretório do backend:


git clone https://github.com/seu-usuario/flutter-login-app.git
cd flutter-login-app/backend

### Configure as variáveis de ambiente
Crie um arquivo .env na raiz do diretório backend com as seguintes variáveis de ambiente:
APP_PORT=3000
MONGO_URI=mongodb://mongo:27017/mydatabase

### Construa e inicie os contêineres
Use o Docker Compose para construir as imagens e iniciar os contêineres:
docker-compose up --build

### Acesse o aplicativo
Depois que os contêineres estiverem em execução, você pode acessar o aplicativo NestJS na URL:
http://localhost:3000

### Acesse o Mongo Express
O Mongo Express estará disponível em:
http://localhost:8081

user:admin
password:pass