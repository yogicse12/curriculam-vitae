// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Yogendra Yadav',
  plugins: [
    {
      use: "gridsome-plugin-tailwindcss"
    }
  ],
  chainWebpack: config => {
    config.module
      .rule('css') // or sass, scss, less, postcss, stylus
      .oneOf('normal') // or module
        .use('postcss-loader')
          .tap(options => {
            options.plugins.push(tailwindcss('./tailwind.js'))
            return options
          })
  }
}
