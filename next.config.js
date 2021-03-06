const withImages = require('next-images');

module.exports = withImages({
    exportTrailingSlash: true,
    env: {
      EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
      EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    },
    exportPathMap: () => ({
        '/': { page: '/' },
        '/contact': { page: '/contact' },
        '/blank-page': { page: '/blank-page' },
      }),
    publicRuntimeConfig: {
      localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string'
        ? process.env.LOCALE_SUBPATHS
        : 'none',
    },
    webpack: (config, options) => {
      const prod = process.env.NODE_ENV === 'production';
      const plugins = [...config.plugins];
      return {
        ...config,
        devtool: prod ? 'hidden-source-map' : 'eval',
        mode: prod ? 'production' : 'development',
        plugins,
      };
      // cssModules: true,
      // //      config.module.rules.push({
      // //          enforce: 'pre',  
      // //          test: /\.js?$/,
      // //          exclude: [/node_modules/],
      // //          loader: 'eslint-loader', 
      // //          options: {
      // //            quiet: true,
      // //          }
      // //      });
      // config.node = {
      //   fs: 'empty'
      // }
      // return config;
    },
});
