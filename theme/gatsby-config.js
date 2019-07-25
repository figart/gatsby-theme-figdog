module.exports = options => ({
    siteMetadata: {
        blogPath: options.blogPath || `/blog`,
        siteTitle: options.siteTitle || `Figdog Theme`,
        siteSlogan: options.siteSlogan || `Our fancy slogan to capture views`,
        logo: options.logo || `/src/images/figdog-logo.png`,
        colors: options.colors || { primary: "#f03838", darkGray: "#303030", darkDarkGray: "#303030"},
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
               link:'/blog'
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
                spaceId: `6slqt30vbp6o`,
                accessToken: `kMu_WbJUifLrb1hDLZ059bxoQ4P0MHFhgEcHHPHtV8Q`,
            },
        },
        `gatsby-plugin-emotion`,
        {
            resolve: `gatsby-plugin-compile-es6-packages`,
            options: {
              modules: [`figdog-theme`]
            }
          }
    ]
})

