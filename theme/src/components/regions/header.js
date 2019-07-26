import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import Container from 'figdog-theme/src/components/container'
import TopMenuLinks from 'figdog-theme/src/components/organisms/topmenulinks'
import MenuLinks from 'figdog-theme/src/components/organisms/menulinks'
import * as variable from 'figdog-theme/src/components/variables.js'

const HeaderStyle = styled.header`
    
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
            <MenuLinks
            menuLinks={menuLinks}
            >
            </MenuLinks>
        </Container>
    </HeaderStyle>

    )
  }


export default Header