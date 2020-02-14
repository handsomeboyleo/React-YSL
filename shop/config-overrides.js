//  修改config-override.js文件

//  http://npm.taobao.org/package/customize-cra
//  https://blog.csdn.net/weixin_33850890/article/details/91372527

const path = require("path");
const {
    override,
    addWebpackAlias,
    fixBabelImports,
    addLessLoader
} = require("customize-cra");

module.exports = override(
    addLessLoader({
        strictMath: true,
      noIeCompat: true,
      localIdentName: '[local]--[hash:base64:5]' // if you use CSS Modules, and custom `localIdentName`, default is '[local]--[hash:base64:5]'.
    }),
    fixBabelImports('import', {
        libraryName: 'antd-mobile',
        style: 'css',
    }),
    addWebpackAlias({
        ["@"]: path.resolve(__dirname, "src")
    }),
);  