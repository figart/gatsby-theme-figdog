import React from 'react'
import styled from "styled-components"
import Container from 'figdog-theme/src/components/container'
import * as variable from 'figdog-theme/src/components/variables'
import { Link } from 'gatsby'

const FooterStyle = styled.footer`
    background-color:${variable.darkGray};
    margin-top: 95px;
    .footer-container{
        text-align:center;
        height: 265px;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
        color:white;
        background-color:${variable.primaryColor};
        padding: 5px 10px 6px;
        text-decoration:none;
        text-transform:uppercase;
        &:hover{
            background-color:${variable.darkGray};
        }
    }

`;



export const Footer = ({
  }) => {
    return (
    <FooterStyle>
        <Container className="footer-container">
            <Link to="/">{variable.siteTitle}</Link>
        </Container>
    </FooterStyle>

    )
  }


export default Footer