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
// import { TwoVid } from "../components/tf/index_archive/two-vid";
import { ProjectInfo } from "../components/tf/index_archive/project-info";
import { Statement } from "../components/tf/index_archive/statement";
import { Intro } from "../components/tf/index_archive/intro";
import { SizzleVidComponent } from "../components/tf/index_archive/sizzle-vid";
import { Contents } from "../components/tf/index_archive/contents";
import { TwoVid } from "../components/tf/index_archive/two-vid";

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
const PageLinks = styled.p`
  font-family: "Helvetica Neue LT Pro", sans-serif;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -2%;
  line-height: 112.5%;
`;

const ContentsCon = styled.div`
  margin-bottom: 200px;
  margin-left: 10px;
  @media (max-width: 666px) {
    margin-left: 5px;
  }
`;

const Archive = ({ data }) => {
  // console.log(data.prismicArchive.data.archive_relationship_group);

  const Contents = () => {
    const contents2 = data.prismicArchive.data.archive_relationship_group
      .filter(function(content) {
        if (content.archive_relationship_field.document.type == "statement") {
          return null;
        }
        return content;
      })
      .map((content, index) => {
        if (content.archive_relationship_field.document.type == "project") {
          const handleClickScroll = () => {
            var element = document.getElementById(
              `${content.archive_relationship_field.document.uid}`
            );
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          };
          var i = 1;
          var x = i++;
          return (
            <div onClick={handleClickScroll}>
              <PageLinks>
                {
                  content.archive_relationship_field.document.data.index_number
                    .text
                }{" "}
                {content.archive_relationship_field.document.data.title.text}
              </PageLinks>
            </div>
          );
        }
      });
    return <ContentsCon>{contents2}</ContentsCon>;
  };

  const archive = data.prismicArchive.data.archive_relationship_group.map(
    (content, index) => {
      if (content.archive_relationship_field.document.type == "project") {
        const project = content.archive_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "4ximg") {
              return <FourImg data={content_four.primary} />;
            } else if (content_four.slice_type == "2ximg") {
              return <TwoImg data={content_four.primary} />;
            } else if (content_four.slice_type == "video") {
              // return <TwoVid data={content_four.primary} />;
              return <TwoVid data={content_four.primary} />;
            }
          }
        );
        // console.log(
        //   content.archive_relationship_field.document.data.title.text
        // );
        return (
          <UIDWrapper id={content.archive_relationship_field.document.uid}>
            <ProjectInfo
              data={content.archive_relationship_field.document}
            ></ProjectInfo>
            {project}
          </UIDWrapper>
        );
      }
      if (content.archive_relationship_field.document.type == "statement") {
        return (
          <Statement data={content.archive_relationship_field.document.data} />
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
        <Contents />
        <ProjectsCon>{archive}</ProjectsCon>
      </PageContentCon>
      {/* <AnimationFixed1></AnimationFixed1> */}
    </>
  );
};

export default withPrismicPreview(Archive);

export const query = graphql`
  query MyQuery7 {
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
    prismicArchive {
      data {
        archive_relationship_group {
          archive_relationship_field {
            document {
              ... on PrismicProject {
                id
                type
                uid
                data {
                  about {
                    html
                    text
                  }
                  project_type {
                    html
                    text
                  }
                  client {
                    html
                    text
                  }
                  index_number {
                    html
                    text
                  }
                  team {
                    html
                    text
                  }
                  title {
                    html
                    text
                  }
                  body {
                    ... on PrismicProjectDataBody4ximg {
                      id
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
                      slice_type
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
                    ... on PrismicProjectDataBodyVideo {
                      id
                      slice_type
                      primary {
                        video_caption_1 {
                          html
                          text
                        }
                        video_caption_2 {
                          html
                          text
                        }
                        video_url_1 {
                          url
                        }
                        video_url_2 {
                          url
                        }
                      }
                    }
                  }
                }
              }
              ... on PrismicStatement {
                id
                type
                data {
                  statement_1 {
                    html
                    text
                  }
                  statement_2 {
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
`;
