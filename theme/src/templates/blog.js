import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from 'figdog-theme/src/components/layout'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Container from 'figdog-theme/src/components/container'
import styled from "styled-components"
import * as variable from 'figdog-theme/src/components/variables'

const BlogBody = styled.div`
    img{
        float:right;
        max-width:350px;
        margin-left:20px;
        margin-bottom:20px;
    }
`
const TitleSlogan = styled.div`

        text-align:center;
        border-bottom:7px solid ${variable.darkGray};
        padding:0px 0px 40px 0px;
        margin-bottom:20px;
        text-transform:uppercase;
        h3{
            font-weight:normal;
        }

    `

    const PostDate = styled.div`

        color: ${variable.lightGray};
        font-size: 14px;
        font-weight: 600;
        line-height: 1;
        text-transform:uppercase;
        a{
            color: ${variable.lightGray};
            text-decoration:none;
            &:hover{
                color:${variable.primaryColor};
            }
        }
        :after {
            border-bottom: 1px dotted #303030;
            content: "";
            display: block;
            margin: 40px auto 0;
            width: 100px;
        }

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
    renderNode: {
        [BLOCKS.EMBEDDED_ASSET]: (node) => {
            const { title, description, file } = node.data.target.fields;
            const mimeType = file['en-US'].contentType
            const mimeGroup = mimeType.split('/')[0]
      
            switch (mimeGroup) {
              case 'image':
                return <img
                  title={ title ? title['en-US'] : null}
                  alt={description ?  description['en-US'] : null}
                  src={file['en-US'].url}
                />
              case 'application':
                return <a
                  alt={description ?  description['en-US'] : null}
                  href={file['en-US'].url}
                  >{ title ? title['en-US'] : file['en-US'].details.fileName }
                </a>
              default:
                return <span style={{backgroundColor: 'red', color: 'white'}}> {mimeType} embedded asset </span>
            }
        }
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
                    linkedInLink
                }
                body {
                    json
                  }
                title
                subTitle
                createdAt(formatString: "ddd, MMM M, Y")
            }
        }

    }

`

export const BlogPostTemplate = ({
    title,
    body,
    createdAt,
    subTitle,
    name,
    linkedIn,
  }) => {
    return (
        <Layout>
            <Container>
                <TitleSlogan>
                    <h1>{title}</h1>
                    <p>{subTitle}</p>
                    <PostDate>PUBLISHED {createdAt} BY <a target="_blank" href={linkedIn}>{name}</a> </PostDate>
                </TitleSlogan>
                <BlogBody>
                {documentToReactComponents(body, options)}
                </BlogBody>
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
          subTitle={post.subTitle}
          body={post.body.json}
          createdAt={post.createdAt}
          name={post.author.name}
          linkedIn={post.author.linkedInLink}
        />
    )

}

Blog.propTypes = {
    data: PropTypes.shape({
        allContentfulBlog: PropTypes.object,
    }),
  }


export default Blog

