import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import Container from 'figdog-theme/src/components/container'
import TopMenuLinks from 'figdog-theme/src/components/organisms/topmenulinks'
import MenuLinks from 'figdog-theme/src/components/organisms/menulinks'
import * as variable from 'figdog-theme/src/components/variables.js'
import bg from 'figdog-theme/src/images/bg.png'
import { Global, css } from "@emotion/core"


const HeaderStyle = styled.header`

`;



export const Header = ({
    menuLinks,
    topMenuLinks
  }) => {
    return (
        <HeaderStyle className="fig-header">
          <Global
            styles={css`
              .fig-header{
                background-image:url(${bg});
                background-position: center;
                background-size: cover;
                display:flex;
                justify-content:space-between;
                align-items:center;
                padding:34px 0px 15px 0px;
                @media (max-width: ${variable.tabletWidth}) {
                  background-image:none;
                }
              }
            `}
        />
        <Container className="header-menu-logo">
            <TopMenuLinks
            topMenuLinks={topMenuLinks}
            menuLinks={menuLinks}
            >
            </TopMenuLinks>
        </Container>
    </HeaderStyle>

    )
  }


export default Header