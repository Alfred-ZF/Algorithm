var randomArr = require('./randomArr').randomArr;

// 选择排序

// 算法思路：
// 首先在未排序序列中找到最小元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小元素，然后放到排序序列末尾，递归执行该操作。
function SelectSort(arr) {
  if(!Array.isArray(arr)) return;
  var length = arr.length;
  for (var i = 0; i < length; i++) { //缩小选择的范围
    var min = arr[i]; //假定范围内第一个为最小值
    var index = i; //记录最小值的下标
    for (var j = i + 1; j < length; j++) { //在范围内选取最小值
      if (arr[j] < min) {
        min = arr[j];
        index = j;
      }
    }
    if (index != i) { //把范围内最小值交换到范围内第一个
      var temp = arr[i];
      arr[i] = arr[index];
      arr[index] = temp;
    }
  }
  return arr;
}

console.log(SelectSort(randomArr()))

//一般情况下和最糟糕情况的复杂度都为n^2