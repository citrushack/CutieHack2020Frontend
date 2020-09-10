import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { actions } from './slice';
import { selectFormData } from './selectors';
import request from 'utils/request';
import auth from 'utils/auth';
import 'whatwg-fetch';

export function* register() {
  //Select the form data
  const formData = yield select(selectFormData);

  try {
    //Get submit action payload
    //console.log(formData);
    //Generate request bodies from payload
    const { resume, history, ...body } = formData.payload;
    const requestURL = 'http://localhost:1337/auth/local/register';
    //console.log(body);
    //Request auth
    const response = yield call(request, requestURL, {
      method: 'POST',
      body,
    });

    if (response.jwt) {
      // Set the user's credentials
      yield all([
        call(sendResume, resume, response.user.id, response.jwt),
        call(auth.setToken, response.jwt, true),
        call(auth.setUserInfo, response.user, true),
      ]);
      yield call(history.push, '/account');
      //console.log(JSON.stringify(response));
    }
  } catch (error) {
    if (error) {
      console.log(JSON.stringify(error));
      yield put(
        actions.submitFailed({
          message: error.response.payload.message[0].messages[0].message,
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
  return fetch('http://localhost:1337/upload', options);
}

export function* registerFormSaga() {
  yield takeLatest(actions.submit.type, register);
}
