import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Header from './regions/header'
import Footer from './regions/footer'
import styled from "styled-components"
import { Global, css } from "@emotion/core"
import * as variable from './variables.js'

const GlobalStyles = styled.div`
    color:${variable.darkGray}
    font-family: "Open Sans", arial, sans-serif;
    font-size: 18px;
    line-height: 1.8;
    p a{
        color:${variable.primaryColor}
    }
    h1{
        font-size: 52px;
        font-weight: 700;
        margin: 15px 0;
        text-align: center;
        text-transform: uppercase;
        line-height:1.2em;
    }

`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            siteTitle
            logo
            colors{
                primary
            }
            breakpoints{
                mobileWidth
                tabletWidth
                desktopWidth
            }
            topMenuLinks{
                name
                link
                icon
            }
            menuLinks{
                name
                link
            }
          }
        }
      }
    `}
    render={data => (
        
      <>
      <GlobalStyles>
        <Global
            styles={css`
                body, html{
                    padding:0px;
                    box-sizing:border-box;
                    margin:0px;
                }
            `}
        />
        <Header 
        topMenuLinks={data.site.siteMetadata.topMenuLinks}
        menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div>
          {children}
        </div>
        <Footer></Footer>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </GlobalStyles>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
