const withTM = require('next-transpile-modules')([
  '@georgedoescode/generative-utils'
]) // pass the modules you would like to see transpiled

module.exports = withTM({
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    })

    return config
  }
})
