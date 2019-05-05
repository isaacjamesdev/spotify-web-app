import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import GlobalStyle from './styles/global';
import {Container, Wrapper, Content} from './styles/components'
import Sidebar from './components/Sidebar/sidebar';
import Player from './components/Player/player';
import Header from './components/Header/header';
import Routes from './Routes/Routes';

const App = () => (
  <BrowserRouter>
    <Wrapper>
      <GlobalStyle/>
      <Container>  
        <Sidebar/>
        <Content>
          <Header/>
          <Routes/>
        </Content>
      </Container>
      <Player/>
    </Wrapper>
  </BrowserRouter>
);

export default App;
