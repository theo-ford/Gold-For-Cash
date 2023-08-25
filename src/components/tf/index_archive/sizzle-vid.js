import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useMediaQuery } from "../media-query";
import Div100vh from "react-div-100vh";

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
const HeroCon = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  position: relative;
  float: left;
  @media (max-width: 666px) {
    height: 100%;
  }
`;

const SizzleVidConCon = styled.div`
  margin: 10px;
`;
const SizzleVidCon = styled.div`
  grid-column: 9 / span 8;
  /* background-color: green;
  height: 400px; */
`;
const ProjectsCon = styled.div`
  float: left;
  width: 100%;
`;
const SizzleVid = styled.video`
  width: 100%;
`;
const MobileSizzleVidConCon = styled.div`
  margin: 10px;
  /* margin: 5px; */
  position: absolute;
  bottom: 0;
`;
const MobileSizzleVidCon = styled.div`
  grid-column: span 2;
  /* background-color: green;
  height: 400px; */
`;

export const SizzleVidComponent = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  return (
    <>
      <HeroCon>
        {isPageWide ? (
          <SizzleVidConCon>
            <Grid16>
              <SizzleVidCon>
                <SizzleVid autoPlay playsInline muted loop>
                  <source src={data.sizzle.url}></source>
                </SizzleVid>
              </SizzleVidCon>
            </Grid16>
          </SizzleVidConCon>
        ) : (
          <Div100vh>
            <MobileSizzleVidConCon>
              <Grid16>
                <MobileSizzleVidCon>
                  <SizzleVid autoPlay playsInline muted loop>
                    <source src={data.sizzle_mobile.url}></source>
                  </SizzleVid>
                </MobileSizzleVidCon>
              </Grid16>
            </MobileSizzleVidConCon>
          </Div100vh>
        )}
      </HeroCon>
    </>
  );
};
