# thz-ui

**thz-ui** é uma biblioteca de componentes React que fornece uma coleção de componentes de interface de usuário elegantes e reutilizáveis. Este guia irá mostrar como começar a usar a biblioteca e como utilizar alguns dos principais componentes disponíveis.

## Instalação

Para instalar a biblioteca **thz-ui**, você pode usar npm ou yarn:

```bash
npm install thz-ui
```

ou

```bash
yarn add thz-ui
```

## Uso

Após a instalação, você pode começar a usar os componentes importando-os no seu projeto React. Abaixo estão exemplos de como usar alguns dos principais componentes da biblioteca **thz-ui**.

### Button

O componente `Button` é usado para criar botões interativos. Você pode especificar diferentes variantes de cor usando a propriedade `colors`.

```jsx
import { Button } from 'thz-ui';

const App = () => (
  <>
    <Button>Teste</Button>
    <Button colors="error">Erro</Button>
    <Button colors="secondary">Secundário</Button>
  </>
);

export default App;
```

### Input

O componente `Input` é usado para criar campos de entrada de dados. Ele é composto por subcomponentes como `Input.Label`, `Input.Box`, `Input.Element`, e `Input.Message` para fornecer uma estrutura completa e flexível para inputs.

```jsx
import { Input } from 'thz-ui';

const App = () => (
  <Input.Label>
    Insira o seu usuário
    <Input.Box>
      <Input.Element placeholder="Digite seu usuário" />
    </Input.Box>
    <Input.Message>Esta é uma mensagem de exemplo.</Input.Message>
  </Input.Label>
);

export default App;
```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests para melhorias e novos recursos.

## Licença

Este projeto está licenciado sob a licença MIT. Consulte o arquivo `LICENSE` para obter mais detalhes.
