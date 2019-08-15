import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import Container from 'figdog-theme/src/components/container'
import TopMenuLinks from 'figdog-theme/src/components/organisms/topmenulinks'
import MenuLinks from 'figdog-theme/src/components/organisms/menulinks'
import * as variable from 'figdog-theme/src/components/variables.js'
import bg from 'figdog-theme/src/images/bg.png'

const HeaderStyle = styled.header`
  background-image:url(${bg});
  background-position: center;
  background-size: cover;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:20px 0px;
`;



export const Header = ({
    menuLinks,
    topMenuLinks
  }) => {
    return (
        <HeaderStyle>
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