import React from 'react'
import { graphql } from "gatsby"
import PropTypes from 'prop-types'
import Layout from '../components/layout'
import BlogSection from '../components/organisms/sections/section-bloglist'
import * as variable from '../components/variables'
import styled from 'styled-components'
import Container from '../components/container'

const TitleSlogan = styled.div`

        text-align:center;
        border-bottom:7px solid ${variable.darkGray}
        padding:0px 0px 40px 0px;

    `

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
                homePage
            }
        }

    }

`

export const PagePostTemplate = ({
    title,
    homePage
  }) => {
    return (
        <Layout>
            <Container>
                <TitleSlogan>
                    <h1>{title}</h1>
                    <h3>{variable.siteSlogan}</h3>
                </TitleSlogan>     
                {homePage === true && <BlogSection></BlogSection>}
            </Container>
        </Layout>
    )
  }

const Page = ({ data }) => {

    const { [0]: post } = data.allContentfulPage.nodes

    return (
        <PagePostTemplate
          title={post.title}
          homePage={post.homePage}
        />
    )

}

Page.propTypes = {
    data: PropTypes.shape({
        allContentfulPage: PropTypes.object,
    }),
  }


export default Page

