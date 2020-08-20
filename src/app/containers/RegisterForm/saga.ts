import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectFormData } from './selectors';
import request from 'utils/request';
import auth from 'utils/auth';
import { initialsend } from './types';
import 'whatwg-fetch';
export function* register() {
  //Select the form data

  try {
    //Get submit action payload
    const formData = yield select(selectFormData);
    console.log(formData);
    //Generate request body from payload
    const body = formData.payload as initialsend;

    const requestURL = 'http://localhost:1337/auth/local/register';
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
        call(
          sendResume,
          formData.payload.resume,
          response.user.id,
          response.jwt,
        ),
        put(actions.submitSuccess()),
        call(window.open, '/', '_self'),
      ]);
    }
  } catch (error) {
    console.log(error.response.payload.message);
  }
}

function sendResume(data: FormData, refId, token) {
  let options: any = { method: 'POST' };

  options.headers = Object.assign(
    {
      Authorization: `Bearer ${token}`,
    },
    options.headers,
  );

  data.append('refId', refId);
  data.append('ref', 'user');
  data.append('source', 'users-permissions');
  data.append('field', 'resume');
  options.body = data;
  return fetch('http://localhost:1337/upload', options);
}

export function* registerFormSaga() {
  yield takeLatest(actions.submit.type, register);
}
