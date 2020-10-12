import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';
import { useSignIn } from 'react-auth-kit';
import { fetch } from 'whatwg-fetch';
const backendUrl = 'https://cutiehack.io/api';

const LoginRedirect = props => {
  const [text, setText] = useState('Loading...');
  const location = useLocation();
  const params = useParams();
  const history = useHistory();
  const signIn = useSignIn();

  useEffect(() => {
    // Successfully logged with the provider
    // Now logging with strapi by using the access_token (given by the provider) in props.location.search
    fetch(
      `${backendUrl}/auth/${params.providerName}/callback${location.search}`,
    )
      .then(res => {
        if (res.status !== 200) {
          console.log(res);
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        console.log(res.status);
        console.log(res.statusCode);
        return res;
      })
      .then(res => res.json())
      .then(res => {
        // Successfully logged with Strapi
        // Now saving the jwt to use it for future authenticated requests to Strapi
        // auth.setToken(res.jwt, true);
        // auth.setUserInfo(res.user, true);
        if (
          signIn({
            token: res.jwt,
            expiresIn: 10080,
            tokenType: 'Bearer',
            authState: res.user,
          })
        ) {
          setText('Loading...');
          if (res.user.appComplete) {
            setTimeout(() => history.push('/account'), 1000);
          } else {
            setTimeout(() => history.push('/apply'), 1000);
          }
        }
      })
      .catch(err => {
        console.log(err);
        setText('An error occured, please see the developer console.');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history, location.search, params.providerName]);

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
          whileHover={{
            x: 5,
            boxShadow: '20px 20px 0px -7px rgba(0, 0, 0, 0.45)',
          }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="scaleDiv"
        >
          <h1 className="title">
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
            {text}{' '}
            <span role="img" aria-label="flag">
              🍊
            </span>{' '}
          </h1>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default LoginRedirect;
