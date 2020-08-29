import { all, call, select, takeLatest, put } from 'redux-saga/effects';
import { actions } from './slice';
import request from 'utils/request';
import auth from 'utils/auth';

import { selectFormData } from './selectors';
//import {  postDataPayload } from './types';
//import { format } from 'url';
export function* joinGroup() {
  //Select the form data

  try {
    //Get join action payload
    const formData = yield select(selectFormData);

    //Generate request body from payload
    const body = {
      group: formData.payload.groupCode,
    };

    const requestURL = 'http://localhost:1337/users/updateme';
    console.log(body);
    const response = yield call(request, requestURL, {
      method: 'PUT',
      body,
    });
    console.log(response);
    yield call(auth.setUserInfo, response.user, true);
    yield put(actions.submitSucc());
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);

    yield put(
      actions.submitFailed({
        message: JSON.stringify(error.response.payload),
      }),
    );
  }
}

export function* generateGroup() {
  //Select the form data

  try {
    const requestURL = 'http://localhost:1337/groups';
    //Request auth
    const response = yield call(request, requestURL, {
      method: 'POST',
    });
    console.log(response);
    yield put(actions.generateCodeSucc());
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);

    yield put(actions.generateCodeFail());
  }
}

export function* accountSaga() {
  yield takeLatest(actions.submit.type, joinGroup);
  yield takeLatest(actions.generateCode.type, generateGroup);
}
