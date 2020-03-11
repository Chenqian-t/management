// 基于customize-cra和react-app-rewired的定制化配置文件

// 从customize-cra引入一些相关方法
const { override, addLessLoader, fixBabelImports, addDecoratorsLegacy } = require('customize-cra');

const theme = require('./theme');

module.exports = override(
    addLessLoader({
        // 添加less支持
        javascriptEnabled: true,
        // antd的自定义主题
        modifyVars: theme
    }),
    // 装饰器写法支持
    addDecoratorsLegacy(),
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
);