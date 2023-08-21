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

const ProjectInfoCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 666px) {
    /* width: calc(100% - 10px);
    margin-left: 5px; */
  }
`;
const BoldTitleCon = styled.div`
  grid-column: span 16;
`;
const Col1 = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;

const Col2 = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;
const Col3 = styled.div`
  grid-column: span 8;
  @media (max-width: 666px) {
    grid-column: span 4;
    margin-top: 20px;
  }
`;
const HelveticaLrgCon = styled.div`
  p {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -2%;
    line-height: 112.5%;
  }
`;
const DecimaPCon = styled.div`
  p {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
  }
`;

export const ProjectInfo = ({ data }) => {
  return (
    <ProjectInfoCon>
      <Grid16>
        <BoldTitleCon>
          <HelveticaLrgCon>
            <p>
              {data.data.index_number.text} {data.data.title.text}
              <br></br>
              <br></br>
            </p>
          </HelveticaLrgCon>
        </BoldTitleCon>
      </Grid16>
      <Grid16>
        <Col1>
          <DecimaPCon>
            <p>
              Project: <br></br>
              {data.data.title.text}
              <br></br>
              <br></br>
            </p>
          </DecimaPCon>
          <DecimaPCon>
            <p>
              Client:<br></br>
              {data.data.client.text}
            </p>
          </DecimaPCon>
        </Col1>
        <Col2>
          <DecimaPCon>
            <p>Team:</p>
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.team.html,
              }}
            />
            <br></br>
          </DecimaPCon>
          <DecimaPCon>
            <p>
              Agency:<br></br>
              {data.data.agency.text}
            </p>
          </DecimaPCon>
        </Col2>
        <Col3>
          <DecimaPCon>
            <div
              dangerouslySetInnerHTML={{
                __html: data.data.about.html,
              }}
            />
          </DecimaPCon>
        </Col3>
      </Grid16>
    </ProjectInfoCon>
  );
};
