import { call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectFormData } from './selectors';
import request from 'utils/request';

import 'whatwg-fetch';

export function* register() {
  //Select the form data
  const formData = yield select(selectFormData);
  console.log(formData);
  const { resume, history, signIn, ...body } = formData.payload;
  let response;
  try {
    //Get submit action payload
    //console.log(formData);
    //Generate request bodies from payload
    const requestURL = 'https://cutiehack.io/api/users/updateme';
    //console.log(body);
    //Request auth
    console.log(body);
    response = yield call(request, requestURL, {
      method: 'PUT',
      body,
    });
    // Set the user's credentials
    // console.log(response);
    // console.log(
    //   Object.assign(
    //     JSON.parse(window.localStorage.getItem('_auth_state') || '{}'),
    //     response,
    //   ),
    // );

    signIn({
      token: window.localStorage.getItem('_auth_t'),
      expiresIn: 10080,
      tokenType: 'Bearer',
      authState: Object.assign(
        JSON.parse(window.localStorage.getItem('_auth_state') || '{}'),
        response,
      ),
    });
    // console.log(resume);
    if (resume) {
      yield call(
        sendResume,
        resume,
        response.id,
        window.localStorage.getItem('_auth_t'),
      );
    }
    // console.log('reachedhere');
    yield put(actions.submitSucc());
    // console.log(history);
    yield call(history, '/account');
  } catch (error) {
    if (JSON.stringify(error) !== '{}') {
      yield put(
        actions.submitFailed({
          message: JSON.stringify(error),
        }),
      );
    }
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
  return fetch('https://cutiehack.io/api/upload', options);
}

export function* registerFormSaga() {
  yield takeLatest(actions.submit.type, register);
}
