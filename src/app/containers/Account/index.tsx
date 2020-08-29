/**
 *
 * Account
 *
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectAccountInfo, selectisFetching, selectError } from './selectors';
import { accountSaga } from './saga';
import { AccountDetails } from './types';
import { actions } from './slice';

import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  Box,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from 'mui-rff';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Form } from 'react-final-form';

interface Props {}
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  editButton: {
    textAlign: 'center',
    display: 'block',
    margin: 'auto',
  },
}));

type validationError = {
  groupCode: string;
};

const validate = values => {
  const errors = {} as validationError;
  if (!values.groupCode) {
    errors.groupCode = 'Invalid code';
  }
  return errors;
};

const displayNames = {
  username: 'Username',
  email: 'Email',
  firstname: 'First Name',
  lastname: 'Last Name',
  school: 'School',
  major: 'Major',
  linkedin: 'Linkedin',
  github: 'Github',
  addr1: 'Address Line 1',
  addr2: 'Address Line 2',
  country: 'Country',
  city: 'City',
  state: 'State',
  zip: 'Zip',
  gender: 'Gender',
  extra: 'Extra Info',
};

const groupMembers = {
  1: 'James',
  2: 'Bobbeth',
  3: 'Broseph',
};

export function Account(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSaga });
  const classes = useStyles();
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const account: AccountDetails = useSelector(selectAccountInfo);
  console.log(account);
  const table = Object.assign({}, account);
  //Values to hide
  [
    'blocked',
    'confirmed',
    'created_at',
    '_id',
    'id',
    '__v',
    'provider',
    'role',
    'resume',
    'group',
    'createdAt',
    'updatedAt',
    'year',
  ].forEach(elm => delete table[elm]);
  console.log(table);

  const onSubmit = (values: any) => {
    dispatch(actions.submit(values));
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  //console.log(table);
  return (
    <div
      style={{ padding: 16, margin: 'auto', maxWidth: 600, marginTop: '1.5em' }}
    >
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <span role="img" aria-label="flag">
          🍊
        </span>{' '}
        My Application &nbsp;
        <span role="img" aria-label="flag">
          🍊
        </span>{' '}
      </Typography>
      <Helmet>
        <title>My Application</title>
        <meta name="description" content=" My Application" />
      </Helmet>
      <CssBaseline />
      <Paper style={{ padding: 16, marginBottom: '3em' }}>
        <Grid container alignItems="center" justify="center">
          <Table style={{ marginBottom: '1em' }}>
            <TableBody>
              {Object.entries(table).map(
                ([key, value], idx) =>
                  value && (
                    <TableRow key={idx}>
                      <TableCell>
                        <strong>{displayNames[key] || key}</strong>
                      </TableCell>
                      <TableCell>{value}</TableCell>
                    </TableRow>
                  ),
              )}
              {account.resume && (
                <TableRow>
                  <TableCell>
                    <strong>Resume</strong>
                  </TableCell>
                  <TableCell>
                    <Link href={'http://localhost:1337' + account.resume.url}>
                      {account.resume.name}
                    </Link>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.editButton}
            >
              Change Email
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.editButton}
            >
              Change Password
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <span role="img" aria-label="flag">
          🧑‍🤝‍🧑
        </span>{' '}
        Groups&nbsp;
        <span role="img" aria-label="flag">
          🧑‍🤝‍🧑
        </span>{' '}
      </Typography>
      <Paper style={{ padding: 16 }}>
        <Box textAlign="center">
          <Typography variant="body1" gutterBottom>
            Plan on hacking with a friend? Enter your group code below, or
            generate a code to create one!
          </Typography>
        </Box>
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16, margin: 32 }}>
                <Typography variant="h6" component="h1" gutterBottom>
                  Join a group
                </Typography>
                {errormsg !== '' && (
                  <Alert severity="error">
                    <AlertTitle>{errormsg}</AlertTitle>
                  </Alert>
                )}
                <Grid container alignItems="flex-start" spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="Group Code"
                      name="groupCode"
                      margin="none"
                      required={true}
                    />
                  </Grid>
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
        <Paper style={{ padding: 16, margin: 32 }}>
          <Box textAlign="center">
            <Typography variant="h6" component="h1" gutterBottom>
              Create a group code
            </Typography>
            <Typography variant="h3" align="center" component="h1" gutterBottom>
              GBXL52A
            </Typography>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={e => {
                e.preventDefault();
                dispatch(actions.generateCode());
              }}
              disabled={isFetching}
            >
              Get Code
            </Button>
          </Box>
        </Paper>
        <Paper style={{ padding: 16, margin: 32 }}>
          <Box textAlign="left">
            <Typography variant="h6" component="h1" gutterBottom>
              Group members (max: 4)
            </Typography>
            <Table style={{ marginBottom: '1em' }}>
              <TableBody>
                {Object.entries(groupMembers).map(
                  ([key, value], idx) =>
                    value && (
                      <TableRow key={idx}>
                        <TableCell>
                          <strong>{key}</strong>
                        </TableCell>
                        <TableCell>{value}</TableCell>
                        <TableCell>
                          {' '}
                          <Button variant="contained" type="submit">
                            Kick
                          </Button>
                        </TableCell>
                      </TableRow>
                    ),
                )}
              </TableBody>
            </Table>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isFetching}
            >
              Leave Group
            </Button>
          </Box>
        </Paper>
      </Paper>
    </div>
  );
}
//Edit -> username, firstname, lastname
