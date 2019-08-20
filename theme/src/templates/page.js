import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import BlogSection from '../components/organisms/sections/section-bloglist'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Container from '../components/container'
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { Helmet } from "react-helmet"
import { Global, css } from "@emotion/core"

const Body = styled.div`
    img{
        float:right;
        max-width:350px;
        margin-left:20px;
        margin-bottom:20px;
    }
`

const Form = styled.div`
    input{
        width:100%;
        padding:10px 5px;
        margin-bottom:20px;
    }
    textarea{
        width:100%;
        padding:10px 5px;
        min-height:150px;
    }
    button{
        background-color: ${variable.primaryColor};
        padding:10px 20px;
        -webkit-appearance: none;
        color:white;
        font-weight:bold;
        border:0px;
    }
`

const TitleSlogan = styled.div`

        text-align:center;
        border-bottom:7px solid ${variable.darkGray};
        padding:0px 0px 40px 0px;
        margin-bottom:20px;
        h3{
            font-weight:normal;
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

    query PagePostByID($id: String!) {
        allContentfulPage(
            filter:{
                id:{eq: $id}
            }
        ) {
            nodes{
                fields{
                    slug
                }
                title
                subTitle
                homePage
                body{
                    json
                }
            }
        }

    }

`

export const PagePostTemplate = ({
    title,
    homePage,
    subTitle,
    slug,
    body,
  }) => {
    return (
        <Layout>
            <Global
                styles={css`
                    body #_form_5D5C01CEAB2D4_{
                        padding:0px !important;
                        margin:0px !important;
                        color:${variable.darkGray} !important;
                        width:100% !important;
                        font-family: 'Poppins',sans-serif !important;
                        button._submit{
                            background-color:${variable.primaryColor} !important;
                            font-family: 'Poppins',sans-serif !important;
                        }
                    }
                `}
            />
            <Container>   
                <Body>
                {documentToReactComponents(body, options)}
                </Body>
                {homePage === true && <BlogSection></BlogSection>}
                {slug === '/engage' &&
                <div>
                    
                    <Helmet>
                    <script src="https://digett.activehosted.com/f/embed.php?id=9" type="text/javascript" charset="utf-8"></script>
                    <script src="https://digett.activehosted.com/f/embed.php?id=7" type="text/javascript" charset="utf-8"></script>
                    </Helmet>
                    <Form>
                    <div class="_form_7"></div>
                    <div class="_form_9"></div>
                    </Form>
                </div>
                }
            </Container>
        </Layout>
    )
  }

const Page = ({ data }) => {

    const { [0]: post } = data.allContentfulPage.nodes
    if(post.body !== null){
        var body = post.body.json
    }
    else{
        var body = '';
    }

    console.log(post)

    return (
        <PagePostTemplate
          title={post.title}
          homePage={post.homePage}
          subTitle={post.subTitle}
          slug={post.fields.slug}
          body={body}
        />
    )

}

Page.propTypes = {
    data: PropTypes.shape({
        allContentfulPage: PropTypes.object,
    }),
  }


export default Page

