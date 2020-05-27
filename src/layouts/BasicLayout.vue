<script>
import GlobalHeader from '@/components/global/GlobalHeader.vue'
import GlobalFooter from '@/components/global/GlobalFooter.js'
import SideMenu from '@/components/global/SideMenu.vue'
export default {
    components:{ GlobalHeader, SideMenu, GlobalFooter },
    data() {
      return {
        collapsed: false
      };
    },
    methods:{
        changeCollapse(){
            this.collapsed = !this.collapsed
        }
    },
    render(){
        const {collapsed, changeCollapse} = this
        const on = {
            'update:collapsed': val => (this.collapsed = val)
        }
        return(
            <el-container>
                    <div class={[collapsed?"menu-close":"menu-open"]}>
                        <side-menu collapsed={collapsed} {...{ on }} />
                    </div>
                <el-main id="main">

                        <global-header collapsed={collapsed} onToggle={changeCollapse} />
                        <el-row class="router">
                            <router-view />
                        </el-row>
                        <global-footer />
                </el-main>
            </el-container>
        )
    }
}
</script>

<style>
.menu-open,
.menu-close{
  height: 579px;
}
.menu-open{
    min-width:200px;
}
.router{
    height: 100%;
}
#main{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding:0 0 0 5px;
}
</style>