<script>
import config from '../../config/index'
export default {
    name:'SideMenu',
    props:{
        collapsed:{
            type:Boolean,
            default:false
        }
    },
    data() {
      return {
            navList:[ 
                {name:'/welcome',navItem:'首页'}, 
                {name:'/news',navItem:'新闻',child:[{name:'/newsList',navItem:'新闻列表'}]
                },
                {name:'/components/User',navItem:'会员',child:[{name:'/userList',navItem:'会员列表'}]}, 
            ] 
      };
    },
    watch:{
        collapsed(){

        }
    },
    methods:{
        renderMenu(){
            const {collapsed,  navList } = this
            const Menu = (
                <el-menu
                    class="el-menu"
                    router
                    default-active="/welcome"
                    collapse={collapsed}>
                    {navList.map((item,i)=>(
                        // <el-menu-item key={i} index={item.name}>
                        //     <i class="el-icon-s-platform" ></i>
                        //     <span slot="title"> { item.navItem }</span>
                        // </el-menu-item>
                        <div>
                        {item.child===undefined? 
                        <el-menu-item  key={i} index={item.name}>
                             <i class="el-icon-s-platform" ></i>
                             <span slot="title"> { item.navItem }</span>
                        </el-menu-item>: 
                        <el-submenu  key={i} index={item.name}>
                            <template slot="title">
                                <i class="el-icon-s-platform"></i>
                                <span slot="title"> { item.navItem }</span>
                            </template>
                            {item.child.map((item,i)=>(
                                <el-menu-item index={item.name} key={i}>{item.navItem}</el-menu-item>
                            ))}
                        </el-submenu>}
                        </div>
                    ))}   
                </el-menu>
            )
            return Menu
        }
    },
    render(){
        const {collapsed } = this 
        const Content = [
            <div class='dark-logo'>
                <img class="mark" src="https://www.6ke.com/static/h5/images/logo.png" />
                <h1 v-show={!collapsed} class='dark-title'>
                    {config.nickName}
                </h1>
            </div>
        ]
        return ( 
            <el-row>
                {Content}
                {this.renderMenu()}
            </el-row>
        ) 
    }
}
</script>

<style scoped>

.el-menu{
    width: 100%;
    min-height: 100%;
}
.dark-logo {
    height: 64px;
    line-height: 64px;
    background-color: #ffffff;
    overflow: hidden;
}
.mark {
    width: 32px;
}

.dark-title {
    display: inline-block;
    margin: 0  0 15px 5px;
    font-size: 18px;
    font-weight: 600;
    color: #000;
    vertical-align: middle;
    transition: all 0.5s ease;
  }
</style>
