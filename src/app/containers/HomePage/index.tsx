import React, { useState, useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useHistory } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import { pageVariants } from '../../animations';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Faq from 'react-faq-component';
import { motion } from 'framer-motion';
import { FaChevronCircleDown } from 'react-icons/fa';
import { FireplaceComp } from '../../components/assets/FireplaceComp';
import { TopBanner } from '../../components/assets/TopBanner';
import '../../component-styles/accordion.css';

// import { randomInt } from 'crypto';
// import { ExpandLi } from '../../components/ExpandLi';
// import { useAuthUser, useSignIn, useAuthHeader } from 'react-auth-kit';

// export class HomePage extends React.Component {
// state = { showButton: false };

// componentDidMount() {
//   if (auth.getToken()) {
//     this.setState({ showButton: true });
//   }
// }

// render() {
const data = {
  rows: [
    {
      title: 'What is a hackathon?',
      content:
        'A hackathon is an event where you can build a project and demo to judges in order to win awesome prizes! We offer cool workshops to help you learn about new technologies or new programming languages as well!',
    },
    {
      title: 'Where will we submit?',
      content:
        'You can submit through Devpost! Further instructions will follow on the day-of the event. ',
    },
    {
      title: 'Can I submit a project I’ve already worked on?',
      content:
        'No, you must start working on a project (code-wise) after hacking starts at 8 AM. Projects started before that time will be disqualified along with projects that have been submitted to multiple hackathons.',
    },
    {
      title: 'How long is Cutie Hack?',
      content:
        'Cutie Hack 2020 will be a 12 hour hackathon. Hacking will start at 8 AM (PDT) (PDT) and end at 8 PM (PDT). The closing ceremony will be at 11 PM through YouTube live!',
    },
    {
      title: 'Is Cutie Hack Free?',
      content: 'Yes!',
    },
    {
      title: 'Who can come to Cutie Hack?',
      content:
        'Any undergraduate student enrolled in a college can participate, regardless of majors.',
    },
    {
      title: 'When are applications due?',
      content:
        'Applications will be accepted on a rolling basis but will close on November 2nd!',
    },
    {
      title: 'What if I’ve never been to a hackathon before?',
      content:
        'That’s the best reason to come out! Cutie Hack is a beginner-oriented hackathon. We’ll be having beginner-oriented workshops and activities, along with mentors to help you turn your project into reality!',
    },
    {
      title: 'What will I need to participate?',
      content:
        'A working device (i.e your laptop or PC) and a stable internet connection. And, of course, you!',
    },
    {
      title: 'What if I don’t have a team?',
      content:
        'If you don’t have a team formed prior to Cutie Hack, we will be having a channel on Discord where you can find other participants that share similar interests! We’ll also be providing activities at the beginning of the event to help you form teams! Teams aren’t required though, so feel free to work individually',
    },
    {
      title: 'Do I have to hack or make a project?',
      content:
        'Not at all! Being a beginner-friendly hackathon, we’ll be hosting workshops for you to learn from, events and activities to help you network with others, and games for you to meet other hackers. Don’t forget about the raffles! You’ll be able to find the schedule on our website as we get closer to the event.',
    },
    {
      title:
        'If I’m outside of the U.S, can I still attend and/or win a prize/raffle?',
      content: `If you’re residing outside of the U.S, you can still attend! However, due to shipping restrictions and COVID, we won’t be able to send any type of physical prizes,  swag items, or raffle prizes to those residing outside of the U.S. You are still eligible to win a category, however!
        If you currently attend a university within the U.S but reside outside of the U.S, you’ll be able to win a category but will not be eligible to receive a physical prize, swag item, or raffle prize. 
        If you both attend a university outside of the U.S and also reside outside of the U.S, you will e ineligible to win or receive a prize, but are still encouraged to attend and participate in all festivities!`,
    },
    {
      title: 'Help, my question is not listed!',
      content:
        'Email us at citrushack@gmail.com and we can answer your questions!',
    },
  ],
};

const config = {
  animate: false,
  arrowIcon: <FaChevronCircleDown size={70} />,
};

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

