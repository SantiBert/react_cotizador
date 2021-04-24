import React, { useState } from 'react';

import Header from './components/Header';
import Form from './components/Form';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';
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

  const [ resume, setResume ] = useState({
    cotization: 0,
    data: {
      marca: '',
      year: '',
      plan: '',
    }
  });

  const [ load, setLoad ] = useState(false);

  const {cotization, data} = resume

  return (
    <Content>
      <Header
        title='Cotizador'
      />
      <ContentForm>
        <Form
          setResume={setResume}
          setLoad = {setLoad}
         />

        { load ? <Spinner /> : null }

         <Resume
            data={data} 
         />
         <Result
            cotization = {cotization}
          />
      </ContentForm>
    </Content>
  );
}

export default App;
