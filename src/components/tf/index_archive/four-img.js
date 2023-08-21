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
const FourImgCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 666px) {
    margin-top: 0px;
    margin-bottom: 0px;
    /* width: calc(100% - 10px);
    margin-left: 5px; */
  }
`;
const FourImgImgCon = styled.div`
  grid-column: span 4;

  img {
    width: 100%;
    margin-bottom: 5px;
  }
  @media (max-width: 666px) {
    grid-column: span 2;
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

export const FourImg = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  if (isPageWide) {
    return (
      <FourImgCon>
        <Grid16>
          <FourImgImgCon>
            {data.img1.fluid != null ? <img src={data.img1.fluid.src} /> : ""}
            <DecimaPCon>
              <p>{data.img1_caption.text}</p>
            </DecimaPCon>
          </FourImgImgCon>
          <FourImgImgCon>
            {data.img2.fluid != null ? <img src={data.img2.fluid.src} /> : ""}
            <DecimaPCon>
              <p>{data.img2_caption.text}</p>
            </DecimaPCon>
          </FourImgImgCon>
          <FourImgImgCon>
            {data.img3.fluid != null ? <img src={data.img3.fluid.src} /> : ""}
            <DecimaPCon>
              <p>{data.img3_caption.text}</p>
            </DecimaPCon>
          </FourImgImgCon>
          <FourImgImgCon>
            {data.img4.fluid != null ? <img src={data.img4.fluid.src} /> : ""}
            <DecimaPCon>
              <p>{data.img4_caption.text}</p>
            </DecimaPCon>
          </FourImgImgCon>
        </Grid16>
      </FourImgCon>
    );
  } else {
    return (
      <FourImgCon>
        <Grid16>
          {data.img1.fluid != null ? (
            <FourImgImgCon>
              <img src={data.img1.fluid.src} />
              <DecimaPCon>
                <p>{data.img1_caption.text}</p>
              </DecimaPCon>
            </FourImgImgCon>
          ) : (
            ""
          )}
          {data.img2.fluid != null ? (
            <FourImgImgCon>
              <img src={data.img2.fluid.src} />
              <DecimaPCon>
                <p>{data.img2_caption.text}</p>
              </DecimaPCon>
            </FourImgImgCon>
          ) : (
            ""
          )}
          {data.img3.fluid != null ? (
            <FourImgImgCon>
              <img src={data.img3.fluid.src} />
              <DecimaPCon>
                <p>{data.img3_caption.text}</p>
              </DecimaPCon>
            </FourImgImgCon>
          ) : (
            ""
          )}
          {data.img4.fluid != null ? (
            <FourImgImgCon>
              <img src={data.img4.fluid.src} />
              <DecimaPCon>
                <p>{data.img4_caption.text}</p>
              </DecimaPCon>
            </FourImgImgCon>
          ) : (
            ""
          )}
        </Grid16>
      </FourImgCon>
    );
  }
};
