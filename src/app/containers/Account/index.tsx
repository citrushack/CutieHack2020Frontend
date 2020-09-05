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
import CopyToClipboard from './CopyToClipboard';
import {
  selectAccountInfo,
  selectisFetching,
  selectError,
  selectGroup,
} from './selectors';
import accountSaga from './saga';
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

// @typescript-eslint-disable-next-line no-unused-vars
import copy from 'clipboard-copy';

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

type userDisplay = {
  firstname: string;
  lastname: string;
  id: string;
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
  //extra: 'Extra Info',
};

export function Account(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSaga });
  const classes = useStyles();
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);

  const groupInfo = useSelector(selectGroup);
  const groupExists: boolean = !!groupInfo.payload;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const account: AccountDetails = useSelector(selectAccountInfo);
  console.log(account);
  //console.log(account);
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
    'updated_by',
    'extra',
  ].forEach(elm => delete table[elm]);
  //console.log(table);
  //console.log(groupInfo);
  const onSubmit = (values: any) => {
    dispatch(actions.joinGroup(values));
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
                      <TableCell>{`${value}`}</TableCell>
                    </TableRow>
                  ),
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
            generate a code to share!
          </Typography>
        </Box>
        {errormsg !== '' && (
          <Alert severity="error">
            <AlertTitle>{errormsg}</AlertTitle>
          </Alert>
        )}
        <Paper style={{ padding: 16, margin: 32 }}>
          <Box textAlign="center">
            <Typography variant="h6" component="h1" gutterBottom>
              {!groupExists
                ? "Looks like you're not in a group"
                : 'Your group code'}{' '}
            </Typography>
            <Typography variant="h3" align="center" component="h1" gutterBottom>
              {groupInfo && groupInfo.payload && groupInfo.payload.uid}
            </Typography>
            {groupExists ? (
              <CopyToClipboard>
                {({ copy }) => (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => copy(groupInfo?.payload?.uid)}
                  >
                    Copy
                  </Button>
                )}
              </CopyToClipboard>
            ) : (
              <Button
                variant="contained"
                color="primary"
                onClick={e => {
                  e.preventDefault();
                  dispatch(actions.generateCode());
                }}
                disabled={isFetching}
              >
                Create Group
              </Button>
            )}
            {!groupExists && (
              <Typography
                style={{ marginTop: '1em' }}
                variant="h4"
                component="h1"
                gutterBottom
              >
                OR
              </Typography>
            )}
            {!groupExists && (
              <Form
                onSubmit={onSubmit}
                validate={validate}
                render={({
                  handleSubmit,
                  form,
                  submitting,
                  pristine,
                  values,
                }) => (
                  <form onSubmit={handleSubmit} noValidate>
                    <Paper style={{ padding: 16, margin: 32 }}>
                      <Typography variant="h6" component="h1" gutterBottom>
                        Join an existing group
                      </Typography>

                      <Grid
                        container
                        alignItems="center"
                        justify="center"
                        spacing={2}
                      >
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
                            Join
                          </Button>
                        </Grid>
                      </Grid>
                    </Paper>
                  </form>
                )}
              />
            )}
          </Box>
        </Paper>
        {groupExists && (
          <Paper style={{ padding: 16, margin: 32 }}>
            <Grid container alignItems="center" justify="center" spacing={2}>
              <Typography variant="h5" component="h1" gutterBottom>
                Group members
              </Typography>
              <Grid item xs={12}>
                <Box style={{ width: '70%', margin: 'auto' }}>
                  <Table style={{ marginBottom: '2em' }}>
                    <TableBody>
                      {groupInfo &&
                        groupInfo.payload &&
                        groupInfo.payload.users &&
                        Object.entries(groupInfo.payload.users).map(
                          ([key, value], idx) =>
                            value && (
                              <TableRow key={idx}>
                                <TableCell>
                                  <strong>{parseInt(key) + 1}</strong>
                                </TableCell>
                                <TableCell style={{ maxWidth: '9em' }}>
                                  {`${(value as userDisplay).firstname} ${
                                    (value as userDisplay).lastname
                                  }`}{' '}
                                </TableCell>
                                <TableCell>
                                  {' '}
                                  {/* <Button variant="contained" type="submit">
                                Kick
                              </Button> */}
                                  {(value as userDisplay).id === account.id && (
                                    <strong>You</strong>
                                  )}
                                </TableCell>
                              </TableRow>
                            ),
                        )}
                    </TableBody>
                  </Table>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={e => {
                      e.preventDefault();
                      dispatch(actions.leaveGroup());
                    }}
                    disabled={isFetching}
                  >
                    Leave Group
                  </Button>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    onClick={e => {
                      e.preventDefault();
                      dispatch(actions.refreshGroup());
                    }}
                    disabled={isFetching}
                  >
                    Refresh
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        )}
      </Paper>
    </div>
  );
}
//Edit -> username, firstname, lastname
