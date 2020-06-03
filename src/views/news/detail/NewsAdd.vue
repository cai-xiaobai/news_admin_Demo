<template>
<el-dialog title="添加新闻" :visible.sync="dialogFormVisible">
  <el-form :model="ruleForm2" status-icon ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="标题" prop="title">
        <el-input type="text" v-model="ruleForm2.title"></el-input>
    </el-form-item>
    <el-form-item label="图片地址" prop="imgUrl">
        <el-input type="text" v-model="ruleForm2.imgUrl"></el-input>
    </el-form-item>
    <el-form-item label="来源" prop="from">
        <el-input v-model="ruleForm2.from"></el-input>
    </el-form-item>
    <el-form-item label="时间" prop="newTime">
        <el-input v-model="ruleForm2.newTime"></el-input>
    </el-form-item>
    <el-form-item label="正文" prop="content">
        <el-input v-model="ruleForm2.content"></el-input>
    </el-form-item>
    <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
        <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
    </el-form>

</el-dialog>
</template>
<script>
  export default {
    props:{
      vo:Object
    },
    data() {
      // var checkAge = (rule, value, callback) => {
      //   if (!value) {
      //     return callback(new Error('年龄不能为空'));
      //   }
      //   setTimeout(() => {
      //     if (!Number.isInteger(value)) {
      //       callback(new Error('请输入数字值'));
      //     } else {
      //       if (value < 18) {
      //         callback(new Error('必须年满18岁'));
      //       } else {
      //         callback();
      //       }
      //     }
      //   }, 1000);
      // };
      // var validatePass = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请输入密码'));
      //   } else {
      //     if (this.ruleForm2.checkPass !== '') {
      //       this.$refs.ruleForm2.validateField('checkPass');
      //     }
      //     callback();
      //   }
      // };
      // var validatePass2 = (rule, value, callback) => {
      //   if (value === '') {
      //     callback(new Error('请再次输入密码'));
      //   } else if (value !== this.ruleForm2.pass) {
      //     callback(new Error('两次输入密码不一致!'));
      //   } else {
      //     callback();
      //   }
      // };
      return {
        dialogFormVisible: false,
        formLabelWidth: '120px',
        ruleForm2: {
            id:'',
            title:"",
            imgUrl:"",
            from:"",
            newTime:"",
            content:""
        },
        // rules2: {
        //   pass: [
        //     { validator: validatePass, trigger: 'blur' }
        //   ],
        //   checkPass: [
        //     { validator: validatePass2, trigger: 'blur' }
        //   ],
        //   age: [
        //     { validator: checkAge, trigger: 'blur' }
        //   ]
        // }
      };
    },
    methods: {
      async submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$emit('handleQuery',this.ruleForm2)
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        await function clean(){
           this.$refs[formName].resetFields();
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>