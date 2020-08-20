import { all, call, select, takeLatest, put } from 'redux-saga/effects';
import { actions } from './slice';
import request from 'utils/request';
import auth from 'utils/auth';

import { selectFormData } from './selectors';
//import {  postDataPayload } from './types';
//import { format } from 'url';
export function* login() {
  //Select the form data

  try {
    //Get submit action payload
    const formData = yield select(selectFormData);

    //Generate request body from payload
    const body = {
      identifier: formData.payload.username,
      password: formData.payload.password,
    };

    const requestURL = 'http://localhost:1337/auth/local';
    console.log(body);
    //Request auth
    const response = yield call(request, requestURL, {
      method: 'POST',
      body,
    });

    if (response.jwt) {
      // Set the user's credentials
      yield all([
        call(auth.setToken, response.jwt, formData.payload.rememberMe),
        call(auth.setUserInfo, response.user, formData.payload.rememberMe),
        call(window.open, '/', '_self'),
      ]);
    }
  } catch (error) {
    console.log(error.response.payload.message[0].messages[0].message);

    yield put(
      actions.submitFailed({
        message: error.response.payload.message[0].messages[0].message,
      }),
    );
  }
}

export function* authPageSaga() {
  yield takeLatest(actions.submit.type, login);
}
