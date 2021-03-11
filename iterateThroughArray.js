/*
函数功能：在数组中查找特定项，并返回下标。
函数描述：如果当前浏览器支持Array.prototype.indexOf，直接调用
但是Array.prototype.indexOf时ES5的标准，有些浏览器不支持，需要自己实现*/

function indexOf(arr, item, fromIndex) {
	// fromIndex是可选参数，默认为0
	// fromIndex可以为负值，甚至是数字字符串，为负值时与从后往前
	this.fromIndex = +fromIndex || 0 ;    
	
	if (Array.prototype.indexOf) {
		return arr.indexOf(item, fromIndex)
	} else {	//自己实现indexOf函数
	
		if (this == null) {		// 数组不存在或未定义
		  throw new TypeError('"this" is null or not defined');
		}

		var len = arr.length;	
		if (len === 0) {
		  return -1;
		}

		var n = fromIndex || 0;
		if (Math.abs(n) === Infinity) {
		  n = 0;
		}
		if (n >= len) {
		  return -1;
		}
		var k = Math.max(n >= 0 ? n : len + n, 0);	
		
		while (k < len) {
		  if (arr[k] === searchElement) {
			return k;
		  }
		  k++;
		}
		return -1;
	  };
}
		