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
const HelveticaLrgCon = styled.div`
  p {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.4px;
    line-height: 112.5%;
  }
`;
const StatementCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 666px) {
    /* width: calc(100% - 10px);
    margin-left: 5px; */
  }
`;
const Statement1Con = styled.div`
  grid-column: span 8;
`;
const Statement2Con = styled.div`
  grid-column: span 8;
  @media (max-width: 666px) {
    margin-top: 25px;
  }
`;

export const Statement = ({ data }) => {
  return (
    <StatementCon>
      <Grid16>
        <Statement1Con>
          <HelveticaLrgCon>
            <div
              dangerouslySetInnerHTML={{
                __html: data.statement_1.html,
              }}
            />
          </HelveticaLrgCon>
        </Statement1Con>
        <Statement2Con>
          <HelveticaLrgCon>
            <div
              dangerouslySetInnerHTML={{
                __html: data.statement_2.html,
              }}
            />
          </HelveticaLrgCon>
        </Statement2Con>
      </Grid16>
    </StatementCon>
  );
};
