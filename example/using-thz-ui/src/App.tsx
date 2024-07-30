import { Button, Input, Container, Content } from 'thz-ui';

function App() {
  return (
    <Content>
      <Container>
        <Button>Teste</Button>
      </Container>

      <Container>
        <Input.Label>
          Insira o seu usuário
          <Input.Box>
            <Input.Element placeholder="Digite seu usuário" />
          </Input.Box>
          <Input.Message>Esta é uma mensagem de exemplo.</Input.Message>
        </Input.Label>
      </Container>

      <Container>
        <Button>Teste</Button>
      </Container>

      <Container>
        <Button>Teste</Button>
      </Container>

      <Container>
        <Button>Teste</Button>
      </Container>
    </Content>
  );
}

export default App;
