import { call, all, put, takeLatest } from "redux-saga/effects";
import { actions } from "./moviesStore";
import { actions as detailsActions } from "./detailsStore";
import { fetchMovie, fetchMovies, fetchRecommandations } from "../ApiHelper";

// worker Saga
export function* workerMovies(value) {
  const movies = yield call(fetchMovies, value);
  yield put(actions.change({ movies: movies.results }));
}
export function* workerMovie(id) {
  const movie = yield call(fetchMovie, id);
  const recommandations = yield call(fetchRecommandations, id);
  if (recommandations.results) {
    movie.recommandations = recommandations.results;
  }
  yield put(detailsActions.change({ movie: movie }));
}

// watcher Saga
export function* watchMovies() {
  yield takeLatest("FETCH_MOVIES", workerMovies);
}
export function* watchMovie() {
  yield takeLatest("FETCH_MOVIE", workerMovie);
}

// root Saga
export function* rootSaga() {
  yield all([watchMovies(), watchMovie()]);
}
