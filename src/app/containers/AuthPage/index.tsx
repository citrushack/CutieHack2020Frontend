/**
 *
 * AuthPage
 *
 */

import React from 'react';
// import { render } from 'react-dom';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { authPageSaga } from './saga';
import { TextField, Checkboxes } from 'mui-rff';
import { Typography, Box, Grid, Button, CssBaseline } from '@material-ui/core';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations';
import { Link } from 'react-router-dom';
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
const backendUrl = 'http://localhost:1337';

const providersNames = ['github', 'google', 'linkedin'];

const getColor = {
  google: 'rgb(66, 133, 244)',
  github: 'white',
  linkedin: '#212121',
};
const getTextColor = {
  google: 'white',
  github: '#212121',
  linkedin: 'white',
};
const getSvg = {
  google: (
    <svg
      id="googleIconSvg"
      style={{ width: '2em', marginRight: '1em' }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="-380.2 274.7 65.7 65.8"
    >
      <circle cx="-347.3" cy="307.6" r="32.9" fill="#e0e0e0" />
      <circle cx="-347.3" cy="307.1" r="32.4" fill="#fff" />
      <defs>
        <path
          id="SVGID_1_"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="SVGID_2_">
        <use xlinkHref="#SVGID_1_" overflow="visible" />
      </clipPath>
      <path
        d="M-370.8 320.3v-26l17 13z"
        clip-path="url(#SVGID_2_)"
        fill="#fbbc05"
      />
      <defs>
        <path
          id="SVGID_3_"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="SVGID_4_">
        <use xlinkHref="#SVGID_3_" overflow="visible" />
      </clipPath>
      <path
        d="M-370.8 294.3l17 13 7-6.1 24-3.9v-14h-48z"
        clip-path="url(#SVGID_4_)"
        fill="#ea4335"
      />
      <defs>
        <path
          id="SVGID_5_"
          d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
        />
      </defs>
      <clipPath id="SVGID_6_">
        <use xlinkHref="#SVGID_5_" overflow="visible" />
      </clipPath>
      <path
        d="M-370.8 320.3l30-23 7.9 1 10.1-15v48h-48z"
        clip-path="url(#SVGID_6_)"
        fill="#34a853"
      />
      <g>
        <defs>
          <path
            id="SVGID_7_"
            d="M-326.3 303.3h-20.5v8.5h11.8c-1.1 5.4-5.7 8.5-11.8 8.5-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4c-3.9-3.4-8.9-5.5-14.5-5.5-12.2 0-22 9.8-22 22s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
          />
        </defs>
        <clipPath id="SVGID_8_">
          <use xlinkHref="#SVGID_7_" overflow="visible" />
        </clipPath>
        <path
          d="M-322.8 331.3l-31-24-4-3 35-10z"
          clip-path="url(#SVGID_8_)"
          fill="#4285f4"
        />
      </g>
    </svg>
  ),
  github: (
    <svg
      style={{ width: '2em', marginRight: '1em' }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 640"
    >
      <defs>
        <path
          d="M602.14 353.68C602.14 511.7 475.86 640 320.32 640S38.5 511.7 38.5 353.68c0-158.02 126.28-286.32 281.82-286.32s281.82 128.3 281.82 286.32z"
          id="a"
        />
        <path
          d="M17.86 331.66c0 135.72 88.29 250.88 211.5 292 16.43 2.06 20.54-6.16 20.54-14.39v-53.46c-86.25 18.5-104.73-41.13-104.73-41.13-14.37-34.96-34.91-45.24-34.91-45.24-28.75-18.51 2.06-18.51 2.06-18.51 30.8 2.06 47.22 30.85 47.22 30.85 26.7 47.29 71.87 32.9 90.36 24.67 2.05-20.56 10.26-32.9 20.53-41.12-67.76-8.23-139.63-34.96-139.63-152.17 0-32.9 12.32-61.69 30.8-82.26-4.11-8.22-14.38-39.07 2.05-82.25 0 0 26.7-8.22 84.19 30.85 24.64-6.17 51.34-10.29 78.03-10.29 26.7 0 53.39 4.12 78.03 10.29 59.55-39.07 84.19-30.85 84.19-30.85 16.43 43.18 6.16 74.03 2.06 82.25 20.53 20.57 30.8 49.36 30.8 82.26 0 119.27-71.87 143.94-139.63 152.17 10.26 10.28 20.53 28.79 20.53 57.57v84.31c0 8.23 6.16 18.51 20.53 14.4 123.21-41.13 209.45-156.28 209.45-292 2.06-168.62-135.52-306.4-305.96-306.4-170.43 0-308.01 137.78-308.01 308.45z"
          id="b"
        />
      </defs>
      <use xlinkHref="#a" fill="#fff" />
      <use xlinkHref="#b" fill="#181616" />
      <use xlinkHref="#b" fill-opacity="0" stroke="#181616" stroke-width="7" />
    </svg>
  ),
  linkedin: (
    <svg
      style={{ width: '2em', marginRight: '1em' }}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <path fill="none" d="M-1-1h802v602H-1z" />
      <g>
        <path
          fill="#fff"
          d="M589.3 430.4c-41.9 0-60.7 23.1-71.1 39.2V436h-79c1 22.3 0 237.7 0 237.7h79V540.9c0-7.1.5-14.2 2.6-19.3 5.7-14.2 18.7-28.9 40.5-28.9 28.6 0 40 21.8 40 53.8v127.2h79V537.3c-.1-73-39.1-106.9-91-106.9zm-71.2 40h-.5c.2-.3.4-.5.5-.8v.8zM316.4 436h79v237.7h-79V436z"
        />
        <path
          fill="#fff"
          d="M500 12C229.8 12 10 231.8 10 502s219.8 490 490 490 490-219.8 490-490S770.2 12 500 12zm259.8 711.6c0 20.9-17.3 37.7-38.7 37.7H275.5c-21.3 0-38.6-16.8-38.6-37.7V272.7c0-20.8 17.3-37.7 38.6-37.7h445.7c21.3 0 38.7 16.9 38.7 37.7v450.9h-.1z"
        />
        <path
          fill="#fff"
          d="M356.4 321.4c-27 0-44.7 17.7-44.7 41.1 0 22.8 17.2 41.1 43.6 41.1h.5c27.6 0 44.7-18.3 44.7-41.1-.4-23.4-17.1-41.1-44.1-41.1z"
        />
      </g>
    </svg>
  ),
};
const LoginButton = props => (
  <a href={`${backendUrl}/connect/${props.providerName}`}>
    <Button
      variant="contained"
      size="large"
      style={{
        width: '100%',
        marginBottom: '1em',
        color: getTextColor[props.providerName],
        backgroundColor: getColor[props.providerName],
        borderRadius: '2em',
        paddingTop: '1em',
        paddingBottom: '1em',
      }}
    >
      {getSvg[props.providerName]}
      <strong>Login With {props.providerName}</strong>
    </Button>
  </a>
);

export function AuthPage(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: authPageSaga });

  const buttons = (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {providersNames.map((providerName, i) => (
        <li key={providerName}>
          <LoginButton providerName={providerName} />
        </li>
      ))}
    </ul>
  );

  let text = 'Log in or sign up using a service below';

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
          <Typography variant="h5" style={{ marginBottom: '1em' }}>
            {text}
          </Typography>
          {buttons}
          {/* <Form
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
          /> */}
        </motion.div>
      </motion.div>
    </>
  );
}

// const Div = styled.div``;
