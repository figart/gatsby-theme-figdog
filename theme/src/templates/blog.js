import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Container from '../components/container'
import styled from "styled-components"
import * as variable from '../components/variables'

const TitleSlogan = styled.div`

        text-align:center;
        border-bottom:7px solid ${variable.darkGray}
        padding:0px 0px 40px 0px;

    `

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }

export const query = graphql`

    query BlogPostByID($id: String!) {
        allContentfulBlog(
            filter:{
                id:{eq: $id}
            }
        ) {
            nodes{
                fields{
                    slug
                }
                author{
                    name
                    id
                }
                body {
                    json
                  }
                title
            }
        }

    }

`

export const BlogPostTemplate = ({
    title,
    body
  }) => {
    return (
        <Layout>
            <Container>
                <TitleSlogan>
                    <h1>{title}</h1>
                </TitleSlogan>
                {documentToReactComponents(body, options)}
            </Container>
        </Layout>
    )
  }

const Blog = ({ data }) => {

    const { [0]: post } = data.allContentfulBlog.nodes

    console.log(post)

    return (
        <BlogPostTemplate
          title={post.title}
          body={post.body.json}
        />
    )

}

Blog.propTypes = {
    data: PropTypes.shape({
        allContentfulBlog: PropTypes.object,
    }),
  }


export default Blog

