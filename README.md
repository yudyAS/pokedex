# Pokédex - Projeto em Angular 19

## Sobre o Projeto
Este é um projeto de Pokédex desenvolvido utilizando *Angular 19*. Ele permite visualizar diferentes Pokémons, consumindo dados de uma API. O objetivo principal é proporcionar uma experiência intuitiva e interativa para os usuários explorarem o universo dos Pokémons.

## Funcionalidades
- Listagem de Pokémons com paginção.
- Detalhes de cada Pokémon, incluindo:
  - Nome
  - Imagem
- Interface responsiva para dispositivos móveis e desktops.

## Imagem Ilustrativa
<div align = "center">
  <img src="https://github.com/user-attachments/assets/2ac1c30a-91b2-4fc9-be34-9fc2d57f480a" width="700px"/>
</div>

#### Link:
https://pokemon-pokedex-yudy.netlify.app/

## Tecnologias Utilizadas

### Frontend
- *Angular 19*: Framework principal para desenvolvimento da aplicação.
- *TypeScript*: Linguagem utilizada para maior segurança e produtividade no código.
- *HTML5 e CSS3*: Para estrutura e estilização da interface.
- *Angular Material*: Biblioteca de componentes para criar uma interface moderna e responsiva.

### Backend
- *API Externa*: Os dados dos Pokémons são consumidos de uma API REST (
[PokeAPI](https://pokeapi.co/) ou outra de sua escolha).

## Como Executar o Projeto

### 1. Clonar o Repositório
bash
https://github.com/yudyAS/pokedex.git
cd pokedex


### 2. Instalar as Dependências
Certifique-se de ter o Node.js (v18 ou superior) e o Angular CLI instalados.

bash
npm install


### 3. Executar o Servidor de Desenvolvimento
Inicie o servidor local:

bash
ng serve


Acesse o projeto em seu navegador no endereço: [http://localhost:4200](http://localhost:4200)

### 4. Configurar a API
Certifique-se de que o endpoint da API está configurado corretamente no arquivo de serviço (exemplo: src/app/services/pokemon.service.ts). Caso esteja utilizando a PokeAPI, nenhuma autenticação é necessária.

## Estrutura do Projeto

src/
├── app/
│   ├── components/        # Componentes reutilizáveis
│   ├── pages/             # Páginas principais da aplicação
│   ├── services/          # Serviços para consumir APIs
│   └── app.module.ts      # Configurações do Angular
├── assets/                # Recursos estáticos (imagens, ícones, etc.)
├── environments/          # Configurações de ambientes (dev/prod)
└── main.ts                # Arquivo principal


## Melhorias Futuras
- Implementação de sistema de favoritos para salvar Pokémons preferidos.
- Adicionar animações e efeitos visuais para melhorar a experiência do usuário.
- Integração com outra API para exibir localizações e evoluções.

## Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir:
1. Faça um fork do projeto.
2. Crie uma nova branch:
   bash
   git checkout -b minha-nova-feature
   
3. Faça suas modificações e commit:
   bash
   git commit -m "Adicionando uma nova funcionalidade"
   
4. Envie as alterações:
   bash
   git push origin minha-nova-feature
   
5. Abra um Pull Request.

## Licença
Este projeto é licenciado sob a [MIT License](LICENSE).

## Contato
Caso tenha dúvidas ou sugestões, entre em contato:
- *Email*: yudyantunes123@gmail.com
- *GitHub*: [yudyAS](https://github.com/yudyAS)



# Pokedex

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
