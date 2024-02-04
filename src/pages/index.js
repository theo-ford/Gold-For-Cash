import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
// import Icon from "../../assets/WhiteLogo.svg";
import Slider from "react-slick";

import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";
import Icon from "../../assets/G4C_kern_black.svg";

import { AnimationFixed1 } from "../components/tf/animation-fixed-1";
import { VideoComponent } from "../components/tf/zz/video_component_with_controls";
import { VideoComponentNoControls } from "../components/tf/zz/video-component-no-controls";

import { Nav } from "../components/tf/nav";
import { TwoImg } from "../components/tf/index_archive/two-img";
import { FourImg } from "../components/tf/index_archive/four-img";
import { TwoVid } from "../components/tf/index_archive/two-vid";
import { ProjectInfo } from "../components/tf/index_archive/project-info";
import { Statement } from "../components/tf/index_archive/statement";
import { Intro } from "../components/tf/index_archive/intro";
import { SizzleVidComponent } from "../components/tf/index_archive/sizzle-vid";
import { Contents } from "../components/tf/index_archive/contents";

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

const ProjectsCon = styled.div`
  float: left;
  width: 100%;
`;
const UIDWrapper = styled.div`
  height: auto;
  width: 100%;
  float: left;
  display: block;
`;
const PageContentCon = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  overflow: hidden;
`;

const Index = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  // console.log("Test");
  // console.log(data.prismicHomepage.data.project_relationship_group);
  // const contents2 = data.prismicHomepage.data.project_relationship_group
  //   .filter(function(content) {
  //     if (content.project_relationship_field.document.type == "statement") {
  //       return null;
  //     }
  //     return content;
  //   })
  //   .map((content, index) => {
  //     if (content.project_relationship_field.document.type == "project") {
  //       const handleClickScroll = () => {
  //         var element = document.getElementById(
  //           `${content.project_relationship_field.document.uid}`
  //         );
  //         if (element) {
  //           element.scrollIntoView({ behavior: "smooth" });
  //         }
  //       };
  //       var i = 1;
  //       var x = i++;
  //       return (
  //         <div onClick={handleClickScroll}>
  //           <PageLinks>
  //             {
  //               content.project_relationship_field.document.data.index_number
  //                 .text
  //             }{" "}
  //             {content.project_relationship_field.document.data.title.text}
  //           </PageLinks>
  //         </div>
  //       );
  //     }
  //   });

  const overview = data.prismicHomepage.data.project_relationship_group.map(
    (content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "4ximg") {
              return <FourImg data={content_four.primary} />;
            } else if (content_four.slice_type == "2ximg") {
              return <TwoImg data={content_four.primary} />;
            } else if (content_four.slice_type == "video") {
              // console.log("VIDEO");
              // console.log(content_four.primary.video_url_1);
              // if (
              //   content_four.primary.video_url_1 != null &&
              //   content_four.primary.video_url_2 != null
              // ) {
              //   console.log(content_four.primary.video_url_1.url);
              // }
              return <TwoVid data={content_four.primary} />;
            }
          }
        );
        return (
          <UIDWrapper id={content.project_relationship_field.document.uid}>
            <ProjectInfo
              data={content.project_relationship_field.document}
            ></ProjectInfo>
            {project}
          </UIDWrapper>
        );
      }
      if (content.project_relationship_field.document.type == "statement") {
        return (
          <Statement data={content.project_relationship_field.document.data} />
        );
      }
    }
  );
  return (
    <>
      <Helmet>
        <title>Gold For Cash</title>
      </Helmet>
      <PageContentCon>
        <SizzleVidComponent data={data.prismicHomepage.data} />
        <Intro data={data.prismicHomepage.data} />
        <Nav />
        <Contents data={data.prismicHomepage.data.project_relationship_group} />
        <ProjectsCon>{overview}</ProjectsCon>
      </PageContentCon>
      {/* <AnimationFixed1></AnimationFixed1> */}
    </>
  );
};

export default withPrismicPreview(Index);

export const query = graphql`
  query MyQuery5 {
    prismicHomepage {
      data {
        clients {
          text
        }
        short_intro {
          text
        }
        sizzle {
          url
        }
        sizzle_mobile {
          url
        }
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicStatement {
                id
                type
                data {
                  statement_1 {
                    text
                    html
                  }
                  statement_2 {
                    html
                    text
                  }
                }
              }
              ... on PrismicProject {
                id
                uid
                type
                data {
                  title {
                    text
                    html
                  }
                  index_number {
                    text
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
                  body {
                    ... on PrismicProjectDataBodyVideo {
                      id
                      slice_type
                      primary {
                        video_url_1 {
                          url
                        }
                        video_url_2 {
                          url
                        }
                        video_caption_1 {
                          html
                          text
                        }
                        video_caption_2 {
                          html
                          text
                        }
                      }
                    }
                    ... on PrismicProjectDataBody4ximg {
                      id
                      slice_type
                      primary {
                        img1 {
                          gatsbyImageData
                        }
                        img1_caption {
                          html
                          text
                        }
                        img2 {
                          gatsbyImageData
                        }
                        img2_caption {
                          html
                          text
                        }
                        img3 {
                          gatsbyImageData
                        }
                        img3_caption {
                          html
                          text
                        }
                        img4 {
                          gatsbyImageData
                        }
                        img4_caption {
                          html
                          text
                        }
                      }
                    }
                    ... on PrismicProjectDataBody2ximg {
                      id
                      slice_type
                      primary {
                        img1 {
                          gatsbyImageData
                        }
                        img1_caption {
                          html
                          text
                        }
                        img2 {
                          gatsbyImageData
                        }
                        img2_caption {
                          html
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    prismicAbout {
      data {
        address {
          text
          html
        }
        email {
          text
        }
        phone {
          text
        }
        web {
          text
        }
      }
    }
  }
`;
