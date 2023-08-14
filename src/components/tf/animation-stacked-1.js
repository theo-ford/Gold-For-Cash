import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "./media-query";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 200vh;
  /* background-color: pink; */
  position: relative
  z-index: 0;
`;
const AniCon1 = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: white;
  overflow: hidden;
`;
const AniCon2 = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #ebff07;
  overflow: hidden;
`;

const yellow_right_ani = keyframes`
  0% {
    height: 100%;
  }
  10% {
    height: 79.5%;
  }
  20% {
    height: 79.5%;
  }
  30% {
    height: 68%;
  }
  40% {
    height: 68%;
  }
  50% {
    height: 45%;
  }
  60% {
    height: 45%;
  }
  70% {
    height: 34.5%;
  }
  80% {
    height: 34.5%;
  }
  90% {
    height: 11.5%;
  }
  100% {
    height: 0%;
  }
`;
const YellowRight = styled.div`
  width: calc(50vw - 5px);
  height: 0%;
  background-color: #ebff07;
  position: absolute;
  bottom: 0;
  right: 0;
  animation-name: ${yellow_right_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const yellow_left_ani = keyframes`
  0% {
    height: 100%;
  }
  10% {
    height: 60%;
  }
  20% {
    height: 34.5%;
  }
  30% {
    height: 34.5%;
  }
  40% {
    height: 34.5%;
  }
  50% {
    height: 0%;
  }
  60% {
    height: 0%;
  }
  70% {
    height: 0%;
  }
  80% {
    height: 0%;
  }
  90% {
    height: 0%;
  }
  100% {
    height: 0%;
  }
`;
const YellowLeft = styled.div`
  width: calc(50vw + 5px);
  height: 0%;
  background-color: #ebff07;
  position: absolute;
  bottom: 0;
  left: 0;
  animation-name: ${yellow_left_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const yellow_sml_ani = keyframes`
  0% {
    top: -20%;
  }
  10% {
    top: -20%;
  }
  20% {
    top: -20%;
  }
  30% {
    top: calc(0% + 10px);
  }
  40% {
    top: calc(0% + 10px);
  }
  50% {
    top: 40%;
  }
  60% {
    top: 40%;
  }
  70% {
    top: 40%;
  }
  80% {
    top: 40%;
  }
  90% {
    top: 80%;
  }
  100% {
    top: calc(100% - 10.522vw);
  }
`;
const YellowSml = styled.div`
  width: calc(10.522vw - 10px);
  height: calc(10.522vw - 10px);

  background-color: #ebff07;
  position: absolute;
  bottom: -10.522vw;
  left: calc(39.48vw + 5px);
  animation-name: ${yellow_sml_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  z-index: 1000;
`;
const white_right_ani = keyframes`
  0% {
    height: 0%;
  }
  10% {
    height: 11.5%;
  }
  20% {
    height: 34.5%;
  }
  30% {
    height: 34.5%;
  }
  40% {
    height: 45%;
  }
  50% {
    height: 45%;
  }
  60% {
    height: 68%;
  }
  70% {
    height: 68%;
  }
  80% {
    height: 79.5%;
  }
  90% {
    height: 79.5%;
  }
  100% {
    height: 100%;
  }
`;
const WhiteRight = styled.div`
  width: calc(50vw - 5px);
  height: 0%;
  background-color: white;
  position: absolute;
  top: 0;
  right: 0;
  animation-name: ${white_right_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const white_left_ani = keyframes`
  0% {
    height: 0%;
  }
  10% {
    height: 0%;
  }
  20% {
    height: 0%;
  }
  30% {
    height: 0%;
  }
  40% {
    height: 0%;
  }
  50% {
    height: 0%;
  }
  60% {
    height: 34.5%;
  }
  70% {
    height: 34.5%;
  }
  80% {
    height: 34.5%;
  }
  90% {
    height: 60%;
  }
  100% {
    height: 100%;
  }
`;
const WhiteLeft = styled.div`
  width: calc(50vw + 5px);
  height: 0%;
  background-color: white;
  position: absolute;
  z-index: 10000;
  top: 0;
  left: 0;
  animation-name: ${white_left_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const white_sml_ani = keyframes`
   0% {
    top: -20%;
  }
  10% {
    top: -20%;
  }
  20% {
    top: -20%;
  }
  30% {
    top: 0%;
  }
  40% {
    top: 0%;
  }
  50% {
    top: 40%;
  }
  60% {
    top: 40%;
  }
  70% {
    top: 40%;
  }
  80% {
    top: 40%;
  }
  90% {
    top: 80%;
  }
  100% {
    top: 100%;
  }
`;
const WhiteSml = styled.div`
  width: calc(10.522vw - 10px);
  height: calc(10.522vw - 10px);
  background-color: white;
  position: absolute;
  top: -10.522vw;
  left: calc(39.48vw + 5px);
  animation-name: ${white_sml_ani};
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  z-index: 1000;
`;
export const AnimationStacked1 = () => {
  return (
    <>
      <BackgroundDiv>
        <AniCon1>
          <YellowRight></YellowRight>
          <YellowLeft></YellowLeft>
          <YellowSml></YellowSml>
        </AniCon1>
        <AniCon2>
          <WhiteRight></WhiteRight>
          <WhiteLeft></WhiteLeft>
          <WhiteSml></WhiteSml>
        </AniCon2>
      </BackgroundDiv>
    </>
  );
};
