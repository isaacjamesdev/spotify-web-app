import { combineReducers } from "redux";
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";
import error from "./error";

const reducers = combineReducers({
  playlists,
  playlistDetails,
  error
});

export default reducers;
