import React, { useEffect, useState } from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import { Helmet } from "react-helmet";
import { ImageOrientation } from "../components/utils/image-orientation";
import styled, { createGlobalStyle } from "styled-components";
import ReactPlayer from "react-player";
// import { VideoComponent } from "../components/tf/video_component";
import { VideoComponentNoControls } from "../components/tf/video-component-no-controls";
import { useMediaQuery } from "../components/tf/media-query";

const Project = ({ data }) => {};

export default withPreview(Project);

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
        agency {
          html
          text
        }
        team {
          html
          text
        }
        # body1 {
        #   ... on PrismicProjectBody1ProjectPageImage {
        #     id
        #     slice_type
        #     slice_label
        #     primary {
        #       project_page_image {
        #         fluid {
        #           src
        #         }
        #       }
        #       project_page_image_caption {
        #         text
        #       }
        #     }
        #   }
        # }
        # categories {
        #   category {
        #     document {
        #       ... on PrismicCategory {
        #         id
        #         data {
        #           name
        #         }
        #       }
        #     }
        #   }
        # }
        # body {
        #   ... on PrismicProjectBodyCol8 {
        #     id
        #     slice_type
        #     primary {
        #       img {
        #         fluid(srcSetBreakpoints: [1400, 1600, 2400, 3600]) {
        #           srcSetWebp
        #           srcWebp
        #         }
        #       }
        #       caption {
        #         html
        #         text
        #       }
        #     }
        #   }
        # }
      }
    }
  }
`;
