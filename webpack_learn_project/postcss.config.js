console.log('自动读取postcss.config.js配置文件...添加浏览器不兼容样式前缀');
module.exports = {
    plugins: [
        require('autoprefixer')
    ]
}
