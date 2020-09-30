import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { CssBaseline, Typography } from '@material-ui/core';
import { pageVariants } from '../../animations';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { motion } from 'framer-motion';
import { randomInt } from 'crypto';
// import { useAuthUser, useSignIn, useAuthHeader } from 'react-auth-kit';

// export class HomePage extends React.Component {
// state = { showButton: false };

// componentDidMount() {
//   if (auth.getToken()) {
//     this.setState({ showButton: true });
//   }
// }

// render() {

export function useContainerDimensions(myRef: React.RefObject<any>) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const getDimensions = () => ({
      width: (myRef && myRef.current.offsetWidth) || 0,
      height: (myRef && myRef.current.offsetHeight) || 0,
    });

    const handleResize = () => {
      setDimensions(getDimensions());
    };

    if (myRef.current) {
      setDimensions(getDimensions());
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [myRef]);

  return dimensions;
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
const rumble = {
  shake: i => ({
    x: i.i,
    y: i.j,
    transition: {
      duration: 1,
    },
  }),
};
const frameVariants = {
  shake: i => ({
    x: i.i,
    y: i.j,
    transition: {
      duration: 1,
    },
  }),
};

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
  const componentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const history = useHistory();
  const { width } = useContainerDimensions(componentRef);
  const [mouse, setMouse] = useState([0, 0, false]);
  const [mx, my, isActive] = mouse;
  const midpoint = (width || 0) / 2;
  const matches = useMediaQuery('(min-width: 0px) and (max-width: 768px)');

  // console.log(`x: ${mx}, y: ${my} `);
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      className="mainCard homepageCard"
      variants={pageVariants}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
    >
      <CssBaseline></CssBaseline>
      <Helmet>
        <title>Cutie Hack</title>
        <meta name="description" content="Cutie Hack" />
      </Helmet>
      <motion.div
        className="shelfTitle"
        variants={rumble}
        whileTap={'shake'}
        custom={{ i: getRandomArbitrary(-1, 1), j: getRandomArbitrary(-5, 5) }}
        // whileTap={{x: getRandom() as any, y: getRandom() as any}}
      >
        <h1 className=" aboutTitle">About </h1>
      </motion.div>
      <CssBaseline></CssBaseline>
      <Helmet>
        <title>Cutie Hack</title>
        <meta name="description" content="Cutie Hack" />
      </Helmet>
      <motion.div
        animate={{ rotate: isActive ? (mx > midpoint ? 2 : -2) : 0 } as any}
        onMouseMove={e => {
          const { offsetTop, offsetLeft } = e.currentTarget;
          setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true]);
        }}
        onMouseEnter={() => setMouse([mx, my, true])}
        onMouseLeave={() => setMouse([mx, my, false])}
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="outerFrame"
      >
        <img src="/images/assets/string.svg"></img>
        <div className="frame" ref={componentRef}>
          <h2>
            Cutie Hack is a 12-hour, beginner-oriented hackathon hosted at the
            University of California, Riverside.
          </h2>
        </div>
        <img
          style={{ transform: 'translateY(-115%)', width: '120px' }}
          src="/images/assets/2015.png"
        ></img>
      </motion.div>
      <div className="split">
        <motion.div
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fireplaceFlex"
        >
          <img
            className="fireplaceTitle"
            src="/images/assets/FireplaceText.svg"
          ></img>
        </motion.div>
        <div className="flex-1">
          {!matches && (
            <h2 className=" greenCenter">
              This year, Cutie Hack will be held virtually, open to
              undergraduate students all around the world!
            </h2>
          )}

          <img id="couchpic" src="/images/assets/Couch v2.svg"></img>
          {matches && (
            <h2 className=" greenCenter">
              This year, Cutie Hack will be held virtually, open to
              undergraduate students all around the world!
            </h2>
          )}
        </div>
      </div>
      <motion.div
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="shelfTitle "
        id="middleshelf"
      >
        <h1 className=" aboutTitle">FAQ </h1>
      </motion.div>
      <div className="FAQBox">
        <ul>
          <li>Question 1</li>
          <li>Question 2</li>
          <li>Question 3</li>
          <li>Question 4</li>
        </ul>
      </div>
      <motion.div
        transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
        className="shelfTitle"
        id="toiletshelf"
        style={{ marginTop: '8em', marginBottom: '8em' }}
      >
        <h1 id="getInvolved" className=" aboutTitle">
          Participate
        </h1>
      </motion.div>
      <div className="actionFlex">
        <motion.a
          whileHover={{
            boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
            x: 5,
          }}
          href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfNoVaT2U-oH2aVUklItF3IDKXof3XOWlFTFHnVfgc_HGANSw/viewform"
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="actionbtn1"
        >
          <p>Become a mentor</p>
          <img id="arrowIcon" src="/images/assets/right-arrow.svg"></img>
        </motion.a>
        <motion.a
          whileHover={{
            boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
            x: 5,
          }}
          href="#"
          onClick={() => {
            history.push('/apply');
          }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="actionbtn2"
        >
          <p>Apply for the event</p>
          <img id="arrowIcon" src="/images/assets/right-arrow.svg"></img>
        </motion.a>
        <motion.a
          whileHover={{
            boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
            x: 5,
          }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="actionbtn3"
          href="https://docs.google.com/forms/u/3/d/e/1FAIpQLScmjmosfr0FPgGRtjHf1VGpcEcINovD0QRc_qikJrdYGhwR2g/viewform"
        >
          <p>Become a volunteer </p>
          <img id="arrowIcon" src="/images/assets/right-arrow.svg"></img>
        </motion.a>
      </div>
    </motion.div>
  );
}
