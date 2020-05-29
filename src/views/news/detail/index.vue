<template>
    <div>
      <div class="tb-header">
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
    </div>
</template>


<script>
import NewsAdd from "./NewsAdd.vue"
import { get } from '@/axios/apis';
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
          }
        }
      },
      created(){
          this.list()
      },
      methods:{
          async list(){
               await get('/api/getData').then((res)=>{
                 this.tableData = res.data;
              }) 
          },
          handleAdd(){
            this.$refs.add.dialogFormVisible = true
          },
          handleQuery(params) {
            this.$refs.add.dialogFormVisible = false
            console.log("已提交",params)
          },
      },
      
    }
</script>

<style scoped>
.tb-header{
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: row-reverse;
  margin: 10px 0 0 0;
  padding:10px 0 10px 0 ;
}
.tb-add{
   margin: 0 15px 0 0;
}
.table{
    margin: 1px 0 0 0;
    padding: 20px;
}
</style>