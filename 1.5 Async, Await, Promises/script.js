function promisifiedMyOwnSetTimeout(duration){
    const p=new Promise(function(resolve){
        setTimeout(function(){
            resolve();
        },duration);
    });
    return p;
}
 
//async , await suntax, promise chaining ---> gets rid of callback hell
const ans=promisifiedMyOwnSetTimeout(2000);
ans.then(function(){
    console.log("Timeout is Done");
});