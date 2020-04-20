/*
* @Author: mnur-chenjiachen
* @Date:   2020-03-30 22:26:16
* @Email:  jiacheng.chen@hand-china.com
* 
*/
let demoList = [{
        id: 1,
        name: 'zs',
        age: '23',
        job: '前端工程师'
    },{
        id: 2,
        name: 'ww',
        age: '24',
        job: '后端工程师'
    }]

export default {
    'get|/parameter/query':  () => {
    return {
      status: 200,
      message: 'success',
      data: demoList
    };
  }
}