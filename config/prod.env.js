'use strict'
const target = process.env.npm_lifecycle_event;
console.log(target);
if (target == 'test') {
　　//测试
　　var obj = {
  　　NODE_ENV: '"production"',
  　　//post用当前域名
  　　API_ROOT: '"http://172.16.4.205/webapi/test"'
　　}
}else {
　　//线上
　　var obj = {
  　　NODE_ENV: '"test"',
  　　//post用当前域名
  　　API_ROOT: '"http://172.16.4.205/webapi/"'
　　}
}
module.exports = obj;
