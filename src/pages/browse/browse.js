import React from 'react';

import { Container, Title, List, Playlist } from './styles';

const  browse = () => (
    <Container>
        <Title>Navegar</Title>
        <List>
            <Playlist to="/playlists/1">
                <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="playlist"/>
                <strong>The bests rock</strong>
                <p>relax while you listen only musics rock of best of world</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="playlist"/>
                <strong>The bests rock</strong>
                <p>relax while you listen only musics rock of best of world</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="playlist"/>
                <strong>The bests rock</strong>
                <p>relax while you listen only musics rock of best of world</p>
            </Playlist>
            <Playlist to="/playlists/1">
                <img src="https://i.ytimg.com/vi/72VZs9SDXHo/hqdefault.jpg" alt="playlist"/>
                <strong>The bests rock</strong>
                <p>relax while you listen only musics rock of best of world</p>
            </Playlist>
        </List>
    </Container>
);


export default  browse;
