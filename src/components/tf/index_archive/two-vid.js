import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useMediaQuery } from "../media-query";
import ReactPlayer from "react-player";

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
const VideoConCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 666px) {
    /* grid-column: span 4; */
    margin-top: 100px;
    margin-bottom: 100px;
    /* width: calc(100% - 10px);
    margin-left: 5px; */
  }
`;
const VideoCon = styled.div`
  grid-column: span 8;
  /* background-color: red; */
  @media (max-width: 666px) {
    grid-column: span 4;
    /* margin-top: 100px;
    margin-bottom: 100px; */
  }
`;
const VideoConInner = styled.div`
  width: 100%;
  /* padding-top: 56.25%;
  position: relative; */
  /* background-color: black; */
  margin-bottom: 5px;
`;
const VideoConInner2 = styled.div`
  /* position: absolute; */
  position: relative;
  padding-top: 56.25%;

  /* background-color: black; */
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
const DecimaPCon = styled.div`
  p {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
  }
`;
const DecimaP = styled.div`
  font-family: "DecimaMonoPro", sans-serif;
  font-size: 12px;
  letter-spacing: -2%;
`;

export const TwoVid = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  var inner1background = null;
  var inner2background = null;

  if (data.video_url_1.url == "") {
    inner1background = null;
  } else {
    inner1background = true;
  }

  if (data.video_url_2.url == "") {
    inner2background = null;
  } else {
    inner2background = true;
  }

  // const player = new Plyr("#player");
  if (isPageWide) {
    return (
      <VideoConCon>
        <Grid16>
          <VideoCon>
            <VideoConInner
              style={
                inner1background
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "none" }
              }
            >
              <VideoConInner2>
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  // height="56.25"
                  controls={true}
                  url={data.video_url_1.url}
                ></ReactPlayer>
                {/* <VideoComponent
                  source={content_four.primary.video_url_1.url}
                ></VideoComponent> */}
              </VideoConInner2>
            </VideoConInner>

            <DecimaP>{data.video_caption_1.text}</DecimaP>
          </VideoCon>

          <VideoCon>
            <VideoConInner
              style={
                inner2background
                  ? { backgroundColor: "black" }
                  : { backgroundColor: "none" }
              }
            >
              <VideoConInner2>
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  // height="56.25"
                  controls={true}
                  url={data.video_url_2.url}
                ></ReactPlayer>
              </VideoConInner2>
            </VideoConInner>

            <DecimaP>{data.video_caption_2.text}</DecimaP>
          </VideoCon>
        </Grid16>
      </VideoConCon>
    );
  } else {
    return (
      <VideoConCon>
        <Grid16>
          {inner1background ? (
            <VideoCon>
              <VideoConInner
                style={
                  inner1background
                    ? { backgroundColor: "black" }
                    : { backgroundColor: "none" }
                }
              >
                <VideoConInner2>
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    // height="56.25"
                    controls={true}
                    url={data.video_url_1.url}
                  ></ReactPlayer>
                </VideoConInner2>
              </VideoConInner>

              <DecimaP>{data.video_caption_1.text}</DecimaP>
            </VideoCon>
          ) : (
            ""
          )}
          {inner2background ? (
            <VideoCon>
              <VideoConInner
                style={
                  inner1background
                    ? { backgroundColor: "black" }
                    : { backgroundColor: "none" }
                }
              >
                <VideoConInner2>
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    // height="56.25"
                    controls={true}
                    url={data.video_url_2.url}
                  ></ReactPlayer>
                </VideoConInner2>
              </VideoConInner>

              <DecimaP>{data.video_caption_2.text}</DecimaP>
            </VideoCon>
          ) : (
            ""
          )}
        </Grid16>
      </VideoConCon>
    );
  }
};
