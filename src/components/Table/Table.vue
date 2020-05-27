<script>
export default {
    name:'Table',
    props:{
        // 自定义props
        api:{
            type:String,
            required:true
        },
        filters:{
            type:Object,
            default() {
                return {}
            }
        },
        selectable:[Boolean,Array],
        showSum:{
            type:Boolean,
            default:false
        },
        
    }
}
</script>