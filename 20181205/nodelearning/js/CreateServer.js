// 创建服务器

var http = require('http');
http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type':'text/plain;charset=UTF-8'});
    // 发送响应数据
    response.end('欢迎你！\n');
    var name = 'lilu';
    response.end(name);

}).listen(8888);