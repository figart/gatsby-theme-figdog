import React from 'react'
import { Link } from 'gatsby'
import * as variable from 'figdog-theme/src/components/variables'
import styled from 'styled-components'
import { Global, css } from "@emotion/core"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const BlogTeaserContainer = styled.div`
    margin: 40px 0px;
    position: relative;

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

const BlogTeaser = ({post}) => {
    console.log(post)
return(
    <BlogTeaserContainer className="blog-teaser">
            <Global
            styles={css`
                .blog-teaser{
                    color:${variable.primaryColor};
                    a.blog-teaser-link-title{
                        color:${variable.primaryColor};
                        font-weight:bold;
                        display:block;
                        font-size:20px;
                        text-decoration:none;
                    }
                    .blog-teaser-date{
                        color:${variable.orange};
                        font-size:16px;
                    }
                }
                body.dark{
                    color:${variable.lightGray};
                    .blog-teaser{
                        color:${variable.lightGray};
                        a.blog-teaser-link-title{
                            color:white;
                        }
                        a{
                            color:${variable.lightGray};
                        }
                        .blog-teaser-date{
                            color:${variable.lightGray};
                        }
                    }
                }
            `}
            />
        <Link className="blog-teaser-link-title" to={post.fields.slug}>
            {post.title}
        </Link>
            <div className="blog-teaser-date">{post.createdAt}</div>
           {post.teaser && <div className="blog-teaser-body">{documentToReactComponents(post.teaser.json, options) }</div>}
        
    
    </BlogTeaserContainer>
)
  }

export default BlogTeaser