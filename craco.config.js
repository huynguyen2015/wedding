const { when, whenDev, whenProd, whenCI, whenTest, ESLINT_MODES, POSTCSS_MODES } = require('@craco/craco');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CracoAntDesignPlugin = require('craco-antd');
const path = require('path')
const abp = require('./src/lib/abp.js')

module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeThemeLessPath: path.join(__dirname, 'src/styles/variable.less')
      }
    },
  ],
  webpack: {
    alias: {
      '@components': path.join(path.resolve(__dirname, './src/components')),
      '@assets': path.join(path.resolve(__dirname, './src/assets')),
      '@models': path.join(path.resolve(__dirname, './src/models')),
      '@lib': path.join(path.resolve(__dirname, './src/lib')),
      '@scenes': path.join(path.resolve(__dirname, './src/scenes')),
      '@services': path.join(path.resolve(__dirname, './src/services')),
      '@stores': path.join(path.resolve(__dirname, './src/stores')),
      '@utils': path.join(path.resolve(__dirname, './src/utils'))
    },
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      if (!webpackConfig.plugins) {
        config.plugins = [];
      }

      webpackConfig.plugins.push(
        process.env.NODE_ENV === 'production'
          ? new CopyWebpackPlugin([
              {
                from: 'src/lib/abp.js',
              },
            ])
          : new CopyWebpackPlugin([
              {
                from: 'src/lib/abp.js',
              },
            ])
      );

      return webpackConfig;
    },
  },
  jest: {
    configure: {
        globals: {
            "CONFIG": true,
            "abp": abp
        }
    }
  }
};
