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
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';

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

  console.log(errormsg);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(actions.submit(values));
  };

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <span role="img" aria-label="flag">
          🍊
        </span>{' '}
        Login
      </Typography>
      <Typography paragraph>
        <Link href="/register">.. or Register here!</Link>
      </Typography>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit} noValidate>
            <Paper style={{ padding: 16 }}>
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
                <Grid item style={{ marginTop: 16 }}></Grid>
                <Grid item style={{ marginTop: 16 }}>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    disabled={isFetching}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </form>
        )}
      />
    </div>
  );
}

// const Div = styled.div``;
