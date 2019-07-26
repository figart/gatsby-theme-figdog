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
            <Container>
                <TitleSlogan>
                    <h1>{title}</h1>
                    {homePage === true && <h3>{variable.siteSlogan}</h3>}
                    <h3>{subTitle}</h3>
                </TitleSlogan>     
                <Body>
                {documentToReactComponents(body, options)}
                </Body>
                {homePage === true && <BlogSection></BlogSection>}
                {slug === '/contact' &&
                <Form>
                    <form name='contact' method="post" netlify-honeypot="bot-field" data-netlify="true">
                    <input type="hidden" name="form-name" value='contact'  />
                    <p hidden> <label htmlFor="bot-field">Don’t fill this out:{' '}<input name="bot-field" /> </label> </p>
                                        <div class="form-group">
                                            <input type="text" placeholder="NAME" name="name" id="name" class="form-control" data-required="true" data-interactive="true" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" placeholder="EMAIl ADDRESS" name="email" id="email" class="form-control" data-required="true" data-interactive="true" required />
                                        </div>
                                        <div class="form-group">
                                            <input type="tel" placeholder="PHONE" name="phone" id="phone" class="form-control" data-required="false" data-interactive="true" required />
                                        </div>
                                        <div class="form-group text">
                                            <textarea name="textarea" placeholder="YOUR MESSAGE" id="textarea" class="textarea form-control" data-required="true" data-trim="true"/>
                                        </div>
                                        <div>
                                            <button type="submit" class="btn btn-submit">SEND MESSAGE</button>
                                        </div>
                                    </form>
                                    </Form>
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

