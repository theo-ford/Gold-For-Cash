import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { withPrismicPreview } from "gatsby-plugin-prismic-previews";
import styled, { createGlobalStyle } from "styled-components";
// import { NavSelected } from "../components/tf/nav-selected";
import { AnimationFixed1 } from "../components/tf/animation-fixed-1";
import { Nav } from "../components/tf/nav";
import { Helmet } from "react-helmet";

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
const DecimaP = styled.div`
  font-family: "DecimaMonoPro", sans-serif;
  font-size: 12px;
  letter-spacing: -2%;
`;
const HelveticaLrgCon = styled.div``;

const PageCon = styled.div`
  position: absolute;
  top: 0;
  z-index: 500;
  margin-bottom: 300px;
`;
const BioConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
`;
const BioCon = styled.div`
  grid-column: 9 / span 8;

  p {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.4px;
    line-height: 112.5%;
    margin-bottom: 20px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
    margin-top: 200px;
    p {
      font-size: 24px;
    }
  }
`;
const ListsConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-top: 200px;
  p {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
  }
  a {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
    text-decoration: underline;
  }
  @media (max-width: 666px) {
    margin-top: 20px;
  }
`;

const ClientsCon = styled.div`
  grid-column: 9 / span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;

const AgenciesCon = styled.div`
  grid-column: 13 / span 4;
  @media (max-width: 666px) {
    grid-column: span 2;
  }
`;
const MobileContactConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  display: none;
  @media (max-width: 666px) {
    display: block;
  }
`;
const MobileContactCon = styled.div`
  grid-column: 9 / span 8;

  p,
  a {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.4px;
    line-height: 112.5%;
    /* margin-bottom: 20px; */
    text-decoration: none;
  }

  @media (max-width: 666px) {
    grid-column: span 4;
    /* margin-top: 200px; */
    p,
    a {
      font-size: 24px;
    }
  }
`;

const PortraitConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-bottom: 75px;
`;

const PortraitCon = styled.div`
  grid-column: span 4;
  img {
    margin-bottom: 10px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
  }
`;

const LogosConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-bottom: 75px;
`;
const LogosCon = styled.div`
  grid-column: 11 / span 6;
  img {
    margin-bottom: 10px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
  }
`;
const AwardsConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
`;

const AwardsCon = styled.div`
  grid-column: span 8;
  margin-bottom: 150px;
  img {
    margin-bottom: 10px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
  }
`;
const CaptionCon = styled.div`
  margin-top: 5px;
`;

const AdditionalImg1ConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
`;

const AdditionalImg1Con = styled.div`
  grid-column: 9 / span 8;
  margin-bottom: 150px;
  img {
    margin-bottom: 10px;
  }
  @media (max-width: 666px) {
    grid-column: span 4;
  }
`;
const About = ({ data }) => {
  const portraitImg = getImage(data.prismicAbout.data.portrait);
  const logosImg = getImage(data.prismicAbout.data.logos_gif);
  const awardsImg = getImage(data.prismicAbout.data.awards_img);
  const additionalImg1 = getImage(data.prismicAbout.data.additional_img_1);
  return (
    <>
      <Helmet>
        <title>Gold For Cash</title>
        <meta name="format-detection" content="telephone=no" />
      </Helmet>
      <PageCon>
        <BioConCon>
          <Grid16>
            <BioCon>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.bio.html,
                }}
              />
            </BioCon>
          </Grid16>
        </BioConCon>
        <ListsConCon>
          <Grid16>
            <ClientsCon>
              <p>Clients:</p>
              <br></br>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.clients.html,
                }}
              />
              <br></br>
            </ClientsCon>
            <AgenciesCon>
              <p>Agencies:</p>
              <br></br>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.agencies.html,
                }}
              />
            </AgenciesCon>
          </Grid16>
        </ListsConCon>
        <MobileContactConCon>
          <Grid16>
            <MobileContactCon>
              <DecimaP style={{ marginBottom: "10px" }}>Contact</DecimaP>
              <p>
                <a href={`mailto:${data.prismicAbout.data.email.text}`}>
                  {data.prismicAbout.data.email.text}
                </a>
              </p>
              <p>{data.prismicAbout.data.web.text}</p>
              <p>{data.prismicAbout.data.phone.text}</p>
              <br></br>
              <DecimaP style={{ marginBottom: "10px" }}>Address</DecimaP>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.prismicAbout.data.address.html,
                }}
              />
              <br></br>
              <DecimaP style={{ marginBottom: "10px" }}>Social</DecimaP>
              <Link to={data.prismicAbout.data.instagram.url}>
                <p>Instagram</p>
              </Link>
              <Link to={data.prismicAbout.data.linked_in.url}>
                <p>LinkedIn</p>
              </Link>
            </MobileContactCon>
          </Grid16>
        </MobileContactConCon>
        <PortraitConCon>
          <Grid16>
            <PortraitCon>
              <GatsbyImage image={portraitImg} />
              <CaptionCon>
                {" "}
                <DecimaP>
                  {data.prismicAbout.data.portrait_caption.text}
                </DecimaP>
              </CaptionCon>
            </PortraitCon>
          </Grid16>
        </PortraitConCon>
        <LogosConCon>
          <Grid16>
            <LogosCon>
              <GatsbyImage image={logosImg} />
              <CaptionCon>
                <DecimaP>
                  {data.prismicAbout.data.logos_gif_caption.text}
                </DecimaP>
              </CaptionCon>
            </LogosCon>
          </Grid16>
        </LogosConCon>
        <AwardsConCon>
          <Grid16>
            <AwardsCon>
              <GatsbyImage image={awardsImg} />
              <CaptionCon>
                <DecimaP>{data.prismicAbout.data.awards_caption.text}</DecimaP>
              </CaptionCon>
            </AwardsCon>
          </Grid16>
        </AwardsConCon>

        <AdditionalImg1ConCon>
          <Grid16>
            <AdditionalImg1Con>
              <GatsbyImage image={additionalImg1} />
              <CaptionCon>
                <DecimaP>
                  {data.prismicAbout.data.additional_img_1_caption.text}
                </DecimaP>
              </CaptionCon>
            </AdditionalImg1Con>
          </Grid16>
        </AdditionalImg1ConCon>
      </PageCon>

      <Nav></Nav>
      <AnimationFixed1></AnimationFixed1>
    </>
  );
};
export default withPrismicPreview(About);

export const query = graphql`
  query MyQuery {
    prismicAbout {
      data {
        agencies {
          html
          text
        }
        bio {
          html
          text
        }
        clients {
          html
          text
        }
        logos_gif {
          gatsbyImageData
        }
        logos_gif_caption {
          html
          text
        }
        portrait {
          gatsbyImageData
        }
        portrait_caption {
          html
          text
        }
        awards_img {
          gatsbyImageData
        }
        awards_caption {
          html
          text
        }
        additional_img_1 {
          gatsbyImageData
        }
        additional_img_1_caption {
          html
          text
        }
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
        instagram {
          url
        }
        twitter {
          url
        }
        linked_in {
          url
        }
      }
    }
  }
`;
