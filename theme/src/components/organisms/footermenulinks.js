import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from 'figdog-theme/src/components/container'
import * as variable from 'figdog-theme/src/components/variables.js'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'


const Nav = styled.nav`
    width:100%;
    color:white;
    input[type="checkbox"], .checked {
        display: none;
    }
    input[type="checkbox"]:checked ~ .checked{
        display:flex;
        &:after{
            content:"ON";
        }
    }
    input[type="checkbox"]:checked ~ .unchecked
    {
        display: none;
    }
    label{
        display:flex;
    }
    i{
        color:#3169AC;
        font-size:32px;
        margin-left:20px;
        display:flex;
        align-items: center;
        &:after{
            content:"OFF";
            color:white;
            font-size:18px;
            margin-left:10px;
        }
    }
    img{
        width:136px;
    }
    ul{
        display:flex;
        justify-content:space-between;
        margin:0px;
        padding:0px;
        li{
            display: flex;
            align-items: center;
            list-style:none;
            margin-right:10px;
            &:last-child{
                margin-right:0px;
            }
            a{
                display: flex;
                align-items: center;
                color:white;
                text-decoration:none;
                text-transform:uppercase;
                font-size:18px;
                font-weight:500;
                &:hover{

                }
            }
        }
    }
`

const FooterMenuLinks = ({footerMenuLinks}) => {

    return(
        <Nav>
        <Container>
        <ul>
          {footerMenuLinks.map((menuitem, index) =>(
            <li key={index}><a href={menuitem.link}>{menuitem.name}{menuitem.icon != null && <i class={menuitem.icon}></i>}</a></li>
          ))}

        </ul>
        </Container>
        </Nav>
    )

}

      


export default FooterMenuLinks