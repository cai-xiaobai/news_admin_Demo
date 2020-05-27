<template>
    <el-table
      :data="tableData"
      class="table"
      style="width: 100%">
      <el-table-column
        prop="content"
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
</template>


<script>
import { get } from '@/axios/apis';
    export default {
      data() {
        return {
          tableData: []
        }
      },
      created(){
          this.list()
      },
      methods:{
          async list(){
               await get('/api/getData').then((res)=>{
                 this.tableData = res.data;
                 console.log(this.tableData)
              }) 
          }
      },
      
    }
</script>

<style scoped>
.table{
    margin: 5px 0 0 0;
    padding: 20px;
}
</style>