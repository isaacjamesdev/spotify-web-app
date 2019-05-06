import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, Nav, NewPlaylist } from "./styles";
import AddPlaylistIcon from "../../Assets/images/add_playlist.svg";
import Loading from "../loading/loading";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistsRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };
  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <li>
              <Link to="/">Navigation</Link>
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
          <Nav>
            <li>
              <span>PLAYLISTS</span>
              {this.props.playlists.loading && <Loading />}
            </li>
            {this.props.playlists.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylistIcon} alt="adicionar playlist" />
          New playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
