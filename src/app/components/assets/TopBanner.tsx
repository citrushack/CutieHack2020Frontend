import React from 'react';
import { pageVariants } from '../../animations';
import { motion } from 'framer-motion';

export function TopBanner(props) {
  return (
    <motion.svg
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      style={{ zIndex: -1 }}
      transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
      data-name="Layer 1"
      viewBox="0 0 1920 1080"
      {...props}
    >
      <defs>
        <linearGradient
          id="prefix__a"
          x1={1529.3}
          y1={822}
          x2={1639.5}
          y2={822}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#b6b6b6" />
          <stop offset={1} stopColor="#cfcfcf" />
        </linearGradient>
        <linearGradient
          id="prefix__b"
          x1={1380}
          y1={789}
          x2={1789}
          y2={789}
          xlinkHref="#prefix__a"
        />
        <filter id="prefix__c" colorInterpolationFilters="sRGB">
          <feFlood result="flood" floodColor="#000" floodOpacity={1} />
          <feComposite
            result="composite1"
            operator="in"
            in2="SourceGraphic"
            in="flood"
          />
          <feGaussianBlur result="blur" in="composite1" />
          <feOffset result="offset" dy={1.6} dx={2.2} />
          <feComposite result="composite2" in2="offset" in="SourceGraphic" />
        </filter>
        <filter id="prefix__d" colorInterpolationFilters="sRGB">
          <feFlood result="flood" floodColor="#000" floodOpacity={1} />
          <feComposite
            result="composite1"
            operator="in"
            in2="SourceGraphic"
            in="flood"
          />
          <feGaussianBlur result="blur" in="composite1" />
          <feOffset result="offset" dy={1.6} dx={2.2} />
          <feComposite
            result="fbSourceGraphic"
            in2="offset"
            in="SourceGraphic"
          />
          <feColorMatrix
            values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            in="fbSourceGraphic"
            result="fbSourceGraphicAlpha"
          />
          <feFlood result="flood" floodColor="#000" floodOpacity={1} />
          <feComposite
            result="composite1"
            operator="in"
            in="flood"
            in2="fbSourceGraphic"
          />
          <feGaussianBlur result="blur" in="composite1" />
          <feOffset result="offset" dy={1.6} dx={2.2} />
          <feComposite result="composite2" in="fbSourceGraphic" in2="offset" />
        </filter>
      </defs>
      <path fill="#cba2a2" d="M1 0h1925v1087H1z" />
      <path
        className="prefix__cls-5"
        fill="#8b5e3c"
        d="M1471 901h16v188h-16zm294 2h17v184h-17z"
      />
      <path
        className="prefix__cls-2"
        fill="#f2d1cd"
        d="M-1 58h1926v49H-1zm1931 368L3 388l-2 91 1928-9"
      />
      <path className="prefix__cls-36" fill="#825136" d="M1765 903h5v184h-5z" />
      <path fill="#d99e82" d="M1402 897h448v13h-448z" />
      <path className="prefix__cls-36" fill="#825136" d="M1482 910h5v170h-5z" />
      <path
        className="prefix__cls-4"
        fill="#c1694f"
        d="M1381 856h489v41h-489z"
      />
      <path
        className="prefix__cls-5"
        fill="#8b5e3c"
        d="M1419 903h12v185h-12zm391 1h19v183h-19z"
      />
      <path
        className="prefix__cls-2"
        fill="#f2d1cd"
        d="M1392 539h387v226h-387z"
      />
      <motion.path
        initial={{
          d:
            'm 191,739 c 587.82327,404.301 1257.942,47.26722 1229.9906,44.67712',
        }}
        animate={{
          d:
            'm 191,739 c 992.4626,-312.64384 1257.942,47.26722 1229.9906,44.67712',
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
          repeatType: 'reverse',
        }}
        id="prefix__e"
        fill="none"
        stroke="#231f20"
        strokeWidth={4}
      />
      <ellipse
        className="prefix__cls-23"
        cx={1818.6}
        cy={781.7}
        rx={9.8}
        ry={31.7}
        fill="#4a8c74"
      />
      <path
        stroke="#d99e82"
        strokeWidth={0.5}
        strokeMiterlimit={10}
        fill="#d99e82"
        d="M1561 869h127v17h-127z"
      />
      <path className="prefix__cls-28" fill="#8b5e3c" d="M1592 876h65v3h-65z" />
      <path d="M1744 742v-14l9 11z" className="prefix__cls-33" fill="#bcbec0" />
      <path className="prefix__cls-33" fill="#bcbec0" d="M1746 736h1l4 9h-1z" />
      <path d="M1742 742l1-14 9 11z" />
      <path d="M1745 736h1l3 9h-1z" />
      <path
        fill="#b6b6b6"
        className="prefix__cls-34"
        d="M1535 808l-6 28h110l-3-28h-101z"
      />
      <path fill="#b6b6b6" d="M1514 853l16-19h109l17 19-3 3h-136z" />
      <path className="prefix__cls-36" fill="#825136" d="M1431 903h5v185h-5z" />
      <ellipse
        className="prefix__cls-37"
        cx={1824}
        cy={800.1}
        rx={6.9}
        ry={18.6}
        fill="#235945"
      />
      <path className="prefix__cls-36" fill="#825136" d="M1810 904h5v183h-5z" />
      <ellipse
        className="prefix__cls-39"
        cx={1760.4}
        cy={842.3}
        rx={15.4}
        ry={13.6}
        fill="#fbb040"
      />
      <path
        d="M1767 830a15 15 0 016 4 13 13 0 012 3 13 13 0 011 4 12 12 0 01-1 5 13 13 0 01-1 3 13 13 0 01-2 2 16 16 0 01-2 2 15 15 0 01-3 2c4-6 5-13 2-19a16 16 0 00-9-7 17 17 0 017 1z"
        fill="#f79d26"
      />
      <path
        className="prefix__cls-41"
        fill="none"
        stroke="#603913"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M239 69l51-18 58 18m357 169l44-16 50 16m318-113l43-17 48 17"
      />
      <ellipse
        className="prefix__cls-42"
        cx={290.3}
        cy={50.5}
        rx={5.3}
        ry={5}
        fill="#603913"
        stroke="#603913"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
      <ellipse
        className="prefix__cls-42"
        cx={749}
        cy={223}
        rx={4.6}
        ry={4.4}
        fill="#603913"
        stroke="#603913"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
      <ellipse
        className="prefix__cls-42"
        cx={1160.3}
        cy={107.9}
        rx={4.9}
        ry={4.6}
        fill="#603913"
        stroke="#603913"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-41"
        fill="none"
        stroke="#603913"
        strokeWidth={2}
        strokeMiterlimit={10}
        d="M1677 237l37-15 40 15"
      />
      <ellipse
        className="prefix__cls-42"
        cx={1713.5}
        cy={222.3}
        rx={4.1}
        ry={3.9}
        fill="#603913"
        stroke="#603913"
        strokeWidth={5}
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-43"
        fill="#dcf4ed"
        d="M205 73h168v209H205z"
      />
      <path fill="#c49a6c" d="M268 161l56 24 49-16v117H205V184z" />
      <path fill="#b7875c" d="M373 282H205v-98l63-23 56 24 49 19z" />
      <text
        transform="matrix(1.0162 .35427 -.33563 .86704 0 0)"
        x={286.4}
        y={100.7}
        fontSize={20.5}
        fontFamily="MyriadPro-Regular,'Myriad Pro'"
        letterSpacing=".1em"
        fill="#f9ed32"
        stroke="#f9ed32"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      >
        {'C'}
      </text>
      <path
        fill="#dcf4ed"
        stroke="#c1694f"
        strokeWidth={0.5}
        strokeMiterlimit={10}
        d="M686 241h125v107H686z"
      />
      <path
        fill="#dcf4ed"
        stroke="#c1694f"
        strokeWidth={0.3}
        strokeMiterlimit={10}
        d="M1098 133h131v154h-131z"
      />
      <path
        className="prefix__cls-43"
        fill="#dcf4ed"
        d="M1662 240h111v140h-111z"
      />
      <path
        className="prefix__cls-39"
        fill="#fbb040"
        d="M1692 307l9-7h36v56l-7 3h-38z"
      />
      <path fill="#f9bb6b" d="M1692 307h38v52h-38z" />
      <path fill="#f7941d" d="M1737 300v56l-7 3v-52z" />
      <path
        d="M1705 304a35 35 0 010-8v-4c-2-1-6 0-10 1"
        fill="none"
        stroke="#bcbec0"
        strokeMiterlimit={10}
      />
      <ellipse cx={1710.7} cy={334.4} rx={15.3} ry={14.5} fill="#fff" />
      <ellipse
        className="prefix__cls-39"
        cx={-153.9}
        cy={1737.3}
        rx={9.2}
        ry={10.7}
        transform="rotate(-84)"
        fill="#fbb040"
      />
      <path
        className="prefix__cls-37"
        d="M1760 827a4 4 0 01-2 2 4 4 0 012-5 4 4 0 010 3z"
      />
      <path
        className="prefix__cls-23"
        d="M1756 828a1 1 0 111-2 1 1 0 11-1 2z"
      />
      <path
        className="prefix__cls-37"
        d="M746 284a11 11 0 01-5 5 10 10 0 011-7 11 11 0 015-5 10 10 0 01-1 7z"
        fill="#235945"
      />
      <path
        className="prefix__cls-23"
        d="M733 286a11 11 0 01-3-7 12 12 0 017 4 11 11 0 013 6 12 12 0 01-7-3z"
        fill="#4a8c74"
      />
      <ellipse
        className="prefix__cls-39"
        cx={-230.7}
        cy={776.2}
        rx={22.9}
        ry={26.6}
        transform="rotate(-84)"
        fill="#fbb040"
      />
      <path
        className="prefix__cls-37"
        d="M746 284a11 11 0 01-5 5 10 10 0 011-7 11 11 0 015-5 10 10 0 01-1 7z"
        fill="#235945"
      />
      <path
        className="prefix__cls-23"
        d="M733 286a11 11 0 01-3-7 12 12 0 017 4 11 11 0 013 6 12 12 0 01-7-3z"
        fill="#4a8c74"
      />
      <path
        className="prefix__cls-37"
        d="M1710 325a4 4 0 01-2 3 4 4 0 011-3 4 4 0 012-2 4 4 0 01-1 2z"
        fill="#235945"
      />
      <path
        className="prefix__cls-23"
        d="M1706 326a4 4 0 01-2-2 5 5 0 013 1 4 4 0 011 3 5 5 0 01-2-2z"
        fill="#4a8c74"
      />
      <path
        d="M750 289a30 30 0 018 2 29 29 0 017 4 24 24 0 014 4 24 24 0 014 6 20 20 0 010 14 21 21 0 01-4 6 22 22 0 01-5 5 26 26 0 01-5 3 29 29 0 01-5 1h-3c11-10 15-24 10-34-3-6-8-10-11-11z"
        fill="#f7a348"
      />
      <path
        className="prefix__cls-54"
        fill="#a7a9ac"
        d="M1146 168h31v119h-31z"
      />
      <path className="prefix__cls-54" fill="#a7a9ac" d="M1136 165h51v6h-51z" />
      <path
        fill="#959799"
        stroke="#808285"
        strokeWidth={0.3}
        strokeMiterlimit={10}
        d="M1151 194h22v21h-22z"
      />
      <path
        className="prefix__cls-56"
        fill="#231f20"
        stroke="#231f20"
        strokeMiterlimit={10}
        d="M1169 205h-9"
      />
      <path
        fill="none"
        stroke="#c1694f"
        strokeWidth={17}
        strokeMiterlimit={10}
        d="M204 73h169v213H204z"
      />
      <path
        fill="none"
        stroke="#a4523a"
        strokeWidth={13}
        strokeMiterlimit={10}
        d="M686 242h126v106H686z"
      />
      <path
        fill="none"
        stroke="#d99e82"
        strokeWidth={15}
        strokeMiterlimit={10}
        d="M1096 129h134v159h-134z"
      />
      <path
        fill="none"
        stroke="#c1694f"
        strokeWidth={16}
        strokeMiterlimit={10}
        d="M1662 240h111v140h-111z"
      />
      <rect
        x={1391.5}
        y={538.5}
        width={387}
        height={258}
        rx={24.3}
        stroke="#303030"
        strokeWidth={21}
        fill="none"
        strokeMiterlimit={10}
      />
      <path
        d="M1782 771h-394c-4 0-7-1-7-2v-11c0-1 3-2 7-2h394c4 0 7 1 7 2v11c0 1-3 2-7 2z"
        fill="#303030"
      />
      <path
        d="M1782 808h-395c-4 0-7-2-7-5v-28c0-3 3-5 7-5h395c4 0 7 3 7 6v27c0 3-3 5-7 5z"
        fill="url(#prefix__b)"
      />
      <circle
        cx={1585.4}
        cy={789.9}
        r={6.3}
        fill="#231f20"
        strokeMiterlimit={10}
        stroke="#231f20"
      />
      <path
        className="prefix__cls-65"
        d="M1581 782a4 4 0 011-1 4 4 0 010 1 4 4 0 01-1 2 4 4 0 010-2zm-2 2a3 12 0 01-1-1 3 12 0 011 0 3 12 0 011 2 3 12 0 01-1-1z"
        fill="#231f20"
        stroke="#231f20"
        strokeWidth={0.5}
        strokeMiterlimit={10}
      />
      <ellipse
        className="prefix__cls-37"
        cx={1796.9}
        cy={779.4}
        rx={10.4}
        ry={35.3}
        fill="#235945ff"
      />
      <ellipse cx={1810.9} cy={791.7} rx={8.1} ry={21.7} fill="#80a693" />
      <path
        className="prefix__cls-5"
        fill="#8b5e3c"
        d="M1780 801h60l-13 55h-35l-12-55z"
      />
      <path fill="#a97c50" d="M1779 801h62v6h-62z" />
      <path
        className="prefix__cls-6"
        d="M328 693v25l6 25 10 16-10 11h-17c17 0-4 56-4 56l-21 12-34-5-35-18v36h-36l-14-68 18-44-7-3-4-5-3-6-2-9 2-7 4-6 6-4 8-3h7l9 8 3 5-1-34 54-49z"
        fill="#e2ac8b"
      />
      <path
        className="prefix__cls-7"
        fill="#3b2314"
        stroke="#231f20"
        strokeWidth={0.3}
        strokeMiterlimit={10}
        d="M338 733l-4 10-7-29 1-21-61-67-54 49 1 34-3-5-9-8h-7l-14 7-4 6-2 7 2 9 7 11 7 3-18 44 7 33-13-6-12-8-12-10-11-13-11-18-13 9 6-24-4-14-2-12v-14l-22-24 32-53 62-52 39 8 26-15 55 18 58 73h-24l5 21 2 17v19z"
      />
      <ellipse
        className="prefix__cls-7"
        cx={294.2}
        cy={722.5}
        rx={8.1}
        ry={13}
        fill="#3b2314"
        stroke="#231f20"
        strokeWidth={0.3}
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-6"
        d="M214 710a15 15 0 00-2-7 16 16 0 00-10-6c-6-2-12 0-14 1a20 20 0 00-8 5 19 19 0 00-4 8 22 22 0 00-1 9 24 24 0 002 7 17 17 0 004 7 22 22 0 005 3 37 37 0 005 2"
        fill="#fcd0a8"
      />
      <path
        className="prefix__cls-7"
        d="M273 684l-1 6 7 2 28 4 8-4z"
        fill="#3b2314"
        stroke="#231f20"
        strokeWidth={0.3}
        strokeMiterlimit={10}
      />
      <path
        d="M294 790c0 1 4 5 9 6s9-2 11-3a21 21 0 003-3"
        fill="#151717"
        stroke="#d3885a"
        strokeMiterlimit={10}
      />
      <circle
        cx={295.5}
        cy={716.3}
        r={0.4}
        fill="#fff"
        stroke="#fff"
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-4"
        d="M172 851c-11-1-7 82-22 147-10 61-13 103-2 143 73 5 45-1 88 4 1-6 6-84-1-146-9-87 4-154-3-153"
        fill="#c1694f"
      />
      <path
        d="M195 995a84 84 0 000 23 88 88 0 0019 43"
        fill="none"
        stroke="#fcd0a8"
        strokeWidth={30.6}
        strokeMiterlimit={10}
      />
      <path
        d="M226 988c6-8-3-11-9-47-1-6-2-13-8-19-5-4-13-8-21-6s-11 10-14 17-3 12-4 21c-2 20-3 30 0 34 10 13 47 13 56 0z"
        fill="#f5a489"
      />
      <path
        d="M191 683c0-18 2-43 7-65 6-31 5-25 8-34"
        fill="none"
        stroke="#404041"
        strokeWidth={15}
        strokeMiterlimit={10}
      />
      <path
        d="M174 781l49 34c-10-4-21-6-28-1-13 10-7 37-8 37s-5-15-13-70z"
        fill="#dea681"
      />
      <path
        d="M25 828c-20 47 14 77 37 187 14 68 19 147 19 147l4 12c4 9 37 9 53 0 52-32-15-197-52-363-2-7-5-24-15-27-14-3-36 22-46 44z"
        fill="#383433"
      />
      <path
        d="M91 871c-16-25-15-77-5-84 8-6 23 18 31 38 2 4 14 37 8 52-6 13-24 8-34-6z"
        fill="#58595b"
      />
      <ellipse
        cx={187.9}
        cy={729.8}
        rx={36.8}
        ry={48.9}
        fill="#231f20"
        stroke="#404041"
        strokeWidth={10}
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-28"
        d="M188 916a22 22 0 0119 5 60 60 0 00-19 15 71 71 0 00-11 57l-5-3a11 11 0 01-3-3l-1-7 1-7v-9l1-12a63 63 0 016-23 20 20 0 0112-13z"
        fill="#f29476"
      />
      <path
        d="M132 1050c34-18 63-16 78 2 8 10 13 24 13 24 5 15 6 29 6 45v83"
        fill="none"
        stroke="#383433"
        strokeWidth={52.8}
        strokeMiterlimit={10}
      />
      <path
        className="prefix__cls-32"
        d="M199 580l19 5a123 123 0 00-23 35 136 136 0 00-10 52 258 258 0 012-46 251 251 0 0112-46z"
        fill="#383839"
      />
      <path
        className="prefix__cls-33"
        d="M73 785a23 23 0 00-8-1c-10 1-17 9-26 20-7 9-15 18-18 32a66 66 0 00-2 16 93 93 0 001 14 94 94 0 004 15l27 78 17 73 9 65c5-57 0-102-6-132-8-44-21-80-12-131a215 215 0 0114-49z"
        fill="#2d2b2a"
      />
      <path
        className="prefix__cls-34"
        d="M327 693v21l7 29 10 16-10 11h-16l-3-8 12-15v-54z"
        fill="#dea681"
      />
      <text
        y={612.4}
        x={1587.5}
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: 'normal',
          fontVariantCaps: 'normal',
          fontVariantNumeric: 'normal',
          fontFeatureSettings: 'normal',
          textAlign: 'start',
        }}
        fontWeight={400}
        fontSize={40}
        fontFamily="Fugaz One"
        letterSpacing={0}
        wordSpacing={0}
        filter="url(#prefix__c)"
      >
        <tspan
          style={{
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontFeatureSettings: 'normal',
            textAlign: 'center',
          }}
          y={612.4}
          x={1587.5}
          fontSize={33.3}
          writingMode="lr"
          textAnchor="middle"
          fill="#fff"
          stroke="#303030"
        >
          {'November 7th'}
        </tspan>
        <tspan
          style={{
            fontVariantLigatures: 'normal',
            fontVariantCaps: 'normal',
            fontVariantNumeric: 'normal',
            fontFeatureSettings: 'normal',
            textAlign: 'center',
          }}
          y={712.4}
          x={1587.5}
          fontSize={33.3}
          writingMode="lr"
          textAnchor="middle"
          fill="#fff"
          stroke="#303030"
        >
          {'Online Hackathon'}
        </tspan>
      </text>
      <text
        style={{
          lineHeight: 1.25,
          fontVariantLigatures: 'normal',
          fontVariantCaps: 'normal',
          fontVariantNumeric: 'normal',
          fontFeatureSettings: 'normal',
          textAlign: 'start',
        }}
        fontWeight={400}
        fontSize={40}
        fontFamily="Fugaz One"
        letterSpacing={0}
        wordSpacing={0}
        filter="url(#prefix__d)"
      >
        <textPath startOffset={390} xlinkHref="#prefix__e">
          <tspan
            style={{
              fontVariantLigatures: 'normal',
              fontVariantCaps: 'normal',
              fontVariantNumeric: 'normal',
              fontFeatureSettings: 'normal',
              textAlign: 'start',
            }}
            fontSize={80}
            fill="#fff"
            stroke="#000"
          >
            {'Cutie Hack 2020'}
          </tspan>
        </textPath>
      </text>
    </motion.svg>
  );
}
