import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as playlistDetailsActions } from "../../store/ducks/playlistDetails";

import { Container, Header, SongList } from "./styles";
import PlusIcon from "../../Assets/images/plus.svg";
import ClockIcon from "../../Assets/images/clock.svg";
import Loading from "../../components/loading/loading";

class playlist extends Component {
  componentDidMount() {
    console.tron.log(this.props);
    this.props.getPlaylistDetailsRequest(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params !== this.props.match.params)
      this.props.getPlaylistDetailsRequest(this.props.match.params.id);
  }

  render() {
    return (
      <Container>
        <Header>
          {this.props.playlistDetails.loading ? (
            <Loading />
          ) : (
            <img
              src={this.props.playlistDetails.data.thumbnail}
              alt="playlist"
            />
          )}
          <div>
            <span>PLAYLIST</span>
            {this.props.playlistDetails.loading ? (
              <Loading />
            ) : (
              <>
                <h1>{this.props.playlistDetails.data.title}</h1>
                <p>{this.props.playlistDetails.data.description}</p>
              </>
            )}

            <button>PLAY</button>
          </div>
        </Header>

        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>
              <img src={ClockIcon} alt="duration" />
            </th>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={PlusIcon} alt="add" />
              </td>
              <td>Cartola</td>
              <td>Engenheiros do Hawaii</td>
              <td>4:23</td>
            </tr>
          </tbody>
        </SongList>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(playlistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(playlist);
