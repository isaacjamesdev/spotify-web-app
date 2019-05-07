import { call, put } from "redux-saga/effects";
import api from "../../services/api";
import { Creators as playlistDetailsActions } from "../ducks/playlistDetails";

export function* getPlaylistDetails(action) {
  console.tron.log(action);
  try {
    const response = yield call(
      api.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(playlistDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (error) {
    console.tron.log(error);
  }
}
