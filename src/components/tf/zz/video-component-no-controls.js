import React, { useEffect, useState, useRef, useCallback } from "react";

import styled from "styled-components";
import ReactPlayer from "react-player";

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const VideoComponentNoControls = ({ content, source }) => {
  const videoRef = useRef();

  return (
    <>
      <PlayerWrapper>
        <ReactPlayer
          ref={videoRef}
          className="react-player"
          playing={true}
          muted={true}
          loop={true}
          controls={false}
          width="100%"
          height="100%"
          url={source}
          playsinline={true}
        ></ReactPlayer>
      </PlayerWrapper>
    </>
  );
};