// function getRandomArbitrary(min, max) {
//   return Math.random() * (max - min) + min;
// }
// const rumble = {
//   shake: i => ({
//     x: i.i,
//     y: i.j,
//     transition: {
//       duration: 1,
//     },
//   }),
// };
// const frameVariants = {
//   shake: i => ({
//     x: i.i,
//     y: i.j,
//     transition: {
//       duration: 1,
//     },
//   }),
// };

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
  // const [overYellow, setoverYellow] = useState(false);
  // const [overGreen, setoverGreen] = useState(false);
  // const [overBlue, setoverBlue] = useState(false);
  const [mx, my, isActive] = mouse;
  const midpoint = (width || 0) / 2;
  const matches = useMediaQuery('(min-width: 0px) and (max-width: 768px)');

  // console.log(`x: ${mx}, y: ${my} `);
  return (
    <>
      <TopBanner />
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
          // variants={rumble}
          // whileTap={'shake'}
          // custom={{ i: getRandomArbitrary(-1, 1), j: getRandomArbitrary(-5, 5) }}
          // whileTap={{x: getRandom() as any, y: getRandom() as any}}
        >
          <motion.h1
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: 'reverse',
            }}
            className=" aboutTitle"
          >
            About{' '}
          </motion.h1>
        </motion.div>
        <CssBaseline></CssBaseline>
        <Helmet>
          <title>Cutie Hack</title>
          <meta name="description" content="Cutie Hack" />
        </Helmet>
        <motion.div
          animate={
            {
              rotate: isActive ? (mx > midpoint ? 3.2 : -3.2) : -2.2,
            } as any
          }
          onMouseMove={e => {
            const { offsetTop, offsetLeft } = e.currentTarget;
            setMouse([e.pageX - offsetLeft, e.pageY - offsetTop, true]);
          }}
          onMouseEnter={() => setMouse([mx, my, true])}
          onMouseLeave={() => setMouse([mx, my, false])}
          // transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          transition={{
            ...(!isActive
              ? { repeat: Infinity, duration: 1.5, repeatType: 'reverse' }
              : { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }),
          }}
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
            alt="2015 Plaque"
          ></img>
        </motion.div>
        <div className="split">
          <motion.div
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="fireplaceFlex"
          >
            <FireplaceComp />
            {/* <img
            className="fireplaceTitle"
            src="/images/assets/FireplaceText.svg"
          ></img> */}
          </motion.div>
          <div className="flex-1">
            {!matches && (
              <h2 className=" greenCenter">
                This year, Cutie Hack will be held virtually, open to
                undergraduate students all around the world!
              </h2>
            )}

            <img
              id="couchpic"
              src="/images/assets/CouchMini.svg"
              alt="mini couch"
            ></img>
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
          <motion.h1
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: 'reverse',
            }}
            className=" aboutTitle"
          >
            FAQ
          </motion.h1>
        </motion.div>
        <div className="FAQBox">
          <Faq data={data} config={config} />
        </div>
        <motion.div
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="shelfTitle"
          id="toiletshelf"
          style={{ marginTop: '5em', marginBottom: '8em' }}
        >
          <motion.h1
            animate={{ y: 10 }}
            id="getInvolved"
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: 'reverse',
            }}
            className=" aboutTitle"
          >
            Get involved
          </motion.h1>
        </motion.div>
        <div className="actionFlex">
          <motion.a
            whileHover={{
              boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
              x: 5,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://docs.google.com/forms/u/3/d/e/1FAIpQLSfNoVaT2U-oH2aVUklItF3IDKXof3XOWlFTFHnVfgc_HGANSw/viewform"
            className="actionbtn1"
          >
            <p>Become a mentor</p>
            <img
              id="arrowIcon"
              src="/images/assets/right-arrow.svg"
              alt="right icon"
            />
          </motion.a>
          <motion.a
            whileHover={{
              boxShadow: '16px 16px 0px -5px rgba(0, 0, 0, 0.45)',
              x: 5,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="#"
            onClick={() => {
              history.push('/apply');
            }}
            className="actionbtn2"
          >
            <p>Apply for the event</p>
            <img
              id="arrowIcon"
              src="/images/assets/right-arrow.svg"
              alt="right icon"
            />
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
            <img
              id="arrowIcon"
              src="/images/assets/right-arrow.svg"
              alt="right icon"
            />
          </motion.a>
        </div>
        <motion.div
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="shelfTitle"
          id="emptyshelf"
          style={{ marginTop: '5em', marginBottom: '4em' }}
        >
          <motion.h1
            animate={{ y: 10 }}
            id="getInvolved"
            transition={{
              repeat: Infinity,
              duration: 2,
              repeatType: 'reverse',
            }}
            className=" aboutTitle"
          >
            Sponsors
          </motion.h1>
        </motion.div>
        <div className="logoflex">
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://acmucr.org/"
          >
            <img src="/images/acm_ucr.png" className="acm" alt="acm logo"></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://linode.com/"
          >
            <img
              src="/images/linode.png"
              className="linode"
              alt="linode logo"
            ></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://gen.xyz/"
          >
            <img src="/images/xcolor.png" className="xyz" alt="xyz logo"></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://ieee.ee.ucr.edu/"
          >
            <img src="/images/IEEE.png" className="ieee" alt="ieee logo"></img>
          </motion.a>
          <motion.a
            whileHover={{
              scale: 1.1,
            }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            href="https://www.wolfram.com/"
          >
            <img
              src="/images/wolfram.png"
              className="wolfram"
              alt="wolfram logo"
            ></img>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
}
