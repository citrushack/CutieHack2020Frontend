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
import { selectAccount, selectAccountInfo } from './selectors';
import { accountSaga } from './saga';
import { AccountDetails } from './types';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
} from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
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
  extr: 'Extra',
};

export function Account(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: accountSaga });
  const classes = useStyles();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const account: AccountDetails = useSelector(selectAccountInfo);
  //strip out extra things from account data
  const {
    blocked,
    confirmed,
    created_at,
    id,
    provider,
    resume,
    role,
    updated_at,
    year,
    ...table
  } = account;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();
  //console.log(table);
  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
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
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="center" justify="center">
          <Table style={{ marginBottom: '1em' }}>
            <TableBody>
              {Object.entries(table).map(
                ([key, value], index) =>
                  value && (
                    <TableRow key={index}>
                      <TableCell>
                        <strong>{displayNames[key] || key}</strong>
                      </TableCell>
                      <TableCell>{value}</TableCell>
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
    </div>
  );
}
//Edit -> username, firstname, lastname
