import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import auth from 'utils/auth';
import { Button, CssBaseline, Typography } from '@material-ui/core';
import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';
import { useHistory } from 'react-router-dom';

// export class HomePage extends React.Component {
// state = { showButton: false };

// componentDidMount() {
//   if (auth.getToken()) {
//     this.setState({ showButton: true });
//   }
// }

// render() {

export function HomePage() {
  const [showButton, setshowButton] = useState(!!auth.getToken());
  const logout = e => {
    e.preventDefault();
    auth.clearAppStorage();
    setshowButton(false);
  };
  let history = useHistory();
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <CssBaseline></CssBaseline>
      <Helmet>
        <title>Cutie Hack</title>
        <meta name="description" content="Cutie Hack" />
      </Helmet>
      <Typography variant="h4" align="left" component="h1" gutterBottom>
        HomePage container
      </Typography>

      {showButton ? (
        <>
          <Button onClick={logout} color="primary" variant="contained">
            Logout
          </Button>
          <Button
            onClick={e => {
              history.push('/account');
            }}
            color="primary"
            variant="contained"
          >
            My Account
          </Button>
        </>
      ) : (
        <div>
          <Button
            onClick={e => {
              history.push('/auth');
            }}
            color="primary"
            variant="contained"
          >
            Login
          </Button>
          <Button
            onClick={e => {
              history.push('/register');
            }}
            color="primary"
            variant="contained"
          >
            Apply
          </Button>
        </div>
      )}
    </motion.div>
  );
}
