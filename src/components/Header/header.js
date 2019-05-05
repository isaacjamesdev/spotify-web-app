import React from 'react';

import { Container, Search, User } from './styles';

const Header = () => (
    <Container>
        <Search>
            <input placeholder="Search"/>
        </Search>
        <User>
            <img src="https://avatars2.githubusercontent.com/u/39223984?s=180&v=4" alt="avatar"/>
        </User>
    </Container>
);

export default Header;
