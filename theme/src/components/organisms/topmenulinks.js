import { Link } from 'gatsby'
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Container from 'figdog-theme/src/components/container'
import MobileMenu from 'figdog-theme/src/components/organisms/mobilemenu'
import * as variable from 'figdog-theme/src/components/variables.js'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

const Nav = styled.nav`
    .mobile-menu-list{
        display:none;
    }
    @media (max-width: ${variable.tabletWidth}) {
        .mobile-menu-list{
            display:block;
        }
        .dark-mode{
            display:none;
        }
    }
    width:100%;
    input[type="checkbox"]{
        cursor:pointer;
        font-weight:600;
    }
    input[type="checkbox"], .checked {
        display: none;
    }
    input[type="checkbox"]:checked ~ .checked{
        display:flex;
        &:after{
            content:"OFF";
            font-weight:600;
            color:white;
            font-size:18px;
        }
    }
    input[type="checkbox"]:checked ~ .unchecked
    {
        display: none;
    }
    label{
        display:flex;
        font-weight:600;
        justify-content:space-between;
        align-items:center;
        font-size:18px;
    }
    color:white;
    i{
        cursor:pointer;
        color:#3169AC;
        font-size:32px;
        margin-left:20px;
        display:flex;
        justify-content:space-between;
        align-items: center;
        width: 85px;
        &:after{
            content:"ON";
            color:#498F27;
            font-size:18px;
            margin-left:10px;
            font-weight:600;
        }
    }
    img{
        width:135px;
    }
    ul{
        display:flex;
        justify-content:space-between;
        align-items: center;
        margin:0px;
        padding:0px;
        li{
            display: flex;
            align-items: center;
            list-style:none;
            margin-right:0px;
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
                &:hover{

                }
            }
        }
    }
`

const TopMenuLinks = ({topMenuLinks}) => {

    return(
        <Nav>
        <ul>
            <li><Link to="/"><img src={variable.logo}/></Link></li>
          {/* {topMenuLinks.map((menuitem, index) =>(
            <li key={index}><a href={menuitem.link}>{menuitem.name}{menuitem.icon != null && <i class={menuitem.icon}></i>}</a></li>
          ))} */}
          <li className="dark-mode">
          <ThemeToggler>
        {({ theme, toggleTheme }) => (
          <label>
            <input
              type="checkbox"
              onChange={e => toggleTheme(e.target.checked ? 'light' : 'dark')}
              checked={theme === 'light'}
            />{' '}
            DARK MODE
            <i class="fas fa-toggle-on unchecked"></i>
            <i class="fas fa-toggle-off checked"></i>
          </label>
        )}
      </ThemeToggler>
      </li>
      <li className="mobile-menu-list">
      <MobileMenu className="mobile-menu"></MobileMenu>
      </li>
        </ul>
        
        </Nav>
    )

}

      


export default TopMenuLinks