const webpack = require('webpack');
const fs      = require('fs');
const path    = require('path'),
      join    = path.join,
      resolve = path.resolve;

const getConfig = require('hjs-webpack');

const root    = resolve(__dirname);
const src     = join(root, 'src');
const modules = join(root, 'node_modules');
const dest    = join(root, 'dist');

var config = getConfig({
  isDev: true,
  https: false,
  in: join(src, 'index.js'),
  out: dest,
  clearBeforeBuild: true,
  devServer: {
    proxy: {
       context: "/api",
       options: {
         target: "http://localhost:8080",
         pathRewrite: {
           "^/api": ""
         }
       }
     }
   }
})

module.exports = config;
