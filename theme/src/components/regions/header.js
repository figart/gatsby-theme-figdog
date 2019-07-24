import PropTypes from 'prop-types'
import React from 'react'
import styled from "styled-components"
import Container from '../container'
import TopMenuLinks from '../organisms/topmenulinks'

const HeaderStyle = styled.header`

    .header-menu-logo{
        display:flex;
    }

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
            >

            </TopMenuLinks>
        </Container>
    </HeaderStyle>

    )
  }


export default Header