https://joao-victorx.github.io/controle-almoxarifado/

[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/B74p-HKt)

# Sistema de Almoxarifado

## Descrição

Sistema web para controle de estoque de materiais de almoxarifado, desenvolvido com HTML, CSS, JavaScript e MockAPI.

O sistema permite cadastrar materiais, visualizar o estoque disponível, realizar baixas de materiais, pesquisar produtos e excluir registros.

## Funcionalidades

* Cadastro de novos materiais
* Listagem de materiais cadastrados
* Controle de quantidade em estoque
* Baixa de materiais
* Exclusão de materiais
* Pesquisa de materiais em tempo real
* Dashboard com total de materiais cadastrados
* Destaque visual para materiais com estoque crítico (menos de 10 unidades)
* Tratamento de erros nas requisições à API
* Integração com MockAPI para persistência dos dados

## Tecnologias Utilizadas

* HTML5
* CSS3
* JavaScript (ES6+)
* Bootstrap 5
* MockAPI

## Estrutura do Projeto

```text
/
├── index.html
├── style.css
├── main.js
└── README.md
```

## Como Executar

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
```

2. Acesse a pasta do projeto:

```bash
cd nome-do-projeto
```

3. Abra o arquivo `index.html` em seu navegador.

## API Utilizada

Os dados são armazenados utilizando a plataforma MockAPI.

Endpoint:

```text
https://6a29b579f59cb8f65f1d8502.mockapi.io/api/v1/produtos
```

## Funcionalidades de Estoque

### Cadastro

Permite adicionar um novo material informando:

* Nome
* Quantidade

### Baixa de Material

Permite retirar itens do estoque respeitando as regras:

* A quantidade deve ser maior que zero.
* A quantidade não pode ser maior que o estoque disponível.

### Pesquisa

Permite localizar materiais cadastrados através da barra de busca, filtrando os resultados em tempo real conforme o usuário digita.

### Dashboard

Exibe a quantidade total de materiais cadastrados no sistema.

### Estoque Crítico

Materiais com quantidade inferior a 10 unidades recebem destaque visual para facilitar a identificação de itens que precisam de reposição.

### Exclusão

Permite remover um material do sistema após confirmação do usuário.

## Autor

João Victor

