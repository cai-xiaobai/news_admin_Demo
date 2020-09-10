<script>
export default {
    name:"GlobalHeader",
    props:{
        collapsed:{
            type:Boolean
            }
    },
    data() {
      return {

      };
    },
    methods:{
        toggleHandle(){
            this.$emit('toggle')
        }
    },
    watch:{
        collapsed(){}
    },
    render(){
        let {collapsed, toggleHandle } = this
        return (
            <transition name="showHeader">
                <el-row class="global-header" style="background-color: #fff;">
                    <i class={[collapsed ? 'el-icon-s-unfold trigger icon-trigger' : 'el-icon-s-fold trigger icon-trigger']} onClick={toggleHandle}></i>
                </el-row>
            </transition>
        )
    }
}
</script>

<style>
.global-header {
  position: relative;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(#000, 0.1);
  z-index: 2;
}
.icon-trigger {
    font-size: 20px;
    line-height: 3.2;
    vertical-align: top;
}
.trigger {
    height: 100%;
    float: left;
    cursor: pointer;
}
.trigger:hover {
    background-color: rgb(218, 214, 214);
}
.showHeader-enter-active {
  transition: all 0.25s ease;
}
.showHeader-leave-active {
  transition: all 0.5s ease;
}
.showHeader-enter,
.showHeader-leave-to {
  opacity: 0;
}
</style>