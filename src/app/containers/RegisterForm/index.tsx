/**
 *
 * RegisterForm
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
//import styled from 'styled-components/macro';
import { Form, Field } from 'react-final-form';
import { actions } from './slice';
import { countries, unis, majors } from './data';
//import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectError, selectisFetching } from './selectors';
import { registerFormSaga } from './saga';
//import { makeStyles } from '@material-ui/core/styles';
import { TextField, Autocomplete, AutocompleteData } from 'mui-rff';
//import { Checkbox as MuiCheckbox } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { createFilterOptions } from '@material-ui/lab';

import {
  Typography,
  Paper,
  Link,
  Grid,
  Card,
  Button,
  CssBaseline,
} from '@material-ui/core';
import Dropzone from './Dropzone';

interface Props {}
type validationError = {
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  country: string;
  school: string;
  password: string;
  passwordConfirm: string;
  resume: string;
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
const validate = values => {
  const errors = {} as validationError;
  if (!values.email) {
    errors.email = 'Required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Email not valid';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.passwordConfirm) {
    errors.passwordConfirm = 'Required';
  }
  if (values.password !== values.passwordConfirm) {
    errors.passwordConfirm = 'Passwords must match';
  }
  if (!values.resume) {
    errors.resume = 'Required';
  }
  if (!values.country) errors.country = 'Required';
  if (!values.username) errors.username = 'Required';
  if (!values.firstname) errors.firstname = 'Required';
  if (!values.lastname) errors.lastname = 'Required';
  //console.log(values);
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
        label="Address Line 1"
        name="addr1"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
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
      />
    ),
  },
  {
    size: 12,
    field: <TextField label="City" name="city" margin="none" required={true} />,
  },
  {
    size: 12,
    field: (
      <TextField label="State" name="State" margin="none" required={false} />
    ),
  },
  {
    size: 12,
    field: <TextField label="Zip" name="zip" margin="none" required={false} />,
  },
];
const loginInfo: formTypes = [
  {
    size: 12,
    field: (
      <TextField
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
        inputProps={{
          autocomplete: 'new-password',
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
        inputProps={{
          autocomplete: 'new-password',
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
    size: 12,
    field: (
      <TextField
        label="First name"
        name="firstname"
        margin="none"
        required={true}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
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
        required={false}
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
        required={false}
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
        required={false}
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
];
const filter = createFilterOptions<AutocompleteData>();
const hackerInfo: formTypes = [
  {
    size: 12,
    field: (
      <TextField
        label="Github profile link"
        multiline
        name="github"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
        label="Linkedin profile link"
        multiline
        name="linkedin"
        margin="none"
        required={false}
      />
    ),
  },
  {
    size: 12,
    field: (
      <TextField
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
  const dispatch = useDispatch();
  const onSubmit = (values: any) => {
    dispatch(actions.submit(values));
  };
  const errormsg = useSelector(selectError);
  const isFetching = useSelector(selectisFetching);

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
      <CssBaseline />
      <Typography variant="h4" align="center" component="h1" gutterBottom>
        <span role="img" aria-label="flag">
          🍊
        </span>{' '}
        Apply for Cutie Hack{' '}
        <span role="img" aria-label="flag">
          🍊
        </span>{' '}
      </Typography>
      <Typography align="center" paragraph>
        <Link align="center" href="/auth">
          If you've already applied, login here{' '}
          <span role="img" aria-label="flag">
            ➡️
          </span>
        </Link>
      </Typography>
      <Paper style={{ padding: 16 }}>
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
                <Grid item style={{ marginTop: 16 }}>
                  <Typography variant="h4" align="left" component="h1">
                    1. Login info
                  </Typography>
                </Grid>
                {loginInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Typography variant="h4" align="left" component="h1">
                    2. Check-in
                  </Typography>
                </Grid>
                {checkIn.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Typography variant="h4" align="left" component="h1">
                    3. Demographics
                  </Typography>
                </Grid>
                {demoInfo.map((item, idx) => (
                  <Grid item xs={item.size} key={idx}>
                    {item.field}
                  </Grid>
                ))}
                <Grid item style={{ marginTop: 16 }}>
                  <Typography variant="h4" align="left" component="h1">
                    3. Hacker app
                  </Typography>
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
            </form>
          )}
        />
      </Paper>
    </div>
  );
}
