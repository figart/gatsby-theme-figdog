require('dotenv').config()

module.exports = options => ({
    siteMetadata: {
        blogPath: options.blogPath || `/blog`,
        siteTitle: options.siteTitle || `Figdog Theme`,
        siteSlogan: options.siteSlogan || `Our fancy slogan to capture views`,
        logo: options.logo || `/src/images/figdog-logo.png`,
        colors: options.colors || { primary: "#f03838", darkGray: "#303030", darkDarkGray: "#303030", lightGray: "#aeadad"},
        breakpoints: options.breakpoints || {mobileWidth: `800px`, tabletWidth: `1100px`, desktopWidth: `1260px`},
        topMenuLinks: options.topMenuLinks || [
            {
               name:'Figdog Theme',
               link:'/'
            },
            {
                name:'',
                link:'www.twitter.com',
                icon: 'fab fa-twitter'
             },
             {
                name:'',
                link:'www.rss.com',
                icon: 'fas fa-mobile-alt'
             },
             {
                name:'',
                link:'www.linkedin.com',
                icon: 'fas fa-mobile-alt'
             },
        ],
        menuLinks: options.menuLinks || [
            {
               name:'Blog',
               link:'/'
            },
            {
                name:'Contact',
                link:'/contact',
             },
             {
                name:'About',
                link:'/about',
             },
        ],
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.spaceId,
                accessToken: process.env.accessToken,
            },
        },
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-compile-es6-packages`,
            options: {
              modules: [`figdog-theme`]
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
              fonts: [
                `Open Sans\:300,400,400i,700` // you can also specify font weights and styles
              ],
            }
          }
    ]
})

