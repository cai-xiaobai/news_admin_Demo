// 全局配置变量
export default {
    nickName: '天下事',
    siteName: '天下事后台业务管理系统',
    copyright: '©2020 Created by ccc',
    navTheme: 'dark', // ['dark', 'light'] 两种主题
    // 开发配置
    isDev: process.env.NODE_ENV === 'development',
    // 是否开启权限
    permissions: true,
    // 是否打印请求日志
    resLog: true,
    // 是否开启mock数据
    mock: false,
    // 是否开启debug（暂无此功能）
    debug: false
  }
  