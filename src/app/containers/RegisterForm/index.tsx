/**
 *
 * RegisterForm
 *
 */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components/macro';
import { Form, Field } from 'react-final-form';
import { actions } from './slice';
import { countries, unis, majors } from './data';
//import styled from 'styled-components/macro';
import { useSignIn } from 'react-auth-kit';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectError, selectisFetching } from './selectors';
import { registerFormSaga } from './saga';
//import { makeStyles } from '@material-ui/core/styles';
import { TextField, Autocomplete, AutocompleteData } from 'mui-rff';
//import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { createFilterOptions } from '@material-ui/lab';
import { postDataPayload } from './types';
import {
  Typography,
  Box,
  Link,
  Grid,
  Card,
  Button,
  CssBaseline,
} from '@material-ui/core';
import Dropzone from './Dropzone';
import { useHistory, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { pageVariants } from '../../animations';
import useMediaQuery from '@material-ui/core/useMediaQuery';

interface Props {}
type validationError = postDataPayload & {
  passwordConfirm: string;
};

const genders = [
  { label: '♀️ Female', value: 'Female' },
  { label: '♂️ Male', value: 'Male' },
  { label: '🏳️‍🌈 Non-Binary', value: 'Non-Binary' },
  { label: '🤷🏿‍♀️ Prefer Not to Say', value: 'N/A' },
];
function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
function validateLinkedin(url) {
  const re = /(https?:\/\/(.+?\.)?linkedin\.com(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?)/;
  return re.test(url);
}
function validateGithub(url) {
  const re = /(https?:\/\/(.+?\.)?github\.com(\/[A-Za-z0-9\-._~:/?#[\]@!$&'()*+,;=]*)?)/;
  return re.test(url);
}
function validateYear(year) {
  const re = /^(19|20)\d{2}$/;
  return re.test(year);
}
const validate = values => {
  const errors = {} as validationError;
  // if (!values.email) {
  //   errors.email = 'Required';
  // } else if (!validateEmail(values.email)) {
  //   errors.email = 'Email not valid';
  // }

  if (!values.github) {
    errors.github = 'Required';
  } else if (!validateGithub(values.github)) {
    errors.github = 'Invalid url';
  }

  if (!values.linkedin) {
    errors.linkedin = 'Required';
  } else if (!validateLinkedin(values.linkedin)) {
    errors.linkedin = 'Invalid url';
  }

  if (!values.year) {
    errors.year = 'Required';
  } else if (!validateYear(values.year)) {
    errors.year = 'Invalid year';
  }

  // if (!values.password) errors.password = 'Required';
  // if (!values.passwordConfirm) errors.passwordConfirm = 'Required';
  // if (values.password !== values.passwordConfirm)
  //   errors.passwordConfirm = 'Passwords must match';
  if (!values['addr1']) errors['addr1'] = 'Required';
  if (!values.resume) errors.resume = 'Resume upload required';
  if (!values.country) errors.country = 'Required';
  if (!values.city) errors.city = 'Required';
  if (!values.state) errors.state = 'Required';
  if (!values.zip) errors.zip = 'Required';
  // if (!values.username) errors.username = 'Required';
  if (!values.firstname) errors.firstname = 'Required';
  if (!values.lastname) errors.lastname = 'Required';
  // if (!values.school) errors.school = 'Required';
  // if (!!!values.major) errors.major = 'Required';
  if (!values.gender) errors.gender = 'Required';

  return errors;
};
interface Props {}
interface Values {
  identifier: string;
  password: string;
  rememberMe?: boolean;
}
function countryToFlag(isoCode) {
  return typeof String.fromCodePoint !== 'undefined'
    ? isoCode
        .toUpperCase()
        .replace(/./g, char =>
          String.fromCodePoint(char.charCodeAt(0) + 127397),
        )
    : isoCode;
}
interface formType {
  size: boolean | 12 | 1 | 2 | 3 | 'auto' | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  field: React.ReactNode;
}
type formTypes = formType[];

const checkIn: formTypes = [
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Address Line 1"
        name="addr1"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Address Line 2"
        name="addr2"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Country"
        name="country"
        required={true}
        options={countries}
        getOptionValue={option => option.code}
        getOptionLabel={option => option.label}
        disableCloseOnSelect={true}
        renderOption={option => (
          <React.Fragment>
            <span>{countryToFlag(option.code)} </span>
            &nbsp; {option.label} ({option.code})
          </React.Fragment>
        )}
        selectOnFocus
        autoHighlight
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="City"
        name="city"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="State"
        name="state"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Zip"
        name="zip"
        margin="none"
        required={true}
      />
    ),
  },
];
const loginInfo: formTypes = [
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Username"
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
        variant="outlined"
        label="Email"
        name="email"
        margin="none"
        required={true}
        type="email"
      />
    ),
  },

  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        inputProps={{
          autoComplete: 'new-password',
        }}
        label="Password"
        name="password"
        type="password"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        inputProps={{
          autoComplete: 'new-password',
        }}
        label="Confirm Password"
        name="passwordConfirm"
        type="password"
        margin="none"
        required={true}
      />
    ),
  },
];

