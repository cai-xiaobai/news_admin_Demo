export default {
    state: {
        navList:[ 
            {name:'/welcome',navItem:'首页'}, 
            {name:'/news',navItem:'新闻',child:[{name:'/newsList',navItem:'新闻列表'}]
            },
            {name:'/components/User',navItem:'会员',child:[{name:'/userList',navItem:'会员列表'}]},
        ]
    },
  
    mutations: {},
    actions: {}
  }