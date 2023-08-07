import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { withPreview } from "gatsby-source-prismic";
import { ImageOrientation } from "../components/utils/image-orientation";
import { Helmet } from "react-helmet";
import "../components/styles/index.css";
import { useMediaQuery } from "../components/tf/media-query";
// import Icon from "../../assets/WhiteLogo.svg";
import Slider from "react-slick";

import { useOnScreen } from "../components/hooks/useOnScreen";
import ReactPlayer from "react-player";
import Icon from "../../assets/G4C_kern_black.svg";

const Grid16 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */;
  /* width: calc(100% - 20px); */
  grid-column-gap: 10px;
`;

const LogoCon = styled.div`
  width: 100px;
  img {
    width: 100%;
  }
`;
const Img1 = styled.img`
  width: 100px;
`;
const Font = styled.p`
  font-family: "DecimaMonoPro";
`;

const Index = ({ data }) => {
  const overview = data.prismicHomepage.data.project_relationship_group.map(
    (content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        console.log(content.project_relationship_field.document.type);
        // return (
        //   <p>{content.project_relationship_field.document.data.title.text}</p>
        // );
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            console.log(content_four.slice_type);
            // return <p>testing</p>;
            if (content_four.slice_type == "image") {
              return <Img1 src={content_four.primary.image.fluid.src} />;
            }
          }
        );
        return (
          <div>
            <Link to={content.project_relationship_field.document.uid}>
              <Font>
                {content.project_relationship_field.document.data.title.text}
              </Font>
            </Link>
            {project}
          </div>
        );
      }
    }
  );
  return (
    <>
      <LogoCon>
        <Icon style={{ width: "100%", height: "100%" }}></Icon>
      </LogoCon>

      <p>{overview}</p>
    </>
  );
};

export default withPreview(Index);

export const query = graphql`
  query MyQuery {
    prismicHomepage {
      data {
        project_relationship_group {
          project_relationship_field {
            document {
              ... on PrismicProject {
                id
                uid
                type
                data {
                  title {
                    text
                  }
                  body {
                    ... on PrismicProjectBodyImage {
                      id
                      slice_type
                      primary {
                        image {
                          fluid {
                            src
                          }
                        }
                        image_caption {
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
  }
`;
