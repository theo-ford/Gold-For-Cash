import React, { useRef, useState, useEffect } from "react";
import ReactDOM, { findDOMNode } from "react-dom";
import { graphql, Link, useScrollRestoration } from "gatsby";
import styled, { createGlobalStyle, keyframes } from "styled-components";
import { useMediaQuery } from "../media-query";
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

export const Contents = ({ data }) => {
  const contents2 = data
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
              {
                content.project_relationship_field.document.data.index_number
                  .text
              }{" "}
              {content.project_relationship_field.document.data.title.text}
            </PageLinks>
          </div>
        );
      }
    });
  return <ContentsCon>{contents2}</ContentsCon>;
};
