import Header from './components/Header';
import Form from './components/Form';
import styled from '@emotion/styled';

const Content = styled.div`
  max-width:600px;
  margin:0 auto;
`;

const ContentForm = styled.div`
  background-color:#FFF;
  padding:3rem;
`;

function App() {
  return (
    <Content>
      <Header
        title='Cotizador'
      />
      <ContentForm>
        <Form />
      </ContentForm>
    </Content>
  );
}

export default App;
