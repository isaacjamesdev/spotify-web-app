import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import './config/reactotron';
import GlobalStyle from './styles/global';
import {Container, Wrapper, Content} from './styles/components'

import Sidebar from './components/Sidebar/sidebar';
import Player from './components/Player/player';
import Header from './components/Header/header';

import Routes from './Routes/Routes';
import {Provider} from 'react-redux';
import store from './store'

const App = () => (
  <Provider store= {store}>
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
  </Provider>
);

export default App;
