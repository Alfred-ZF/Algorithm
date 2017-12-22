var randomArr = require('./randomArr').randomArr;

// 插入排序

// 算法思路：

// 将第1个元素认为已排序
// 取下一个元素，在已排序了的数列里面从后向前扫描
// 如果在已排序数列中正在比较的这个元素大于从未排序数列中取出的元素，则比较已排序中的下一个元素
// 重复第3步操作，如果找到已排序的元素小于或等于取出的元素的位置
// 将新元素插入到该位置
// 重复第2步操作
function InsertSort(arr) {
  var len = arr.length;
  // 第一个元素视为有序数列，之后的元素视为无序数列
  for(var i = 1; i < len; i++) {
    if (arr[i] < arr[i - 1]) {
      // 取出无序数列的第i个元素插入到有序列表对应位置
      var ele = arr[i];
      // 
      var j  = i - 1;
      arr[i] = arr[j];

      while( j>= 0 && ele < arr[j]){
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = ele;
    }
  }

  return arr;
}

console.log(InsertSort(randomArr()))
//一般情况下的复杂度和最糟糕的复杂度都为O(n^2)