require('dotenv').config()

module.exports = options => ({
    siteMetadata: {
        blogPath: options.blogPath || `/blog`,
        siteTitle: options.siteTitle || `Figdog Theme`,
        siteSlogan: options.siteSlogan || `Our fancy slogan to capture views`,
        logo: options.logo || `/src/images/Logo-White.png`,
        logodark: options.logo || `/src/images/Logo-Dark.png`,
        colors: options.colors || { primary: "#f03838", darkGray: "#303030", darkDarkGray: "#303030", lightGray: "#aeadad",cream: "#061836",gold: "#EBBA7D",orange: "DE6936",red: "#BF0F0F",darkBlue: "#061836"},
        breakpoints: options.breakpoints || {mobileWidth: `800px`, tabletWidth: `1100px`, desktopWidth: `1268px`},
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
        footerMenuLinks: options.footerMenuLinks || [
            {
                name:'ABOUT',
                link:'/about',
                icon: ''
             },
             {
                name:'FOLLOW ME',
                link:'www.twitter.com',
                icon: ''
             },
             {
                name:'ARCHIVE',
                link:'/archive',
                icon: ''
             },
             {
                name:'DARK MODE',
                link:'#',
                icon: ''
             },
        ],
    },
    plugins: [
        {
            resolve: "gatsby-source-contentful",
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
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
                `Poppins\:300,400,400i,600,700` // you can also specify font weights and styles
              ],
            }
          },
          {
            resolve: "gatsby-plugin-google-tagmanager",
            options: {
              id: "GTM-5973DMQ",
        
              // Include GTM in development.
              // Defaults to false meaning GTM will only be loaded in production.
              includeInDevelopment: false,
        
              // datalayer to be set before GTM is loaded
              // should be an object or a function that is executed in the browser
              // Defaults to null
              defaultDataLayer: { platform: "gatsby" },
      
            },
          },
    ]
})

