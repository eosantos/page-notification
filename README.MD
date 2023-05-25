💻 Sobre o projeto

🔔 Projeto de notificação de uma escola

## Descrição

A secretaria pode enviar notificações para um grupo de alunos, classificados ou agrupados em turmas, categorias e outras opções de filtragem. Essa notificação, para o usuário, precisa estar visível e possibilitar o controle (visualizar e excluir).

## Dependências do sistema

- json-server

### Ferramentas

- [NextJS](https://nextjs.org/)

- [Axios](https://axios-http.com/ptbr/docs/intro)

- [Git](https://git-scm.com/doc)

### Montagem do ambiente de desenvolvimento

O primeiro passo é clonar o projeto utilizando o método HTTPS ou SSH.

SSH

```sh
git clone git@github.com:eosantos/github-search.git
```

HTTPS

```sh
git clone https://github.com/eosantos/page-notific.git
```

### Instalar dependências do projeto

Com o comando abaixo instalamos todos os pacotes definidos no package.json para configuração do servidor local:

```sh
npm i
```

### Acessando a aplicação

Para iniciar o projeto basta executar o comando abaixo:

```sh
npm run dev
```
Após a execução do comando acima basta abrir o link `http://localhost:3000`.

### Acessando a db (entre na pasta src/services) execute o comanto

```sh
json-server --watch db.json --port 3004
```