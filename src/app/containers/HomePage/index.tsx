import React from 'react';
import { Helmet } from 'react-helmet-async';

import { CssBaseline, Typography } from '@material-ui/core';
import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';
import { useAuthUser, useSignIn, useAuthHeader } from 'react-auth-kit';

// export class HomePage extends React.Component {
// state = { showButton: false };

// componentDidMount() {
//   if (auth.getToken()) {
//     this.setState({ showButton: true });
//   }
// }

// render() {

export function HomePage() {
  // const authU = useAuthUser();
  // const authHeader = useAuthHeader();
  // const signIn = useSignIn();

  // if (authU()) console.log(authU());
  // if (signIn)
  //   signIn({
  //     token: authHeader().toString().split(' ')[1],
  //     expiresIn: 10080,
  //     tokenType: 'Bearer',
  //     authState: Object.assign(authU(), { newVal: 'newVal' }),
  //   });
  // if (authHeader()) console.log(authHeader());

  return (
    <motion.div
      className="mainCard"
      initial="initial"
      whileHover={{
        boxShadow: '20px 20px 0px -7px rgba(0, 0, 0, 0.45)',
        x: 5,
      }}
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
      <Typography
        variant="h4"
        align="left"
        component="h1"
        gutterBottom
      ></Typography>
    </motion.div>
  );
}
