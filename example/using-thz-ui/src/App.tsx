import { Button, Input } from 'thz-ui';

function App() {
  return (
    <>
      <Button>Teste</Button>

      <Input.Label>
        Insira o seu usuário
        <Input.Box>
          <Input.Element placeholder="Digite seu usuário" />
        </Input.Box>
        <Input.Message>Esta é uma mensagem de exemplo.</Input.Message>
      </Input.Label>
    </>
  );
}

export default App;
