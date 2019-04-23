var http=require('http');

var server=http.createServer((req,res)=>{

var mytry={
    name:"Yugam",
    passion:"playing cricket",
    Birthdate:"20/03/1998"
};
res.end(JSON.stringify(mytry));

});

server.on("connection",(socket)=>{
    console.log("hello");
});
server.listen(3000);
console.log("going");