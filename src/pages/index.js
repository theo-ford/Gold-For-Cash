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
  width: 400px;
  position: fixed;
  margin: 10px;
  img {
    width: 100%;
  }
`;
const IntroCon = styled.div`
  position: fixed;
  margin: 10px;
  width: calc(100% - 20px);
`;
const ClientsCon = styled.div`
  grid-column: 9 / span 2;
`;
const AboutCon = styled.div`
  grid-column: span 6;
`;
const Img1 = styled.img`
  width: 500px;
`;
const Font = styled.p`
  font-family: "DecimaMonoPro";
`;
const SmallAboutP = styled.p`
  font-family: "DecimaMonoPro";
  font-size: 6px;
  letter-spacing: -2%;
`;
const HeroCon = styled.div`
  width: 100%;
  height: 100vh;
  /* background-color: red; */
  position: relative;
  float: left;
`;

const SizzleVidConCon = styled.div`
  margin: 10px;
`;
const SizzleVidCon = styled.div`
  grid-column: 9 / span 8;
  /* background-color: green;
  height: 400px; */
`;
const ProjectsCon = styled.div`
  float: left;
  width: 100%;
`;
const SizzleVid = styled.video`
  width: 100%;
`;
const NavCon = styled.div`
  width: calc(100% - 20px);
  position: fixed;
  margin: 10px;
  bottom: 0;
  height: 100px;
  /* background-color: green; */
`;
const ContactTitleCon = styled.div`
  grid-column: span 1;
`;
const ContactInfoCon = styled.div`
  grid-column: span 2;
`;
const DecimaP = styled.div`
  font-family: "DecimaMonoPro";
  font-size: 12px;
  letter-spacing: -2%;
`;
const AddressTitleCon = styled.div`
  grid-column: span 1;
`;
const AddressCon = styled.div`
  grid-column: span 2;
`;
const DecimaPCon = styled.div`
  p {
    font-family: "DecimaMonoPro";
    font-size: 12px;
    letter-spacing: -2%;
  }
`;
const SocialsTitleCon = styled.div`
  grid-column: span 1;
`;
const SocialsLinksCon = styled.div`
  grid-column: span 1;
`;
const PageLinksCon = styled.div`
  grid-column: span 4;
`;
const PageLinks = styled.p`
  font-family: "Linotype Univers 530 Medium";
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -2%;
  line-height: 112.5%;
`;
const CodeCon = styled.div`
  grid-column: span 2;
`;
const GMTCon = styled.div`
  grid-column: span 1;
`;

const ESTCon = styled.div`
  grid-column: span 1;
`;
const ContentsCon = styled.div`
  margin-bottom: 200px;
  margin-left: 10px;
`;

const ProjectInfoCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
`;
const Col1 = styled.div`
  grid-column: span 4;
`;

const Col2 = styled.div`
  grid-column: span 4;
`;
const Col3 = styled.div`
  grid-column: span 8;
`;
const FourImgCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
`;
const FourImgImgCon = styled.div`
  grid-column: span 4;
  img {
    width: 100%;
  }
