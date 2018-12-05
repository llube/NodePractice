// 创建异步函数
// 自定义
function foo1(name, age,callback){
    console.log('name is ...',name);
    console.log('age is ...',age);
    callback();
}

foo1('lilu',25,function(){
    console.log('lilu 加油！');
})


// 同步读取文件
var fs = require('fs');
var data = fs.readFileSync('./files/input.txt');
console.log(data.toString());

// 异步读取文件
fs.readFile('./files/input.txt',function(err,data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data.toString());
});
console.log('程序执行完毕！');