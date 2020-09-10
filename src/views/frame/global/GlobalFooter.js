import config from '@/config'
export default {
  name: 'GlobalFooter',
  render() {
    return (
      <el-row style="textAlign: center">
        {config.siteName} {config.copyright}
      </el-row>
    )
  }
}
