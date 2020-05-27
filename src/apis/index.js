const apiContext = require.context('./',false,/\.js$/) //require.context(读取文件的路径,是否遍历文件的子目录,匹配文件的正则)

apiContext.keys().foreEach(api =>{
    if(api.startsWith('./index')) return
    const module = apiContext(api)
    apis = {...apis,...(module.default || module)}
})

export default apis