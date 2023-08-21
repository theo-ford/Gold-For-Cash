import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "./media-query";

const BackgroundDiv = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: pink; */
  position: fixed;
  z-index: 0;
`;
const yellow_right_ani = keyframes`
  0% {
    height: 0%;
  }
  4% {
    height: 34.5%;
  }
  8% {
    height: 34.5%;
  }
  12% {
    height: 34.5%;
  }
  16% {
    height: 45%;
  }
  20% {
    height: 45%;
  }
  24% {
    height: 68%;
  }
  28% {
    height: 68%;
  }
  32% {
    height: 79.5%;
  }
  36% {
    height: 79.5%;
  }
  40% {
    height: 100%;
  }
  100% {
    height: 100%;
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;

const yellow_left_ani = keyframes`
  0% {
    height: 0%;
  }
  26% {
    height: 0%;
  }
  30% {
    height: 0%;
  }
  34% {
    height: 34.5%;
  }
  38% {
    height: 34.5%;
  }
  42% {
    height: 34.5%;
  }
  46% {
    height: 60%;
  }
  50% {
    height: 100%;
  }
  100% {
    height: 100%;
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const yellow_sml_ani = keyframes`
  0% {
    top: calc(100% - 10.522vw);
  }
  4% {
    top: calc(100% - 10.522vw);
  }
  8% {
    top: 80%;
  }
  12% {
    top: 40%;
  }
  16% {
    top: 40%;
  }
  20% {
    top: 40%;
  }
  24% {
    top: 40%;
  }
  28% {
    top: calc(0% + 10px);
  }
  32% {
    top: calc(0% + 10px);
  }
  36% {
    top: -20%;
  }
  40% {
    top: -20%;
  }
  100% {
    top: -20%;
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  z-index: 1000;
  @media (max-width: 666px) {
    width: calc(25vw - 10px);
    height: calc(25vw - 10px);
    left: calc(25vw + 7.5px);
  }
`;
const white_right_ani = keyframes`
  0% {
    height: 0%;
  }
  60% {
    height: 0%;
  }
  64% {
    height: 11.5%;
  }
  68% {
    height: 34.5%;
  }
  72% {
    height: 34.5%;
  }
  76% {
    height: 45%;
  }
  80% {
    height: 45%;
  }
  84% {
    height: 68%;
  }
  90% {
    height: 68%;
  }
  92% {
    height: 79.5%;
  }
  96% {
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const white_left_ani = keyframes`
 0% {
    height: 0%;
  }
  60% {
    height: 0%;
  }
  64% {
    height: 0%;
  }
  68% {
    height: 0%;
  }
  72% {
    height: 0%;
  }
  76% {
    height: 0%;
  }
  80% {
    height: 0%;
  }
  84% {
    height: 34.5%;
  }
  89% {
    height: 34.5%;
  }
  92% {
    height: 34.5%;
  }
  96% {
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
`;
const white_sml_ani = keyframes`
  0% {
    top: -20%;
  }
  60% {
    top: -20%;
  }
  64% {
    top: -20%;
  }
  68% {
    top: -20%;
  }
  72% {
    top: 0%;
  }
  76% {
    top: 0%;
  }
  80% {
    top: 40%;
  }
  84% {
    top: 40%;
  }
  88% {
    top: 40%;
  }
  92% {
    top: 40%;
  }
  96% {
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
  animation-duration: 8s;
  animation-iteration-count: infinite;
  animation-fill-mode: forwards;
  animation-direction: alternate;
  z-index: 1000;
  @media (max-width: 666px) {
    width: calc(25vw - 10px);
    height: calc(25vw - 10px);
    left: calc(25vw + 7.5px);
  }
`;
export const AnimationFixed1 = () => {
  return (
    <>
      <BackgroundDiv>
        <YellowRight></YellowRight>
        <YellowLeft></YellowLeft>
        <YellowSml></YellowSml>
        <WhiteRight></WhiteRight>
        <WhiteLeft></WhiteLeft>
        <WhiteSml></WhiteSml>
      </BackgroundDiv>
    </>
  );
};