const demoInfo: formTypes = [
  {
    size: 6,
    field: (
      <TextField
        variant="outlined"
        label="First name"
        name="firstname"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 6,
    field: (
      <TextField
        variant="outlined"
        label="Last name"
        name="lastname"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Gender"
        name="gender"
        required={true}
        options={genders}
        getOptionValue={option => option.value}
        getOptionLabel={option => option.label}
        renderOption={option => <React.Fragment>{option.label}</React.Fragment>}
        selectOnFocus
        autoHighlight
        autoSelect
        handleHomeEndKeys
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="School"
        name="school"
        required={true}
        options={unis}
        freeSolo
        getOptionValue={option => option.uni}
        getOptionLabel={option => option?.uni || `${option}`}
        renderOption={option => option.uni}
        disableCloseOnSelect={false}
        onChange={(_event, newValue, reason, details) => {
          if (newValue && reason === 'select-option' && details?.option.uni) {
            // Create a new value from the user input
            unis.push({
              uni: details?.option.uni,
            });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          //console.log(filtered);
          // Suggest the creation of a new value
          if (params.inputValue.length) {
            filtered.push({
              uni: params.inputValue,
            });
          }

          return filtered;
        }}
        selectOnFocus
        autoHighlight
        autoSelect
        handleHomeEndKeys
        clearOnBlur
      />
    ),
  },
  {
    size: 12,
    field: (
      <Autocomplete
        label="Major"
        name="major"
        required={true}
        options={majors}
        freeSolo
        getOptionValue={option => option?.major}
        getOptionLabel={option => option?.major || `${option}`}
        renderOption={option => option?.major}
        disableCloseOnSelect={false}
        onChange={(_event, newValue, reason, details) => {
          if (newValue && reason === 'select-option' && details?.option.major) {
            // Create a new value from the user input
            majors.push({
              major: details?.option.major,
            });
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);
          //console.log(filtered);
          // Suggest the creation of a new value
          if (params.inputValue.length) {
            filtered.push({
              major: params.inputValue,
            });
          }

          return filtered;
        }}
        selectOnFocus
        autoHighlight
        autoSelect
        handleHomeEndKeys
        clearOnBlur
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Year"
        name="year"
        margin="none"
        required={true}
      />
    ),
  },
];
const filter = createFilterOptions<AutocompleteData>();
const hackerInfo: formTypes = [
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Github profile link"
        name="github"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Linkedin profile link"
        name="linkedin"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        variant="outlined"
        label="Anything you'd like to add?"
        multiline
        name="extra"
        margin="none"
        required={false}
      />
    ),
  },
];

const initialValues: any = {};

export function RegisterForm(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: registerFormSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  //const authPage = useSelector(selectRegisterForm);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const signIn = useSignIn();
  let history = useHistory();
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(
      actions.submit({ ...values, history: history.push, signIn: signIn }),
    );
  };
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <motion.div exit="undefined">
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
            Apply for Cutie Hack{' '}
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
          </h1>
          <Typography align="center" paragraph>
            <Link
              align="center"
              onClick={() => {
                history.push('/auth');
              }}
            >
              If you've already applied, login here{' '}
              <span role="img" aria-label="flag">
                ➡️
              </span>
            </Link>
          </Typography>
        </motion.div>
      </motion.div>

      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="mainCard applyBody"
      >
        <CssBaseline />
        {errormsg !== '' && (
          <Alert severity="error">
            <AlertTitle>{errormsg}</AlertTitle>
          </Alert>
        )}
        <Form
          onSubmit={onSubmit}
          validate={validate}
          initialValues={initialValues}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            errors,
            submitFailed,
          }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Grid container alignItems="flex-start" spacing={2}>
                {/*<Grid item>
                   <Box>
                    <h2>Login info</h2>
                    <Typography> Enter some basic account details.</Typography>
                  </Box>
                </Grid>
                {loginInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))} */}
                <Grid item>
                  <Box style={{ marginTop: 16 }}>
                    <h2>Check-in</h2>
                    <Typography>
                      {' '}
                      We only need this to distribute prizes, we won't share
                      your address with anyone.
                    </Typography>
                  </Box>
                </Grid>
                {checkIn.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item xs={12} style={{ marginTop: 16 }}>
                  <h2>Demographics</h2>
                  <Typography> Tell us more about yourself.</Typography>
                </Grid>
                {demoInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16, marginBottom: 20 }}>
                  <h2>Hacker app</h2>
                  <Typography> Are you a worthy opponent? </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Card
                    raised={true}
                    style={{ padding: 16, backgroundColor: '#f7f7f7' }}
                  >
                    <Field required={true} name="resume">
                      {props => <Dropzone {...props.input} />}
                    </Field>
                  </Card>
                  {submitFailed && errors.resume && (
                    <>
                      <br></br>
                      <Alert severity="error">
                        <AlertTitle>{errors.resume}</AlertTitle>
                      </Alert>
                    </>
                  )}{' '}
                </Grid>
                {hackerInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid
                  container
                  direction="row"
                  justify="flex-end"
                  alignItems="center"
                >
                  <Grid
                    item
                    xs={matches ? 12 : 12}
                    style={{
                      marginTop: 16,
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      type="submit"
                      size="large"
                      disabled={isFetching}
                      style={{
                        width: '100%',
                        background:
                          'url("/images/asfalt-dark-light.png"), #9be36d',
                        color: 'black',
                      }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          )}
        />
      </motion.div>
    </motion.div>
  );
}
