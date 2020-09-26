/**
 *
 * Account
 *
 */

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import CopyToClipboard from './CopyToClipboard';
import {
  selectisFetching,
  selectError,
  selectGroup,
  selectStatusInfo,
} from './selectors';
import accountSaga from './saga';
import { AccountDetails } from './types';
import { actions } from './slice';
import { useAuthUser } from 'react-auth-kit';

import {
  Typography,
  Paper,
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
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
const useMountEffect = fun => useEffect(fun, []);
function getStatus(appstatus) {
  if (appstatus === undefined)
    return <span style={{ color: '#fffc37' }}>Pending </span>;
  if (appstatus === false)
    return <span style={{ color: 'rgb(255, 143, 143)' }}>Denied </span>;
  if (appstatus === true)
    return <span style={{ color: 'rgb(178, 255, 9)' }}>Accepted </span>;
}
export function Account(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSaga });
  const classes = useStyles();
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:600px)');

  const groupInfo = useSelector(selectGroup);
  const groupExists: boolean = !!groupInfo.payload;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const authU = useAuthUser();
  const statusPayload = useSelector(selectStatusInfo);

  if (!authU) {
    return (
      <motion.div exit="undefined">
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          style={{ marginBottom: '2em' }}
          variants={pageVariants}
          transition={{
            duration: 0.5,
            ease: [0.43, 0.13, 0.23, 0.96],
            staggerChildren: 0.5,
          }}
        >
          <div className="titleDiv">
            <h1 className="title">
              <span role="img" aria-label="flag">
                🍊
              </span>{' '}
              Loading... &nbsp;
              <span role="img" aria-label="flag">
                🍊
              </span>{' '}
            </h1>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  //console.log(account);
  //console.log(account);
  // const table = Object.assign({}, authU());
  // //Values to hide
  // [
  //   'blocked',
  //   'confirmed',
  //   'created_at',
  //   '_id',
  //   'id',
  //   '__v',
  //   'provider',
  //   'role',
  //   'resume',
  //   'group',
  //   'createdAt',
  //   'updatedAt',
  //   'year',
  //   'updated_by',
  //   'extra',
  // ].forEach(elm => delete table[elm]);
  //console.log(table);
  //console.log(groupInfo);
  const onSubmit = (values: any) => {
    dispatch(actions.joinGroup(values));
  };
  if (statusPayload.payload) console.log(statusPayload.payload.status);
  //console.log(table);
  return (
    <motion.div exit="undefined">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        style={{ marginBottom: '2em' }}
        variants={pageVariants}
        transition={{
          duration: 0.5,
          ease: [0.43, 0.13, 0.23, 0.96],
          staggerChildren: 0.5,
        }}
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
            Application status:{' '}
            {statusPayload.payload
              ? getStatus(statusPayload.payload.status)
              : 'Loading...'}
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
          </h1>
          {/* <p style={{ textAlign: 'center' }}>
            <Link
              style={{ color: '#212121', textDecoration: 'none' }}
              to="/apply"
            >
              Or register an account here{' '}
              <span role="img" aria-label="flag">
                ➡️
              </span>
            </Link>
          </p> */}
        </motion.div>
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mainCard accTable"
        >
          <Helmet>
            <title>My Application</title>
            <meta name="description" content=" My Application" />
          </Helmet>
          <CssBaseline />
          <Grid container alignItems="center" justify="center">
            <Grid item xs={12}></Grid>
            <Typography
              style={{
                fontFamily: "'Libre Baskerville', serif",
                fontSize: '1.5em',
                fontWeight: 800,
              }}
              align="center"
              variant="h5"
              component="h1"
            >
              You're all set, {authU().firstname}!<br></br>
              <br></br>
              Check back another time to see your status, or create a group
              below if you're hacking with a friend.
            </Typography>
            {/* <Table style={{ marginBottom: '1em' }}>
              <TableBody>
                {Object.entries(table).map(
                  ([key, value], idx) =>
                    value && (
                      <TableRow key={idx}>
                        <TableCell>
                          <strong>{displayNames[key] || key}</strong>
                        </TableCell>
                        <TableCell align="right">{`${value}`}</TableCell>
                      </TableRow>
                    ),
                )}
              </TableBody>
            </Table> */}
            {/* <Grid item xs={6}>
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
            </Grid> */}
          </Grid>
        </motion.div>
        {/* <h1 style={{ marginTop: '2.5em' }} className="title">
          <span role="img" aria-label="flag">
            🧑‍🤝‍🧑
          </span>{' '}
          Groups&nbsp;
          <span role="img" aria-label="flag">
            🧑‍🤝‍🧑
          </span>{' '}
        </h1> */}

        {errormsg !== '' && (
          <Alert severity="error">
            <AlertTitle>{errormsg}</AlertTitle>
          </Alert>
        )}
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="groupCard"
        >
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
                style={{
                  background: 'url("/images/asfalt-dark-light.png"), #ADDE8E',
                  color: 'black',
                  // boxShadow: '3px 3px 0px -1px rgba(0, 0, 0, 0.45)',
                  border: '1px solid black',
                }}
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
                    <motion.div
                      initial="initial"
                      animate="in"
                      exit="out"
                      variants={pageVariants}
                      transition={{
                        duration: 0.5,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                      className="joinGroup"
                    >
                      <Typography
                        variant="h6"
                        component="h1"
                        style={{ marginBottom: '1.5em' }}
                        gutterBottom
                      >
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
                            variant="outlined"
                          />
                        </Grid>
                        <Grid item style={{ marginTop: 16 }}></Grid>
                        <Grid
                          item
                          xs={matches ? 3 : 12}
                          style={{ marginTop: 16 }}
                        >
                          <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            style={{ width: '100%' }}
                            disabled={isFetching}
                          >
                            Join
                          </Button>
                        </Grid>
                      </Grid>
                    </motion.div>
                  </form>
                )}
              />
            )}
          </Box>
        </motion.div>
        {groupExists && (
          <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="joinGroup"
          >
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
                                <TableCell
                                  style={{
                                    maxWidth: '9em',
                                    textAlign: 'right',
                                  }}
                                >
                                  {`${(value as userDisplay).firstname} ${
                                    (value as userDisplay).lastname
                                  }`}{' '}
                                </TableCell>
                                {/* <TableCell> */}{' '}
                                {/* <Button variant="contained" type="submit">
                                Kick
                              </Button> */}
                                {/* {(value as userDisplay).id === account.id && (
                                    <strong>Me</strong>
                                  )}
                                </TableCell> */}
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
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
//Edit -> username, firstname, lastname
