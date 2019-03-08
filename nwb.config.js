module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactFeedbackClap',
      externals: {
        react: 'React'
      }
    }
  }
}
