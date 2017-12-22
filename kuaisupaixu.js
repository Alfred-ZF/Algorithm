var randomArr = require('./randomArr').randomArr;

// 算法思路：

// 从数组中去一个基准值
// 将小于基准值的放在一个数组，大于放入另一个数组（相同的可以放在任意一侧）
// 重复地进行第2步操作（递归）


// 快速排序
function QuickSort(arr) {
  // 传入的参数不是数组类型
  if(!Array.isArray(arr)) return;
  // 传的为空数组或者数组只有一个元素
  if(arr.length <= 1) {
    return arr;
  }
  // 取数组的中间项作为基准值
  var pivotIndex = Math.floor(arr.length/2);
  var pivot = arr.splice(pivotIndex, 1)
  var preArr = [],
       nextArr = [];
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] < pivot) {
          preArr.push(arr[i]);
        } else {
          nextArr.push(arr[i]);
        }
      }
  return QuickSort(preArr).concat(pivot, QuickSort(nextArr));
}

console.log(QuickSort(randomArr()));
//一般情况下复杂度为O(nlogn)，最糟糕情况为O(n^2)