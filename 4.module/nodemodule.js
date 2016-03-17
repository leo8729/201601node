//file system
//加载fs核心模块 node自带的模块
var fs=require("fs");
fs.readFile("./index.txt");


//文件模块 就是我们自己写的模块文件模块
require("./math.js");

//别人给你的，第三者的，第三方模块
