import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import { withPreview } from "gatsby-source-prismic";
import styled, { createGlobalStyle } from "styled-components";
import Icon from "../../../assets/G4C_kern_black.svg";

const SmallAboutP = styled.p`
  font-family: "DecimaMonoPro", sans-serif;
  font-size: 6px;
  letter-spacing: -2%;
`;
const NavCon = styled.div`
  width: calc(100% - 20px);
  position: fixed;
  margin: 10px;
  bottom: 0;
  height: 100px;
  z-index: 10000;
  /* background-color: green; */
`;
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
const LogoCon = styled.div`
  width: 400px;
  position: fixed;
  margin: 10px;
  z-index: 10000;
  img {
    width: 100%;
  }
  @media (max-width: 666px) {
    width: 50%;
    /* margin: 5px; */
  }
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
  font-family: "DecimaMonoPro", sans-serif;
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
    font-family: "DecimaMonoPro", sans-serif;
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
const PageLinks = styled.div`
  a {
    font-family: "Helvetica Neue LT Pro", sans-serif;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -2%;
    line-height: 112.5%;
  }
`;
const HelveticaLrgCon = styled.div`
  p {
    font-family: "Helvetica Neue LT Pro", sans-serif;
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
export const Nav = ({}) => {
  console.log("GIT TEST");
  const data = useStaticQuery(graphql`
    query MyQuery6 {
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
  `);
  return (
    <>
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
            <PageLinks>
              <Link to="/">(Selected)</Link>
            </PageLinks>
            <PageLinks>
              <Link to="/about">About</Link>
            </PageLinks>
            <PageLinks>
              <Link to="/archive">Archive</Link>
            </PageLinks>
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
    </>
  );
};
