const withTM = require('next-transpile-modules')([
  '@georgedoescode/generative-utils'
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true
})
