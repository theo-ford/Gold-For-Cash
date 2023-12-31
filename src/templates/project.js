import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { Helmet } from "react-helmet";
import { ImageOrientation } from "../components/utils/image-orientation";
import styled, { createGlobalStyle } from "styled-components";
import ReactPlayer from "react-player";
// import { VideoComponent } from "../components/tf/video_component";
// import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";
import { useMediaQuery } from "../components/tf/media-query";

const Project = ({ data }) => {
  return <p>testing</p>;
};

export default withPrismicPreview(Project);

export const query = graphql`
  query Artists($uid: String!) {
    prismicProject(uid: { eq: $uid }) {
      uid
      id
      data {
        title {
          text
          html
        }
        about {
          html
          text
        }
        client {
          html
          text
        }
        project_type {
          html
          text
        }
        team {
          html
          text
        }
      }
    }
  }
`;
