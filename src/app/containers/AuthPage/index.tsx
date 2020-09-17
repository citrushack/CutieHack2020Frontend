/**
 *
 * AuthPage
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { render } from 'react-dom';
import { actions } from './slice';
import { Form } from 'react-final-form';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectisFetching, selectError } from './selectors';
import { authPageSaga } from './saga';
import { TextField, Checkboxes } from 'mui-rff';
import { Typography, Box, Grid, Button, CssBaseline } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations';
import { useHistory, Link } from 'react-router-dom';

type validationError = {
  username: string;
  password: string;
};

const validate = values => {
  const errors = {} as validationError;
  if (!values.username) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

interface Props {}

interface Values {
  identifier: string;
  password: string;
  rememberMe?: boolean;
}

interface formType {
  size: boolean | 12 | 1 | 2 | 3 | 'auto' | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  field: React.ReactNode;
}
type formTypes = formType[];

const formFields: formTypes = [
  {
    size: 12,
    field: (
      <TextField
        label="Username or email"
        variant="outlined"
        name="username"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        label="Password"
        name="password"
        variant="outlined"
        type="password"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Checkboxes
        name="rememberMe"
        formControlProps={{ margin: 'none' }}
        data={{ label: 'Remember me', value: true }}
      />
    ),
  },
];

export function AuthPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authPageSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const authPage = useSelector(selectAuthPage);
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);
  let history = useHistory().push;
  //console.log(errormsg);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(actions.submit({ ...values, history: history }));
  };

  return (
    <>
      <motion.div
        initial="initial"
        exit="out"
        variants={pageVariants}
        animate={'in'}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="titleDiv"
      >
        <motion.div
          whileHover={
            {
              x: 5,
              boxShadow: '20px 20px 0px -7px rgba(0, 0, 0, 0.45)',
            } as any
          }
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="scaleDiv"
        >
          <h1 className="title">
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
            Login{' '}
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
          </h1>
          <p style={{ textAlign: 'center' }}>
            <Link
              style={{ color: '#212121', textDecoration: 'none' }}
              to="/apply"
            >
              Or register an account here{' '}
              <span role="img" aria-label="flag">
                ➡️
              </span>
            </Link>
          </p>
        </motion.div>
      </motion.div>
      <motion.div
        initial="initial"
        exit="out"
        variants={pageVariants}
        animate={'in'}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="titleDiv"
      >
        <motion.div
          whileHover={
            {
              x: 5,
              boxShadow: '20px 20px 0px -7px rgba(0, 0, 0, 0.45)',
            } as any
          }
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mainCard authCard"
        >
          <CssBaseline />

          <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit, form, submitting, pristine, values }) => (
              <form onSubmit={handleSubmit} noValidate>
                {errormsg !== '' && (
                  <Alert severity="error">
                    <AlertTitle>{errormsg}</AlertTitle>
                  </Alert>
                )}
                <Grid container alignItems="flex-start" spacing={2}>
                  {formFields.map((item, idx) => (
                    <Grid item xs={item.size} key={idx}>
                      {item.field}
                    </Grid>
                  ))}
                  <Box width="100%" style={{ marginTop: 16 }}>
                    <Button
                      style={{ width: '100%' }}
                      variant="contained"
                      color="primary"
                      type="submit"
                      disabled={isFetching}
                    >
                      Submit
                    </Button>
                  </Box>
                </Grid>
              </form>
            )}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

// const Div = styled.div``;
