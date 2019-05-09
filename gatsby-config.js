module.exports = {
  siteMetadata: {
    title: 'ShellPunk',
    author: 'Jorge Moreno',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/posts`,
      },
    },
    'gatsby-transformer-remark',
  ],
};
