
module.exports = {
    devServer:{
        port:8080,
        proxy:{
            '/api':{
                target:"http://172.29.5.65:8989",
                pathRewrite:{
                    '^/api':''
                }//重写路径
            }
        }
    }
}