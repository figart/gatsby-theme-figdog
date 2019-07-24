import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from '../container'
import * as variable from '../variables.js'

const Nav = styled.nav`
    width:100%;
    padding:20px 0px;
    ul{
        display:flex;
        justify-content:center;
        margin:0px;
        padding:0px;
        li{
            list-style:none;
            margin-right:10px;
            &:last-child{
                margin-right:0px;
            }
            a{
                color:white;
                background-color:${variable.primaryColor}
                padding: 5px 10px 6px;
                text-decoration:none;
                text-transform:uppercase;
                &:hover{
                    background-color:${variable.darkGray};
                }
            }
        }
    }
`

const TopMenuLinks = ({topMenuLinks}) => {

    return(
        <Nav>
        <Container>
        <ul>
          {topMenuLinks.map((menuitem, index) =>(
            <li key={index}><a href={menuitem.link}>{menuitem.icon != null && <i class={menuitem.icon}></i>}{menuitem.name}</a></li>
          ))}
        </ul>
        </Container>
        </Nav>
    )

}

      


export default TopMenuLinks