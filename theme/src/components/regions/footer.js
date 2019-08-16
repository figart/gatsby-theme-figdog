import React from 'react'
import styled from "styled-components"
import Container from 'figdog-theme/src/components/container'
import * as variable from 'figdog-theme/src/components/variables'
import FooterMenuLinks from 'figdog-theme/src/components/organisms/footermenulinks'
import { Link } from 'gatsby'
import bg from 'figdog-theme/src/images/bg.png'
import { Global, css } from "@emotion/core"

const FooterStyle = styled.footer`
    background-image:url(${bg});
    background-position: center;
    background-size: cover;
    margin-top: 95px;
    padding:50px 0px;
    color:white;
    .footer-container nav{
        text-align:center;
        display:flex;
        justify-content:center;
        align-items:center;
    }
    a{
        color:white;
        text-decoration:none;
        text-transform:uppercase;
        &:hover{

        }
    }
    .footer-copy{
        text-align:center;
        margin-top:40px;
        font-size:14px;
    }
    @media (max-width: ${variable.tabletWidth}) {
        background-image:none;
    }

`;



export const Footer = ({
    footerMenuLinks
  }) => {
    return (
    <FooterStyle>
        <Global
                styles={css`
                @media (max-width: ${variable.tabletWidth}) {
                    .footer-copy{
                        margin-top:0px;
                        color:${variable.primaryColor};
                    }
                    .dark{
                        .footer-copy{
                            color:${variable.lightGray};
                        }
                    }
                }
                `}
            />
        <Container className="footer-container">
            <FooterMenuLinks
            footerMenuLinks={footerMenuLinks}
            ></FooterMenuLinks>
            <div className="footer-copy">Copyright 2019 figdog</div>
        </Container>
    </FooterStyle>

    )
  }


export default Footer