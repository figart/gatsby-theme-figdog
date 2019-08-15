import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import * as variable from 'figdog-theme/src/components/variables.js'
import bg from 'figdog-theme/src/images/bg.png'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const MobileContainer = styled.div`
  display:none;
  position:relative;
  height: 30px;
  width: 55px;
  text-align:center;
      margin:0px;
      padding:0px;
      li{
          font-size:30px;
          font-weight:600;
          margin:0px 0px 20px 0px !important;
          padding:0px;
          &:focus{
            outline: none !important;;
          }
          a{
              display:block !important;
              text-align:center;
              &:focus{
                outline: none !important;;
              }
          }
      }
  @media (max-width: ${variable.tabletWidth}) {
    display:block;
  }
  .bm-menu {
    background-image:url(${bg});
    background-position: center;
    background-size: auto;
    font-size: 1.15em;
    padding: 2.5em 1.5em 0;
  }
  .bm-menu-wrap{
      top:0px;
      width:100% !important;
  }
  .bm-overlay {
    left: 0;
    top: 0;
  }
  .bm-cross {
    background: #bdc3c7;
  }
  .bm-burger-bars {
    background: ${variable.lightGray};
  }


`;

const Mobilemenu = () => (

  <StaticQuery
  query={graphql`
    query MobileMenuQuery {
      site {
        siteMetadata {
          footerMenuLinks{
            name
            link
          }
        }
      }
    }
  `}
  render={data => (
      
    <>
    
      <MobileContainer>
    <a href="#" className="bm-burger-button .hamburger-box">
    </a>
    <Menu right>
    <li><Link to="/"><img src={variable.logo}/></Link></li>
      {data.site.siteMetadata.footerMenuLinks.map((menuitem, index) =>(
        <li key={index}><Link to={menuitem.link}>{menuitem.name}</Link></li>
      ))}
    </Menu>
    </MobileContainer>
  </>
  )}
  />
)


export default Mobilemenu

