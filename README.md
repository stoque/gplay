# Globoplay Teste

Esse projeto foi desenvolvido usando as seguintes tecnologias:
- [React](https://reactjs.org)
- [Create React App](https://github.com/facebook/create-react-app)
- [Styled Components](https://www.styled-components.com/)

### Observações gerais
- Foi adotado uma arquitetura simples de separação de componentes **stateless** e **stateful** (containers) para centralização da lógica de dados garantindo uma melhor manutenibilidade.
- Para uma melhor padronização de código foi adicionado o [ESlint](https://eslint.org/) com a configuração de styleguide da Airbnb.
- Para uma melhor padronização de commits foi adicionado o [@commitlint/config-conventional](https://www.npmjs.com/package/@commitlint/config-conventional).
- Para garantir que o eslint e o commitlint estão sendo executados foi adicionado o [Husky](https://www.npmjs.com/package/husky) com hooks de `pre-commit` e `pre-push`.
- Não foi implementado testes pelo tempo curto de desenvolvimento, mas seria algo que eu faria se tivesse mais tempo, principalmente nos componentes stateful e no hook customizado.
