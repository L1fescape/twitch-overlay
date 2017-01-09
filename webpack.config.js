const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;
const _ = require('lodash');

const getConfig = require('hjs-webpack');

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

const isDev = process.env.NODE_ENV === 'development'

const head = [
   /* '<link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet">', */
   '<meta name="viewport" content="width=device-width, initial-scale=1">'
]

var config = getConfig({
  isDev: isDev,
  https: false,
  in: join(src, 'index.js'),
  out: dest,
  clearBeforeBuild: true,
  hostname: '0.0.0.0',
   html: function (context) {
    return {
      'index.html': context.defaultTemplate({
        title: 'Overlay',
        head: head.join(''),
        html: '<div id="app"></div>'
      })
    }
  },
  devServer: {
    proxy: {
       context: "/api",
       options: {
         target: "http://192.168.1.81:3001",
         pathRewrite: {
           "^/api": ""
         }
       }
     }
   },
   module: {
     loaders: [
       { test: /\.css$/, loader: 'style-loader!css-loader' },
       { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
       { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
       { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
       { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
       { test: /\.json$/, loader: 'json-loader'},
       { test: /\.scss$/, exclude: /node_modules/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'},
     ]
   }
})

config.resolve.root = [src, modules];
config.resolve.alias = {
  'containers': join(src, 'containers'),
  'components': join(src, 'components'),
  'actions': join(src, 'actions'),
  'reducers': join(src, 'reducers'),
  'constants': join(src, 'constants'),
  'selectors': join(src, 'selectors'),
  'styles': join(src, 'styles'),
  'utils': join(src, 'utils'),
  'blog': join(root, 'blog'),
};

config.devtool = 'inline-source-map'

config.plugins.push(new webpack.DefinePlugin({
  'process.env': JSON.stringify(process.env || '')
}));

module.exports = config;
