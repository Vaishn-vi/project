var promise=new Promise(function (resolve,reject){
    const a="hello world";
    const b='hello world';
    if(a===b){
        resolve();
    }
    else{
        reject();
    }
});
promise.then(function(){
    console.log("Hello World");
}).catch(function(){
    console.log("reject");
})