var http = require('http');

var fs = require('fs');

var server = http.createServer();


//server.listen([port][, host][, backlog][, callback])
    /**
     * port <number> ：端口号
       host <string> ：主机ip
       backlog <number> server.listen() 函数的通用参数
       callback <Function> server.listen() 函数的通用参数
       Returns: <net.Server>
       启动一个TCP服务监听输入的port和host。
       如果port省略或是0，系统会随意分配一个在'listening'事件触发后能被server.address().port检索的无用端口。
       如果host省略，如果IPv6可用，服务器将会接收基于unspecified IPv6 address (::)的连接，否则接收基于unspecified IPv4 address (0.0.0.0)的连接
     */
       
server.listen(8888,'127.0.0.2',function(){
    console.log('服务器正在端口号8888进行...');
});

server.on('request',function(request,response){
    
    var url = request.url;
    console.log(url);
    if(url ==='/'){
        //response.writeHead(响应状态码，响应头对象): 发送一个响应头给请求。
        response.writeHead(200,{'Content-Type':'text/html;charset=UTF-8'})
        // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./page/Login.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            //data就是html文件的内容
            response.end(data);
        });
    
    }else if(url === '/login'){
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./page/Login.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            console.log(data);
            response.end(data);
        });
    }else if(url === '/index'){
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./page/Index.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
    }else{
        response.writeHead(200,{'Content-Type':'text/html'});
        // 如果url=‘/’ ,读取指定文件下的html文件，渲染到页面。
        fs.readFile('./page/notFount.html','utf-8',function(err,data){
            if(err){
                throw err ;
            }
            response.end(data);
        });
    }
    
});
