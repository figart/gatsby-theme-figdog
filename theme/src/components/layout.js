import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Header from 'figdog-theme/src/components/regions/header'
import Footer from 'figdog-theme/src/components/regions/footer'
import styled from "styled-components"
import { Global, css } from "@emotion/core"
import * as variable from 'figdog-theme/src/components/variables.js'
import ThemeContext from 'figdog-theme/src/components/context/ThemeContext'
import bg from 'figdog-theme/src/images/bg.png'
import BodyClassName from 'react-body-classname';

const GlobalStyles = styled.div`

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
            footerMenuLinks{
              name
              link
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
      <ThemeContext.Consumer>
        
        {theme => (
          
      <GlobalStyles>
        <BodyClassName className={theme.dark ? 'dark' : 'light'}></BodyClassName>

        {console.log(theme)}
        <Global
            styles={css`
            html{
              background-image:url(${bg});
              background-position: center;
              background-size: 1150px;
            }
            .dark {
              transition: all 0.6s ease;
            }
            .light {
              transition: all 0.6s ease;
            }
            .main{
              padding-top:55px;
              @media (max-width: ${variable.tabletWidth}) {
                padding-top:35px;
              }
            }
              @media (max-width: ${variable.tabletWidth}) {
                body{
                  border-top:8px solid ${variable.orange};
                }
              }
              img{
                max-width:100%;
              }
                .main p, .main h1{ 
                  -webkit-transition: all 0.2s ease;
                  -moz-transition:    all 0.2s ease;
                  -ms-transition:     all 0.2s ease;
                  -o-transition:      all 0.2s ease;
                  }
                body, html{
                    padding:0px;
                    box-sizing:border-box;
                    margin:0px;
                    color:${variable.darkGray};
                    font-family: 'Poppins', sans-serif;
                    font-size: 16px;
                    line-height: 1.2;
                    .main{
                        padding-bottom:95px;
                        color:${variable.darkGray};
                        background-color:white;
                        @media (max-width: ${variable.tabletWidth}) {
                          padding-bottom:20px;
                        }
                    }
                    p{
                      line-height: 1.6;
                      margin:40px 0px;
                      @media (max-width: ${variable.tabletWidth}) {
                        margin:25px 0px;
                      }
                    }
                    img{
                      max-width:100%;
                    }
                    a{
                      color:${variable.primaryColor};
                    }
                }
                .dark{
                  .main{
                    color:white;
                    background-color:${variable.darkBlue};
                  }
                  a{
                    color:${variable.lightGray};
                  }
                }
            `}
        />
        <Header 
        topMenuLinks={data.site.siteMetadata.topMenuLinks}
        menuLinks={data.site.siteMetadata.menuLinks}
        />
        <div className="main">
          {children}
        </div>
        <Footer
        footerMenuLinks={data.site.siteMetadata.footerMenuLinks}
        ></Footer>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
        </GlobalStyles>
        )}
        </ThemeContext.Consumer>
              
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
