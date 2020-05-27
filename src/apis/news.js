//////新闻列表
/**
 * 新闻列表
 * @param {Number} pageNo - 页码
 * @param {Number} pageSize - 页数
 */
export const GET_NEWS_LIST = {
    method:'GET',
    url:'/api/getData',
    params:{ pageNo: 1, pageSize: 10 }
}