`;

const Index = ({ data }) => {
  const contents = data.prismicHomepage.data.project_relationship_group.map(
    (content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        const handleClickScroll = () => {
          var element = document.getElementById(
            `${content.project_relationship_field.document.uid}`
          );
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        };

        return (
          <div onClick={handleClickScroll}>
            <PageLinks>
              0{index + 1}{" "}
              {content.project_relationship_field.document.data.title.text}
            </PageLinks>
          </div>
        );
      }
    }
  );

  const overview = data.prismicHomepage.data.project_relationship_group.map(
    (content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        console.log(content.project_relationship_field.document.type);
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            console.log(content_four.slice_type);
            if (content_four.slice_type == "4ximg") {
              return (
                <FourImgCon>
                  <Grid16>
                    <FourImgImgCon>
                      {content_four.primary.img1.fluid != null ? (
                        <img src={content_four.primary.img1.fluid.src} />
                      ) : (
                        ""
                      )}
                    </FourImgImgCon>
                    <FourImgImgCon>
                      {content_four.primary.img2.fluid != null ? (
                        <img src={content_four.primary.img2.fluid.src} />
                      ) : (
                        ""
                      )}
                    </FourImgImgCon>
                    <FourImgImgCon>
                      {content_four.primary.img3.fluid != null ? (
                        <img src={content_four.primary.img3.fluid.src} />
                      ) : (
                        ""
                      )}
                    </FourImgImgCon>
                    <FourImgImgCon>
                      {content_four.primary.img4.fluid != null ? (
                        <img src={content_four.primary.img4.fluid.src} />
                      ) : (
                        ""
                      )}
                    </FourImgImgCon>
                  </Grid16>
                </FourImgCon>
              );
            }
          }
        );
        return (
          <div id={content.project_relationship_field.document.uid}>
            <ProjectInfoCon>
              <Grid16>
                <Col1>
                  <DecimaPCon>
                    <p>
                      Project: <br></br>
                      {
                        content.project_relationship_field.document.data.title
                          .text
                      }
                      <br></br>
                      <br></br>
                    </p>
                  </DecimaPCon>
                  <DecimaPCon>
                    <p>
                      Client:<br></br>
                      {
                        content.project_relationship_field.document.data.client
                          .text
                      }
                    </p>
                  </DecimaPCon>
                </Col1>
                <Col2>
                  <DecimaPCon>
                    <p>Team:</p>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          content.project_relationship_field.document.data.team
                            .html,
                      }}
                    />
                    <br></br>
                  </DecimaPCon>
                  <DecimaPCon>
                    <p>
                      Agency:<br></br>
                      {
                        content.project_relationship_field.document.data.agency
                          .text
                      }
                    </p>
                  </DecimaPCon>
                </Col2>
                <Col3>
                  <DecimaPCon>
                    <div
                      dangerouslySetInnerHTML={{
                        __html:
                          content.project_relationship_field.document.data.about
                            .html,
                      }}
                    />
                  </DecimaPCon>
                </Col3>
              </Grid16>
            </ProjectInfoCon>

            {project}
          </div>
        );
      }
    }
  );

  return (
    <>
      <HeroCon>
        <SizzleVidConCon>
          <Grid16>
            <SizzleVidCon>
              <SizzleVid autoPlay playsInline muted loop>
                <source src={data.prismicHomepage.data.sizzle.url}></source>
              </SizzleVid>
            </SizzleVidCon>
          </Grid16>
        </SizzleVidConCon>
      </HeroCon>

      <IntroCon>
        <Grid16>
          <ClientsCon>
            <SmallAboutP> {data.prismicHomepage.data.clients.text}</SmallAboutP>
          </ClientsCon>
          <AboutCon>
            <SmallAboutP>
              {data.prismicHomepage.data.short_intro.text}
            </SmallAboutP>
          </AboutCon>
        </Grid16>
      </IntroCon>

      <NavCon>
        <Grid16>
          <ContactTitleCon>
            <DecimaP>Email:</DecimaP>
            <DecimaP>Web:</DecimaP>
            <DecimaP>Phone:</DecimaP>
          </ContactTitleCon>
          <ContactInfoCon>
            <DecimaP>{data.prismicAbout.data.email.text}</DecimaP>
            <DecimaP>{data.prismicAbout.data.web.text}</DecimaP>
            <DecimaP>{data.prismicAbout.data.phone.text}</DecimaP>
          </ContactInfoCon>
          <AddressTitleCon>
            <DecimaP>Address:</DecimaP>
          </AddressTitleCon>
          <AddressCon>
            <DecimaPCon>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.address.html,
                }}
              />
            </DecimaPCon>
          </AddressCon>
          <SocialsTitleCon>
            <DecimaP>Socials</DecimaP>
          </SocialsTitleCon>
          <SocialsLinksCon>
            <DecimaP>Instagram</DecimaP>
            <DecimaP>Twitter</DecimaP>
            <DecimaP>LinkedIn</DecimaP>
          </SocialsLinksCon>
          <PageLinksCon>
            <PageLinks>(Selected)</PageLinks>
            <PageLinks>About</PageLinks>
            <PageLinks>Archive</PageLinks>
          </PageLinksCon>
          <CodeCon>
            <PageLinks style={{ fontSize: "12px" }}>TRX11-122</PageLinks>
          </CodeCon>
          <GMTCon>
            <DecimaP>GMT 14:52</DecimaP>
          </GMTCon>
          <ESTCon>
            <DecimaP>EST 20:52</DecimaP>
          </ESTCon>
        </Grid16>
      </NavCon>

      <LogoCon>
        <Icon style={{ width: "100%", height: "100%" }}></Icon>
      </LogoCon>
      <ContentsCon>{contents}</ContentsCon>

      <ProjectsCon>{overview}</ProjectsCon>
    </>
  );
};

export default withPreview(Index);

export const query = graphql`
  query MyQuery {
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
                  body {
                    ... on PrismicProjectBody4ximg {
                      id
                      slice_type
                      primary {
                        img1 {
                          fluid {
                            src
                          }
                        }
                        img2 {
                          fluid {
                            src
                          }
                        }
                        img3 {
                          fluid {
                            src
                          }
                        }
                        img4 {
                          fluid {
                            src
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
