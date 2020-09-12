import React from 'react';
import { Helmet } from 'react-helmet-async';

import { CssBaseline, Typography } from '@material-ui/core';
import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';

// export class HomePage extends React.Component {
// state = { showButton: false };

// componentDidMount() {
//   if (auth.getToken()) {
//     this.setState({ showButton: true });
//   }
// }

// render() {

export function HomePage() {
  return (
    <motion.div
      className="mainCard"
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
    </motion.div>
  );
}
