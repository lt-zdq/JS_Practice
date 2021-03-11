/*要求在原数组的基础上删除数组元素，delete不会改变原数组长度，
只是将对应位置的元素设置为了undefined
需要使用splice，需要注意的是，他会自动改变arr的length*/


function removeWithoutCopy(arr, item) {
    let i = 0;
    // let len = arr.length;
	
    while (i<arr.length) {
		console.log('arrI');
		console.log(arr[i])
        if (arr[i] === item) {
            arr.splice(i,1);
            //len--;
        } else {
			i++;
		}
        
    }
	return arr;
}
