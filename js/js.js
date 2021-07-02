// 1.字节大小 Blob 对象表示一个不可变、原始数据的类文件对象。它的数据可以按文本或二进制的格式进行读取，也可以转换成 ReadableStream 来用于数据操作。 
const byteSize1 = str => new Blob([str]).size;
byteSize1('JavaScript') // 10
const byteSize2 = int => new Blob([int]).size;
byteSize2(101) // 3

//2.转换为数组
const convertToArray = val => Array.isArray(val) ? val :[val];
convertToArray('pro') // ["pro"]
convertToArray(101) // [101] 

// 3.字符串中字符的每个第一个字母大写 
// \b 是正则表达式规定代表着单词的开头或结尾，也就是单词的分界处。
// /g之后，表明可以进行全局匹配
const capitalize = str => str.replace(/\b[a-z]/g, char => char.toUpperCase());
capitalize('code'); // "Code"
capitalize('java scripte'); // "Java Scripte"

//  4.获取当前网址
const currentURL = () => window.location.href;
currentURL() // https://medium.com/@codedev101

// 5、数字化 数字转换为数字数组
