
console.log('---------String to Unicode(8进制)---------');
// String 转 Unicode`
var a = 'ab';
console.log(a.charAt(0));
console.log(a.charCodeAt(0)); // Unicode
console.log(String.fromCharCode('98'));

console.log('---------十进制转其他进制---------');

var a = 15;
console.log('2: ' + a.toString(2));
console.log('16: ' + a.toString(16));
console.log('10: ' + a.toString(10));
console.log('8: ' + a.toString(8));

console.log('---------十六进制转十进制---------');

var a = 'f';
console.log(parseInt(a, 16));

console.log('---------二进制换算巧用---------');

console.log(170 & 0xf); // 只取二进制低4位数
console.log(12 >> 2); // 二进制向右位移，1100 to 0011
