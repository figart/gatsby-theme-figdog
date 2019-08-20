import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from 'gatsby'
import BlogTeaser from "../../entities/blog/blog-teaser"

const BlogListStyle = styled.section`

  

`;



export const BlogList = () => (
  <StaticQuery
    query={graphql`
        query EntityQyery {
            blogs: allContentfulBlog(filter: {node_locale: {eq: "en-US"}}) {
                nodes {
                    id
                fields{
                    slug
                }
                title
                blogDate(formatString: "ddd, MMM D, Y")
                teaser{
                  json
                }
            }
        }
    }
    `}

  render={data => (
      
    <>
    <BlogListStyle className="blog-list-container">
    {data.blogs.nodes.map((post, index) => (
      
      <BlogTeaser
      
      key={index}
      post={post}
      >{console.log(post)}
      </BlogTeaser>
    ))}
    </BlogListStyle>
</>
    )}
  />

)

export default BlogList