import React from 'react';

import { Container, Nav, NewPlaylist } from './styles';
import AddPlaylistIcon from '../../Assets/images/add_playlist.svg';
const  Sidebar = () => (
    <Container>
        <div>
            <Nav main>
                <li>
                    <a>Navigation</a>
                </li>
                <li>
                    <a>Radio</a>
                </li>
            </Nav>
            <Nav>
                <li>
                    <span>YOUR lIBRARIE</span>
                </li>
                <li>
                    <a>Your Daily</a>
                </li>
                <li>
                    <a>Recent Played</a>
                </li>
                <li>
                    <a>Music</a>
                </li>
                <li>
                    <a>Albuns</a>
                </li>
                <li>
                    <a>Artist</a>
                </li>
                <li>
                    <a>Local files</a>
                </li>
                <li>
                    <a>Stations</a>
                </li>
                <li>
                    <a>Videos</a>
                </li>
                <li>
                    <a>Podcasts</a>
                </li>
            </Nav>

            <Nav >
                <li>
                    <span>PLAYLISTS</span>
                </li>
                <li>
                    <a>The bests of Rock</a>
                </li>
            </Nav>
        </div>
        <NewPlaylist>
            <img src={AddPlaylistIcon} alt="adicionar playlist"/>
            New playlist
        </NewPlaylist>
    </Container>)
;

export default  Sidebar;
