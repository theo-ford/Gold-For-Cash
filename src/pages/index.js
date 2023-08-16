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

import { AnimationFixed1 } from "../components/tf/animation-fixed-1";
import { VideoComponent } from "../components/tf/zz/video_component_with_controls";
import { VideoComponentNoControls } from "../components/tf/zz/video-component-no-controls";
// import Plyr from "plyr";
// import "plyr/dist/plyr.css";

// import "../components/plyr-master/src/js/plyr.js";
// import Plyr from "plyr-react";
// import "plyr-react/dist/plyr.css";
// import "plyr/src/js/plyr.js";
// import plyr from "plyr";

const Grid16 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr /* 4 */ 1fr 1fr 1fr 1fr /* 8 */ 1fr 1fr 1fr 1fr /* 12 */ 1fr 1fr 1fr 1fr /* 16 */;
  /* width: calc(100% - 20px); */
  grid-column-gap: 10px;

  @media (max-width: 666px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
`;

const LogoCon = styled.div`
  width: 400px;
  position: fixed;
  margin: 10px;
  z-index: 200;
  img {
    width: 100%;
  }
  @media (max-width: 666px) {
    width: 50%;
  }
`;
const IntroCon = styled.div`
  position: fixed;
  z-index: 200;
  margin: 10px;
  width: calc(100% - 20px);
  @media (max-width: 666px) {
    display: none;
  }
`;
const ClientsCon = styled.div`
  grid-column: 9 / span 2;
`;
const AboutCon = styled.div`
  grid-column: span 6;
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
const MobileSizzleVidConCon = styled.div`
  margin: 10px;
  position: absolute;
  bottom: 0;
`;
const MobileSizzleVidCon = styled.div`
  grid-column: span 2;
  /* background-color: green;
  height: 400px; */
`;
const NavCon = styled.div`
  width: calc(100% - 20px);
  position: fixed;
  margin: 10px;
  bottom: 0;
  height: 100px;
  z-index: 200;
  /* background-color: green; */
`;
const ContactTitleCon = styled.div`
  grid-column: span 1;
  @media (max-width: 666px) {
    display: none;
  }
`;
const ContactInfoCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const DecimaP = styled.div`
  font-family: "DecimaMonoPro";
  font-size: 12px;
  letter-spacing: -2%;
`;
const AddressTitleCon = styled.div`
  grid-column: span 1;
  @media (max-width: 666px) {
    display: none;
  }
`;
const AddressCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
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
  @media (max-width: 666px) {
    display: none;
  }
`;
const SocialsLinksCon = styled.div`
  grid-column: span 1;
  @media (max-width: 666px) {
    display: none;
  }
`;
const PageLinksCon = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: 3 / span 2;
  }
`;
const PageLinks = styled.p`
  font-family: "Helvetica Neue LT Pro";
  font-size: 32px;
  font-weight: bold;
  letter-spacing: -2%;
  line-height: 112.5%;
`;
const HelveticaLrgCon = styled.div`
  p {
    font-family: "Helvetica Neue LT Pro";
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -2%;
    line-height: 112.5%;
  }
`;
const CodeCon = styled.div`
  grid-column: span 2;
  @media (max-width: 666px) {
    display: none;
  }
`;
const GMTCon = styled.div`
  grid-column: span 1;
  @media (max-width: 666px) {
    display: none;
  }
`;

const ESTCon = styled.div`
  grid-column: span 1;
  @media (max-width: 666px) {
    display: none;
  }
`;
const ContentsCon = styled.div`
  margin-bottom: 200px;
  margin-left: 10px;
`;

const ProjectInfoCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const Col1 = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;

const Col2 = styled.div`
  grid-column: span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;
const Col3 = styled.div`
  grid-column: span 8;
  @media (max-width: 666px) {
    grid-column: span 4;
    margin-top: 20px;
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
const TwoImgCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
  @media (max-width: 666px) {
    margin-top: 0px;
    margin-bottom: 0px;
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
const StatementCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;
`;
const Statement1Con = styled.div`
  grid-column: span 8;
`;
const Statement2Con = styled.div`
  grid-column: span 8;
  @media (max-width: 666px) {
    margin-top: 25px;
  }
`;
const VideoConCon = styled.div`
  width: calc(100% - 20px);
  margin-left: 10px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 666px) {
    /* grid-column: span 4; */
    margin-top: 0px;
    margin-bottom: 0px;
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

const PageContentCon = styled.div`
  position: absolute;
  top: 0;
  z-index: 100;
  overflow: hidden;
`;
const BoldTitleCon = styled.div`
  grid-column: span 16;
`;

const Index = ({ data }) => {
  let isPageWide = useMediaQuery("(min-width: 667px)");
  console.log("Test");
  const contents2 = data.prismicHomepage.data.project_relationship_group
    .filter(function(content) {
      if (content.project_relationship_field.document.type == "statement") {
        return null;
      }
      return content;
    })
    .map((content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        const handleClickScroll = () => {
          var element = document.getElementById(
            `${content.project_relationship_field.document.uid}`
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
              0{index + 1}{" "}
              {content.project_relationship_field.document.data.title.text}
            </PageLinks>
          </div>
        );
      }
    });

  const overview = data.prismicHomepage.data.project_relationship_group.map(
    (content, index) => {
      if (content.project_relationship_field.document.type == "project") {
        const project = content.project_relationship_field.document.data.body.map(
          (content_four, index) => {
            if (content_four.slice_type == "4ximg") {
              if (isPageWide) {
                return (
                  <FourImgCon>
                    <Grid16>
                      <FourImgImgCon>
                        {content_four.primary.img1.fluid != null ? (
                          <img src={content_four.primary.img1.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img1_caption.text}</p>
                        </DecimaPCon>
                      </FourImgImgCon>
                      <FourImgImgCon>
                        {content_four.primary.img2.fluid != null ? (
                          <img src={content_four.primary.img2.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img2_caption.text}</p>
                        </DecimaPCon>
                      </FourImgImgCon>
                      <FourImgImgCon>
                        {content_four.primary.img3.fluid != null ? (
                          <img src={content_four.primary.img3.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img3_caption.text}</p>
                        </DecimaPCon>
                      </FourImgImgCon>
                      <FourImgImgCon>
                        {content_four.primary.img4.fluid != null ? (
                          <img src={content_four.primary.img4.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img4_caption.text}</p>
                        </DecimaPCon>
                      </FourImgImgCon>
                    </Grid16>
                  </FourImgCon>
                );
              } else {
                return (
                  <FourImgCon>
                    <Grid16>
                      {content_four.primary.img1.fluid != null ? (
                        <FourImgImgCon>
                          <img src={content_four.primary.img1.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img1_caption.text}</p>
                          </DecimaPCon>
                        </FourImgImgCon>
                      ) : (
                        ""
                      )}
                      {content_four.primary.img2.fluid != null ? (
                        <FourImgImgCon>
                          <img src={content_four.primary.img2.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img2_caption.text}</p>
                          </DecimaPCon>
                        </FourImgImgCon>
                      ) : (
                        ""
                      )}
                      {content_four.primary.img3.fluid != null ? (
                        <FourImgImgCon>
                          <img src={content_four.primary.img3.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img3_caption.text}</p>
                          </DecimaPCon>
                        </FourImgImgCon>
                      ) : (
                        ""
                      )}
                      {content_four.primary.img4.fluid != null ? (
                        <FourImgImgCon>
                          <img src={content_four.primary.img4.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img4_caption.text}</p>
                          </DecimaPCon>
                        </FourImgImgCon>
                      ) : (
                        ""
                      )}
                    </Grid16>
                  </FourImgCon>
                );
              }
            } else if (content_four.slice_type == "2ximg") {
              if (isPageWide) {
                return (
                  <TwoImgCon>
                    <Grid16>
                      <TwoImgImgCon>
                        {content_four.primary.img1.fluid != null ? (
                          <img src={content_four.primary.img1.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img1_caption.text}</p>
                        </DecimaPCon>
                      </TwoImgImgCon>
                      <TwoImgImgCon>
                        {content_four.primary.img2.fluid != null ? (
                          <img src={content_four.primary.img2.fluid.src} />
                        ) : (
                          ""
                        )}
                        <DecimaPCon>
                          <p>{content_four.primary.img2_caption.text}</p>
                        </DecimaPCon>
                      </TwoImgImgCon>
                    </Grid16>
                  </TwoImgCon>
                );
              } else {
                return (
                  <TwoImgCon>
                    <Grid16>
                      {content_four.primary.img1.fluid != null ? (
                        <TwoImgImgCon>
                          <img src={content_four.primary.img1.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img1_caption.text}</p>
                          </DecimaPCon>
                        </TwoImgImgCon>
                      ) : (
                        ""
                      )}
                      {content_four.primary.img2.fluid != null ? (
                        <TwoImgImgCon>
                          <img src={content_four.primary.img2.fluid.src} />
                          <DecimaPCon>
                            <p>{content_four.primary.img2_caption.text}</p>
                          </DecimaPCon>
                        </TwoImgImgCon>
                      ) : (
                        ""
                      )}
                    </Grid16>
                  </TwoImgCon>
                );
              }
            } else if (content_four.slice_type == "video") {
              console.log("VIDEO URL 1");
              console.log(content_four.primary.video_url_1);
              console.log("VIDEO URL 2");
              console.log(content_four.primary.video_url_2);

              var inner1background = null;
              var inner2background = null;

              if (content_four.primary.video_url_1.url == "") {
                inner1background = null;
              } else {
                inner1background = true;
              }

              if (content_four.primary.video_url_2.url == "") {
                inner2background = null;
              } else {
                inner2background = true;
              }

              // const player = new Plyr("#player");
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
                            url={content_four.primary.video_url_1.url}
                          ></ReactPlayer>
                          {/* <VideoComponent
                            source={content_four.primary.video_url_1.url}
                          ></VideoComponent> */}
                        </VideoConInner2>
                      </VideoConInner>

                      <DecimaP>Testing</DecimaP>
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
                            url={content_four.primary.video_url_2.url}
                          ></ReactPlayer>
                        </VideoConInner2>
                      </VideoConInner>

                      <DecimaP>Testing</DecimaP>
                    </VideoCon>
                  </Grid16>
                </VideoConCon>
              );
            }
          }
        );

        return (
          <div id={content.project_relationship_field.document.uid}>
            {/* <div> */}
            <ProjectInfoCon>
              <Grid16>
                <BoldTitleCon>
                  <HelveticaLrgCon>
                    <p>
                      {
                        content.project_relationship_field.document.data.title
                          .text
                      }
                      <br></br>
                      <br></br>
                    </p>
                  </HelveticaLrgCon>
                </BoldTitleCon>
              </Grid16>
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
      if (content.project_relationship_field.document.type == "statement") {
        return (
          <StatementCon>
            <Grid16>
              <Statement1Con>
                <HelveticaLrgCon>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        content.project_relationship_field.document.data
                          .statement_1.html,
                    }}
                  />
                </HelveticaLrgCon>
              </Statement1Con>
              <Statement2Con>
                <HelveticaLrgCon>
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        content.project_relationship_field.document.data
                          .statement_2.html,
                    }}
                  />
                </HelveticaLrgCon>
              </Statement2Con>
            </Grid16>
          </StatementCon>
        );
      }
    }
  );

  console.log("test commit");

  return (
    <>
      <PageContentCon>
        <HeroCon>
          {isPageWide ? (
            <SizzleVidConCon>
              <Grid16>
                <SizzleVidCon>
                  <SizzleVid autoPlay playsInline muted loop>
                    <source src={data.prismicHomepage.data.sizzle.url}></source>
                  </SizzleVid>
                </SizzleVidCon>
              </Grid16>
            </SizzleVidConCon>
          ) : (
            <MobileSizzleVidConCon>
              <Grid16>
                <MobileSizzleVidCon>
                  <SizzleVid autoPlay playsInline muted loop>
                    <source
                      src={data.prismicHomepage.data.sizzle_mobile.url}
                    ></source>
                  </SizzleVid>
                </MobileSizzleVidCon>
              </Grid16>
            </MobileSizzleVidConCon>
          )}
        </HeroCon>

        <IntroCon>
          <Grid16>
            <ClientsCon>
              <SmallAboutP>
                {" "}
                {data.prismicHomepage.data.clients.text}
              </SmallAboutP>
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
        <ContentsCon>{contents2}</ContentsCon>

        <ProjectsCon>{overview}</ProjectsCon>
      </PageContentCon>
      <AnimationFixed1></AnimationFixed1>
    </>
  );
};

export default withPreview(Index);

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
                    ... on PrismicProjectBodyVideo {
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
                    ... on PrismicProjectBody4ximg {
                      id
                      slice_type
                      primary {
                        img1 {
                          fluid {
                            src
                          }
                        }
                        img1_caption {
                          html
                          text
                        }
                        img2 {
                          fluid {
                            src
                          }
                        }
                        img2_caption {
                          html
                          text
                        }
                        img3 {
                          fluid {
                            src
                          }
                        }
                        img3_caption {
                          html
                          text
                        }
                        img4 {
                          fluid {
                            src
                          }
                        }
                        img4_caption {
                          html
                          text
                        }
                      }
                    }
                    ... on PrismicProjectBody2ximg {
                      id
                      slice_type
                      primary {
                        img1 {
                          fluid {
                            src
                          }
                        }
                        img1_caption {
                          html
                          text
                        }
                        img2 {
                          fluid {
                            src
                          }
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
