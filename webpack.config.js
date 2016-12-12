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

const isDev = true;

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
        head: '<link href="https://fonts.googleapis.com/css?family=Didact+Gothic" rel="stylesheet">',
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
   }
})

config.devtool = 'inline-source-map'


config.plugins.push(new webpack.DefinePlugin({
  'process.env': JSON.stringify(process.env || '')
}));

module.exports = config;
