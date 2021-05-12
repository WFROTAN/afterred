import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Section, Container } from '@components/global';

const TEAM = [
  {
    name: 'Flat World',
    image: 'flatworld.png',
    role: 'Going JAMstack with Hassle-free WordPress and Gatsby.',
    url: 'https://flatworld.co/',
  },
  {
    name: 'Fox Crest Media',
    image: 'foxcrest-media.png',
    role: 'Blazing Fast & SEO Friendly site for a copy write agency.',
    url: 'https://foxcrestmedia.com/',
  },
  {
    name: 'Veta Virtual',
    image: 'vetavirtual2.png',
    role: 'Increased customer conversion and site speed.',
    url: 'https://www.vetavirtual.com/',
  },
  {
    name: 'Appier',
    image: 'appier.png',
    role: 'Better UX/UI led to better client conversion and user engagement. ',
    url: 'https://www.appier.com/',
  },
  {
    name: 'AutoloadIT',
    image: 'autoloadit.png',
    role:
      'Delivered a fast, high converting site for an automotive imaging company.',
    url: 'https://autoloadit.com/',
  },
  {
    name: 'WSM',
    image: 'WSM.jpg',
    role:
      'Developed an SEO, performance centerd site that lead to higher google rankings.',
    url: 'https://wsm.org/',
  },
];

const Team = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { sourceInstanceName: { eq: "team" } }) {
          edges {
            node {
              relativePath
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        art_team: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "team_work" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <Section id="work" accent="secondary">
        <Container style={{ position: 'relative' }}>
          <h1>Our Work</h1>
          <TeamGrid>
            {TEAM.map(({ name, image, role, url }) => {
              const img = data.allFile.edges.find(
                ({ node }) => node.relativePath === image
              ).node;

              return (
                <div key={name}>
                  <a href={url} target="_blank">
                    <Img fluid={img.childImageSharp.fluid} alt={name} />
                  </a>
                  <Title>{name}</Title>
                  <Subtitle>{role}</Subtitle>
                </div>
              );
            })}
          </TeamGrid>
          <Art>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </Art>
          <ArtMobile>
            <Img fluid={data.art_team.childImageSharp.fluid} />
          </ArtMobile>
        </Container>
      </Section>
    )}
  />
);

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-template-rows: min-content;
  grid-gap: 50px;
  justify-content: space-between;
  width: 60%;
  margin-top: 72px;

  @media (max-width: ${props => props.theme.screen.lg}) {
    justify-content: start;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100%;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  }

  @media (max-width: ${props => props.theme.screen.xs}) {
    grid-gap: 24px;
  }
`;

const Art = styled.figure`
  width: 800px;
  margin: -80px 0;
  position: absolute;
  top: 0;
  left: 70%;

  @media (max-width: ${props => props.theme.screen.lg}) {
    top: 20%;
  }

  @media (max-width: ${props => props.theme.screen.md}) {
    display: none;
  }
`;

const ArtMobile = styled.figure`
  width: 100%;
  margin: 0;
  display: none;
  margin-top: 64px;
  margin-bottom: -60%;

  @media (max-width: ${props => props.theme.screen.md}) {
    display: block;
  }
`;

const Title = styled.p`
  margin-top: 16px;
  color: ${props => props.theme.color.black.regular};
`;

const Subtitle = styled.p`
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.light};
`;

export default Team;
