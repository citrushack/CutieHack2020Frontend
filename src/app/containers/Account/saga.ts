import { call, select, takeLatest, put } from 'redux-saga/effects';
import { actions } from './slice';
import request from 'utils/request';

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

    const requestURL = 'https://cutiehack.io/api/users/updateme';
    //console.log(body);
    const response = yield call(request, requestURL, {
      method: 'PUT',
      body,
    });
    //console.log(response);
    yield put(actions.joinGroupSucc(response));
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);

    yield put(
      actions.joinGroupFailed({
        message: JSON.stringify(error.response.payload),
      }),
    );
  }
}

export function* leaveGroup() {
  //Select the form data
  try {
    //Generate request body from payload
    const body = {
      group: 'none',
    };

    const requestURL = 'https://cutiehack.io/api/users/updateme';
    //console.log(body);
    yield call(request, requestURL, {
      method: 'PUT',
      body,
    });
    yield put(actions.leaveGroupSucc());
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);

    yield put(
      actions.leaveGroupFail({
        message: JSON.stringify(error.response.payload),
      }),
    );
  }
}

export function* generateGroup() {
  //Select the form data

  try {
    const requestURL = 'https://cutiehack.io/api/groups';
    //Request auth
    const response = yield call(request, requestURL, {
      method: 'POST',
    });
    //console.log(response);
    yield put(actions.generateCodeSucc(response));
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);

    yield put(
      actions.generateCodeFail({
        message: JSON.stringify(error.response.payload),
      }),
    );
  }
}

export function* refresh() {
  try {
    const requestURL = 'https://cutiehack.io/api/users/getmygroup';
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    //console.log(response);
    // yield call(auth.set, response, 'groupInfo', true);
    yield put(actions.refreshGroupSucc(response));
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);
    if (error.response?.payload?.message === 'UserNotInGroup') {
      yield put(actions.clearGroupInfo());
    } else {
      yield put(
        actions.refreshGroupFail({
          message: JSON.stringify(error.response.payload),
        }),
      );
    }
  }
}

export function* refreshStatus() {
  try {
    const requestURL = 'https://cutiehack.io/api/users/getmystatus';
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    console.log(response);
    // yield call(auth.set, response, 'groupInfo', true);
    yield put(actions.refreshStatusSucc(response));
  } catch (error) {
    //console.log(error.response.payload.message[0].messages[0].message);
    yield put(
      actions.refreshStatusFail({
        message: JSON.stringify(error.response.payload),
      }),
    );
  }
}

export default function* accountSaga() {
  yield call(refreshStatus);
  yield call(refresh);
  yield takeLatest(actions.refreshStatus.type, refreshStatus);
  yield takeLatest(actions.joinGroup.type, joinGroup);
  yield takeLatest(actions.leaveGroup.type, leaveGroup);
  yield takeLatest(actions.generateCode.type, generateGroup);
  yield takeLatest(actions.refreshGroup.type, refresh);
}
