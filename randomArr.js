function notInArrNum(arr){
  var num = Math.floor(Math.random()*100);
  // 生成一个随机数
  // 如果存在于数组中 -> 递归调用
  // 否则将这个随机数返回
  if(arr.indexOf(num) != -1){
    num = notInArrNum(arr);
  } else {
    return num;
  }
}
// 生成随机数数组
function randomArr() {
  var count = 0;
  var arr = [];
  while(count < 100) {
    var a = notInArrNum(arr);
    arr.push(a);
    count++;
  }
  return arr;
}