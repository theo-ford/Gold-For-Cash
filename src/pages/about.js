import React from "react";
import { graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import styled, { createGlobalStyle } from "styled-components";
// import { NavSelected } from "../components/tf/nav-selected";
import { AnimationFixed1 } from "../components/tf/animation-fixed-1";
import { Nav } from "../components/tf/nav";

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
  @media (max-width: 666px) {
    grid-column: 4;
  }
  p {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.4px;
    line-height: 112.5%;
    margin-bottom: 20px;
  }
`;
const ListsConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-top: 150px;
  p {
    font-family: "DecimaMonoPro", sans-serif;
    font-size: 12px;
    letter-spacing: -2%;
  }
`;

const ClientsCon = styled.div`
  grid-column: 9 / span 4;
`;

const AgenciesCon = styled.div`
  grid-column: 13 / span 4;
`;

const PortraitConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
`;

const PortraitCon = styled.div`
  grid-column: span 4;
  img {
    margin-bottom: 10px;
  }
`;

const LogosConCon = styled.div`
  width: calc(100% - 20px);
  margin: 10px;
  margin-bottom: 150px;
`;
const LogosCon = styled.div`
  grid-column: 11 / span 6;
  img {
    margin-bottom: 10px;
  }
`;

const About = ({ data }) => {
  return (
    <>
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
        <PortraitConCon>
          <Grid16>
            <PortraitCon>
              <img src={data.prismicAbout.data.portrait.fluid.src} />
              <DecimaP>{data.prismicAbout.data.portrait_caption.text}</DecimaP>
            </PortraitCon>
          </Grid16>
        </PortraitConCon>
        <LogosConCon>
          <Grid16>
            <LogosCon>
              <img src={data.prismicAbout.data.logos_gif.fluid.src} />
              <DecimaP>{data.prismicAbout.data.logos_gif_caption.text}</DecimaP>
            </LogosCon>
          </Grid16>
        </LogosConCon>
      </PageCon>

      <Nav></Nav>
      <AnimationFixed1></AnimationFixed1>
    </>
  );
};
export default withPreview(About);

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
          fluid {
            src
            srcSet
            srcSetWebp
          }
        }
        logos_gif_caption {
          html
          text
        }
        portrait {
          fluid {
            src
            srcSetWebp
            srcWebp
          }
        }
        portrait_caption {
          html
          text
        }
      }
    }
  }
`;
