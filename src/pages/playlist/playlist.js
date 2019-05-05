import React from 'react';

import { Container, Header, SongList } from './styles';
import PlusIcon from '../../Assets/images/plus.svg'
import ClockIcon from '../../Assets/images/clock.svg'

const playlist = () => (
    <Container>
        <Header>
            <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="playlist"/>
            <div>
                <span>PLAYLIST</span>
                <h1>Rock Forever</h1>
                <p>12 Music</p>

                <button>PLAY</button>
            </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
            <thead>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th><img src={ClockIcon} alt="duration"/></th>
            </thead>
            <tbody>
                <tr>
                    <td><img src={PlusIcon} alt="add"/></td>
                    <td>Cartola</td>
                    <td>Engenheiros do Hawaii</td>
                    <td>4:23</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="add"/></td>
                    <td>Cartola</td>
                    <td>Engenheiros do Hawaii</td>
                    <td>4:23</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="add"/></td>
                    <td>Cartola</td>
                    <td>Engenheiros do Hawaii</td>
                    <td>4:23</td>
                </tr>
                <tr>
                    <td><img src={PlusIcon} alt="add"/></td>
                    <td>Cartola</td>
                    <td>Engenheiros do Hawaii</td>
                    <td>4:23</td>
                </tr>
            </tbody>
        </SongList>
    </Container>
);

export default playlist;
