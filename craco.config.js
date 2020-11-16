const CracoLessPlugin = require('craco-less');
const path = require( 'path')

module.exports = {
    webpack: {
        alias: {
            '@':path.join(__dirname,'/src')
        },
    },
    // devServer: (devServerConfig, { env, paths, proxy, allowedHost }) => { return devServerConfig; },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color':  "rgb(60, 153, 240) "},
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};