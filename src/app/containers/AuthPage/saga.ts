// import { all, call, select, takeLatest, put } from 'redux-saga/effects';
// import { actions } from './slice';
// import request from 'utils/request';

//import { useHistory } from 'react-router-dom';
//import React from "react";
// import { selectFormData } from './selectors';
//import {  postDataPayload } from './types';
//import { format } from 'url';
export function* login() {
  // //Select the form data
  // const formData = yield select(selectFormData);
  // try {
  //   //Get submit action payload
  //   //Generate request body from payload
  //   const body = {
  //     identifier: formData.payload.username,
  //     password: formData.payload.password,
  //   };
  //   const requestURL = 'https://cutiehack.io/api/auth/local';
  //   //console.log(body);
  //   //Request auth
  //   const response = yield call(request, requestURL, {
  //     method: 'POST',
  //     body,
  //   });
  //   if (response.jwt) {
  //     // Set the user's credentials
  //     yield all([
  //       call(auth.setToken, response.jwt, formData.payload.rememberMe),
  //       call(auth.setUserInfo, response.user, formData.payload.rememberMe),
  //     ]);
  //     yield call(formData.payload.history, '/account');
  //   }
  // } catch (error) {
  //   if (error && error.response) {
  //     console.log(error.response.payload.message[0].messages[0].message);
  //     yield put(
  //       actions.submitFailed({
  //         message: error.response.payload.message[0].messages[0].message,
  //       }),
  //     );
  //   }
  // }
}

export function* authPageSaga() {
  // yield takeLatest(actions.submit.type, login);
}
