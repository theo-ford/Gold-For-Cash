import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useMediaQuery } from "../media-query";
const Grid16 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */;
  /* width: calc(100% - 20px); */
  grid-column-gap: 10px;

  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 5px;
  }
`;
const IntroCon = styled.div`
  position: fixed;
  z-index: 200;
  margin: 10px;
  width: calc(100% - 20px);
  @media (max-width: 666px) {
    display: none;
  }
`;
const ClientsCon = styled.div`
  grid-column: 9 / span 2;
`;
const AboutCon = styled.div`
  grid-column: span 6;
`;

const SmallAboutP = styled.p`
  font-family: "DecimaMonoPro", sans-serif;
  font-size: 6px;
  letter-spacing: -2%;
`;

export const Intro = ({ data }) => {
  return (
    <IntroCon>
      <Grid16>
        <ClientsCon>
          <SmallAboutP> {data.clients.text}</SmallAboutP>
        </ClientsCon>
        <AboutCon>
          <SmallAboutP>{data.short_intro.text}</SmallAboutP>
        </AboutCon>
      </Grid16>
    </IntroCon>
  );
};
