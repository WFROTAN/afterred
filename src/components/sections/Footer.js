import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import { Container } from '@components/global';

import { ReactComponent as LogoRocket } from '../../images/logos/logo-rocket.svg';

const SOCIAL = [
  {
    icon: 'About',
    link: '#about',
  },
  {
    icon: 'Work',
    link: '#work',
  },
  {
    icon: 'FAQ',
    link: '#faq',
  },
  {
    icon: 'Contact',
    link: '#contact',
  },
];

const Footer = () => (
  <StaticQuery
    query={graphql`
      query {
        art_pot: file(
          sourceInstanceName: { eq: "art" }
          name: { eq: "customers_pot" }
        ) {
          childImageSharp {
            fluid(maxWidth: 960) {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <React.Fragment>
        <FooterWrapper>
          <StyledContainer>
            <Copyright>
              <div className="logo-container">
                <LogoRocket />{' '}
                <div className="logo-text">
                  <span>After</span>&nbsp;Red
                </div>
              </div>
            </Copyright>
            <SocialIcons>
              {SOCIAL.map(({ icon, link }) => (
                <Link key={link} href={link}>
                  {icon}
                </Link>
              ))}
            </SocialIcons>
          </StyledContainer>
        </FooterWrapper>
      </React.Fragment>
    )}
  />
);

const SocialIcons = styled.div`
  display: flex;

  img {
    margin: 0 8px;
    width: 24px;
    height: 24px;
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-top: 40px;
  }

  a {
    text-decoration: none;
    opacity: 0.7;
    color: #211e26;
    cursor: pointer;
  }

  a:not(:last-child) {
    margin-right: 0.75em;
  }
`;

const FooterWrapper = styled.footer`
  background-color: ${props => props.theme.color.primary};
  padding: 32px 0;
`;

const Copyright = styled.div`
  font-family: ${props => props.theme.font.secondary};
  ${props => props.theme.font_size.small};
  color: ${props => props.theme.color.black.regular};

  a {
    text-decoration: none;
    color: inherit;
  }

  span {
  }

  .logo-container {
    display: flex;
    align-items: center;
    font-size: 30px;
    font-family: 'Prata', serif;

    svg {
      width: 100px;
      height: 100px;
    }

    span {
      color: #ff4432;
    }
  }
`;

const Art = styled.figure`
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: 0px;
`;

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    text-align: center;
  }
`;

export default Footer;

/* 
        <Art>
          <Img
            fluid={data.art_pot.childImageSharp.fluid}
            style={{ width: 480, maxWidth: '100%', marginBottom: -16 }}
          />
        </Art>
*/
