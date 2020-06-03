<template>
    <div>
      <div class="tb-header">
        <el-breadcrumb class="bread" separator-class="el-icon-arrow-right">

          <el-breadcrumb-item :to="{ path: '/welcome' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>新闻</el-breadcrumb-item>
          <el-breadcrumb-item>新闻列表</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button type="primary" class="tb-add" @click="handleAdd()">添加</el-button>
      </div>
      <el-table
        :data="tableData"
        class="table"
        style="width: 100%">
        <el-table-column
          prop="newTime"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          width="180">
        </el-table-column>
        <el-table-column
          prop="imgUrl"
          label="图片地址">
        </el-table-column>
        <el-table-column
          prop="content"
          label="详细信息">
        </el-table-column>
        <el-table-column
          prop="from"
          label="新闻来源">
        </el-table-column>
      </el-table>
      <news-add ref="add" :vo="defaultFormData" @handleQuery="handleQuery" />
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        @current-change="currentChange">
      </el-pagination>
    </div>
</template>


<script>
import NewsAdd from "./NewsAdd.vue"
import { get, post } from '@/axios/apis';
    export default {
      name:"NewsList",
      components:{ NewsAdd },
      data() {
        return {
          tableData: [],
          defaultFormData:{
            id:'',
            title:"",
            imgUrl:"",
            from:"",
            newTime:"",
            content:""
          },
          total:0
        }
      },
      created(){
          this.list()
      },
      methods:{
          async list(){
               await get('/api/getData').then((res)=>{
                 this.tableData = res.data.formData;
                 this.total = res.data.page;
              })
              // console.log(this.$router.history.current.path,this.$store.state.navList)
               console.log( this.search(this.$store.state.navList,this.$router.history.current.path))
              // console.log(bar))
          },
          search(val,target){
            var result = ""
            val.forEach(item => {
              if(item.child===undefined){
                if(item.name === target){
                  result = item.navItem;
                  return result
                }
              }else{
                this.search(item.child,target)
              }
              return result
            })
            console.log(result)
          },
          currentChange(val){
            get('/api/getData?p='+ val ).then((res)=>{
                 this.tableData = res.data.formData;
              }) 
          },
          handleAdd(){
            this.$refs.add.dialogFormVisible = true
          },
          async handleQuery(params) {
            this.$refs.add.dialogFormVisible = false
            await post('/api/addData',params).then(res => {
              this.$message({
                message: res.data.msg,
                type: 'success'
              });
            })
            
          },
      },
      
    }
</script>

<style scoped>
.tb-header{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0 0 0;
  padding:10px 0 10px 0 ;
}
.bread{
  margin: 15px 0 0 15px;
  /* padding:10px 0 10px 0 ; */
}
.tb-add{
   margin: 0 15px 0 0;
}
.table{
    margin: 1px 0 0 0;
    padding: 20px;
}
</style>