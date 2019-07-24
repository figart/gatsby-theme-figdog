import React from 'react'
import { Link } from 'gatsby'
import * as variable from '../../variables'
import styled from 'styled-components'

const BlogTeaserContainer = styled.div`

    border-bottom: 1px dotted #303030;
    margin: 0;
    position: relative;
    a{
        -webkit-transition: all .2s ease-in-out;
        -moz-transition: all .2s ease-in-out;
        transition: all .2s ease-in-out;
        display: block;
        color: ${variable.darkGray};
        padding: 20px 5px;
        text-decoration:none;
        &:hover{
            color:${variable.primaryColor};
            background: #fcf5f5;
            padding: 20px 12px;
        }
    }

`

const BlogTeaser = ({post}) => {
    console.log(post)
return(
    <BlogTeaserContainer>
        <Link to={post.fields.slug}>
            <strong>{post.title}</strong> / {post.createdAt}
        </Link>
    
    </BlogTeaserContainer>
)
  }

export default BlogTeaser