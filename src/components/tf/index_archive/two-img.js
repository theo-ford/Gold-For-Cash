import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useMediaQuery } from "../media-query";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
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

const TwoImgCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  float: left;
  display: block;
  @media (max-width: 666px) {
    margin-top: 0px;
    margin-bottom: 0px;
    /* width: calc(100% - 10px);
    margin-left: 5px; */
  }
`;
const TwoImgImgCon = styled.div`
  grid-column: span 8;

  img {
    width: 100%;
    margin-bottom: 5px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
    margin-top: 100px;
    margin-bottom: 100px;
  }
`;
const DecimaPCon = styled.div`
  p {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
  }
`;

export const TwoImg = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  // console.log("DATA.IMG1");
  // console.log(data.img1);
  const img1 = getImage(data.img1);
  const img2 = getImage(data.img2);
  // console.log("IMG1");
  // console.log(img1);

  if (isPageWide) {
    return (
      <TwoImgCon>
        <Grid16>
          <TwoImgImgCon>
            {img1 != undefined ? <GatsbyImage image={img1} /> : ""}
            <DecimaPCon>
              <p>{data.img1_caption.text}</p>
            </DecimaPCon>
          </TwoImgImgCon>
          <TwoImgImgCon>
            {img2 != undefined ? <GatsbyImage image={img2} /> : ""}
            <DecimaPCon>
              <p>{data.img2_caption.text}</p>
            </DecimaPCon>
          </TwoImgImgCon>
        </Grid16>
      </TwoImgCon>
    );
  } else {
    return (
      <TwoImgCon>
        <Grid16>
          {img1 != undefined ? (
            <TwoImgImgCon>
              <GatsbyImage image={img1} />
              <DecimaPCon>
                <p>{data.img1_caption.text}</p>
              </DecimaPCon>
            </TwoImgImgCon>
          ) : (
            ""
          )}
          {img2 != undefined ? (
            <TwoImgImgCon>
              <GatsbyImage image={img2} />
              <DecimaPCon>
                <p>{data.img2_caption.text}</p>
              </DecimaPCon>
            </TwoImgImgCon>
          ) : (
            ""
          )}
        </Grid16>
      </TwoImgCon>
    );
  }
};
