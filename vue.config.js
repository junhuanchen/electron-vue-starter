module.exports = {
  pages: {
    app: {
      entry: 'src/renderer/main.js',
      template: 'public/index.html',
    },
  },
  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.output.publicPath = `${process.cwd()}/dist/`
    }
  }
}