import {
  fetchReposResponse,
  reposError,
  reposSuccess,
  setRepos,
} from "./reposSlice";
import { takeEvery, put, call, delay } from "redux-saga/effects";
import { getGithubRepositories } from "./getGithubRepositories";

function* fetchReposResponseHandler() {
  try {
    yield delay(1500);
    yield put(reposSuccess());
    const reposResponse = yield call(getGithubRepositories);
    yield put(setRepos(reposResponse));
  } catch (error) {
    yield put(reposError());
  }
}

export function* watchReposResponse() {
  yield takeEvery(fetchReposResponse.type, fetchReposResponseHandler);
}
